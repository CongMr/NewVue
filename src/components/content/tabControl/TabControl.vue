<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" class="tabcontrol-view" :class="{active: index == countIndex}"  @click="getIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles : {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      countIndex: 0
    }
  },
  methods:{
    getIndex(index) {
      this.countIndex = index
    }
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  line-height: 44px;
  height: 44px;
  background-color: #fff;
}

.tabcontrol-view{
  flex: 1;

}
.tabcontrol-view span{
  padding: 5px;
}
.active{
  color: var(--color-tint);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
