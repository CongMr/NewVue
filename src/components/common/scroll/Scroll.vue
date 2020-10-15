<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import Pullup from '@better-scroll/pull-up'
//
// BScroll.use(Pullup)
export default {
  name: "Scroll",
  props:{
    position:{
      type: Number,
      default:0
    },
    pullingUp:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.position,
      pullUpLoad: this.pullingUp
    })
    // 监听滚动的位置
    this.scroll.on('scroll',(position) => {
      // console.log(position)
      this.$emit('scroll', position)
    })
    // console.log(this.scroll)
    // 上拉加载更多
    this.scroll.on('pullingUp',() => {
      console.log('上拉加')
      this.$emit('pullingUp')
    })

  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(0,0,time)
    },

    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },

    refresh(){
      // console.log('---')
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
