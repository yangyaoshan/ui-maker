<template>
  <el-container :style="{height: $store.state.style.windowHeight + 'px'}">
    <el-aside width="300px" class="tool-bar">
      <element-list ></element-list>
    </el-aside>
    <el-main>
      <preview-template></preview-template>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src
import ElementList from "@/packages/Button/index.vue";
import PreviewTemplate from "@/components/preview-template.vue";

@Component({
  components: {
    SideBar,
    ElementList,
    PreviewTemplate
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import "../assets/style/_constants.scss";
.tool-bar {
  background: #efefef;
  height: 100%;
}
</style>
