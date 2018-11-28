<template>
  <el-button :type="item.type" :plain="item.plain" :round="item.round" :circle="item.circle" :icon="item.icon">{{item.text}}</el-button>
</template>

<script>
export default {
  name: "button-template",
  props: {
    item: Object
  }
};
</script>

<style scoped>
</style>
