<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isShow" >
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeColors">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return{
      // isShow:true,
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path).catch( ()=>{} );
    }
  },
  computed:{
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeColors() {
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
}
</script>

<style scoped>
.tar-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tar-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
