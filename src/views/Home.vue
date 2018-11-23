<template>
  <el-container :style="{height: $store.state.style.windowHeight + 'px'}">
    <el-aside width="300px" class="tool-bar">
    </el-aside>
    <el-main>
      
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src

@Component({
  components: {
    SideBar
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
