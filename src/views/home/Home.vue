<template>
  <div class="nav-home">
    <nav-bar slot="center" class="home-nav"></nav-bar>
    <home-swiper-item :banners="banners"></home-swiper-item>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiperItem from "@/views/home/Compons/HomeSwiperItem";
import HomeRecommendView from "@/views/home/Compons/HomeRecommendView";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiperItem,
    HomeRecommendView
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
      // console.log(this.banners)
      this.recommends = res.data.data.recommend.list;
      console.log(this.recommends)
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
