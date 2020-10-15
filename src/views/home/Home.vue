<template>
  <div id="nav-home">
    <nav-bar slot="center" class="home-nav"></nav-bar>
    <tab-control class="tab-control" v-show="isFlexd" :titles="['流行','新款','精选']" @tabClick="tabClick"
                 ref="tabcontrol1" ></tab-control>

    <scroll class="content" ref="scroll" :position="3" @scroll="scroll" @pullingUp="lodMore" :pullingUp="true">
      <home-swiper-item :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper-item>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :class="{fixed: isFlexd}" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol2" ></tab-control>
      <goods-list :goods="showsgoods"></goods-list>
    </scroll>

    <back-top @click.native="backtop" v-show="isShowbacktop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

import HomeSwiperItem from "@/views/home/Compons/HomeSwiperItem";
import HomeRecommendView from "@/views/home/Compons/HomeRecommendView";
import HomeFeatureView from "@/views/home/Compons/HomeFeatureView";



import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { debounce } from "@/common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiperItem,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      currIndex: 'pop',
      isShowbacktop:false,
      tobOffsetTop: 0,
      isFlexd:false
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    //监听图片
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('ItemImageLoad',() =>{
      refresh()
    })
  },
  computed:{
    showsgoods(){
      return this.goods[this.currIndex].list
    }
  },
  methods:{
    /**
     *
     * 事件监听相关的方法
     */
    tabClick(index){
      switch (index){
        case 0:
          this.currIndex = 'pop'
          break
        case 1:
          this.currIndex = 'new'
          break
        case 2:
          this.currIndex = 'sell'
          break
      }
      this.$refs.tabcontrol1.countIndex = index
      this.$refs.tabcontrol2.countIndex = index
    },
    //点击回到顶部
    backtop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    //超过距离，图片出现
    scroll(position) {
      // console.log(-position.y)
      // 1. 判断BackTop是否显示
      this.isShowbacktop = (-position.y) > 1000
      // 2. 决定tabControl是否吸顶
      this.isFlexd = (-position.y) >this.tobOffsetTop
    },
    // 上拉加载更多
    lodMore() {
      this.getHomeGoods(this.currIndex);

      // this.$refs.scroll.scroll.refresh()
      // console.log('sss')
    },
    //
    swiperImageLoad() {
      this.tobOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /**
     *
     * 网络请求相关的方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        // console.log(res)
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#nav-home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tab-control{
  position: relative;
  z-index: 9;
}
/*.content{*/
/*  overflow: hidden;*/
/*  height: calc(100% - 93px);*/
/*  margin-top: 44px;*/
/*}*/
</style>
