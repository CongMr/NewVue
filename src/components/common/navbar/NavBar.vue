<template>
  <div class="nar-bar">
    <div class="right"><slot name="right"></slot></div>
    <div class="center"><slot name="center">购物车</slot></div>
    <div class="left"><slot name="left"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nar-bar{
  display: flex;
  line-height: 44px;
  box-shadow:0 1px 1px rgba(100,100,100,.1);
}
.right, .left{
  width: 60px;
}
.center{
  flex: 1;
  text-align: center;

}
</style>
