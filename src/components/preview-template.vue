<template>
  <section>
    <div 
      v-preview
      id="preview-template" 
      :style="{
        height: $store.state.style.windowHeight - 40 + 'px'
      }"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  components: {}
};
</script>

<style scoped>
#preview-template {
  border: 1px solid #ccc;
}
</style>
