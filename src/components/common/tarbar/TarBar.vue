<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TarBar'
}
</script>

<style scoped>
#tar-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 3px 7px rgba(100, 100, 100, 1);
}

</style>
