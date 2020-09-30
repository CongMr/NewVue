<template>
<div>
<!--  <router-view></router-view>-->
  <tar-bar>
    <tar-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tarbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <img slot="item-icon"  src="~assets/img/tarbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tar-bar-item>
    <tar-bar-item path="/shopcart">
      <img slot="item-icon"  src="~assets/img/tarbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/profile">
      <img slot="item-icon"  src="~assets/img/tarbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tarbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </tar-bar>
</div>
</template>

<script>
import TarBar from "@/components/common/tarbar/TarBar";
import TarBarItem from "@/components/common/tarbar/TarBarItem";

export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem
  }
}
</script>


<style scoped>

</style>
