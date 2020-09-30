<template>
  <div id="nav-home">
    <nav-bar slot="center" class="home-nav"></nav-bar>
    <home-swiper-item :banners="banners"></home-swiper-item>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <ul>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li><li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>
      <li>是是是</li>


    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import HomeSwiperItem from "@/views/home/Compons/HomeSwiperItem";
import HomeRecommendView from "@/views/home/Compons/HomeRecommendView";
import HomeFeatureView from "@/views/home/Compons/HomeFeatureView";


import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiperItem,
    HomeRecommendView,
    HomeFeatureView,
    TabControl
  },
  data() {
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#nav-home{
  padding-top: 44px;
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
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
