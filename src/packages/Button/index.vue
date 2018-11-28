<template>
  <div>
    <ul class="element-list clearfix">
      <li draggable="true" @drag="handleDrag" @dragend="handleDragend" 
        :key="index" :data-item-index="index" data-item-class="Button" v-for="(item, index) in list">
        <el-button-group v-if="item.type === 'group'">
          <button-template :key="index" v-for="(child, index) in item.children" :item="child"></button-template>
        </el-button-group>
        <button-template v-else :item="item"></button-template>
        <div class="mask"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { list } from "./data.ts";
import { throttle } from "@/utils/common";
import buttonTemplate from "./template";
let _throttle = throttle();
export default {
  beforeCreate() {
    Vue.component(buttonTemplate.name, buttonTemplate);
  },
  data() {
    return {
      list: list
    };
  },
  methods: {
    handleDrag(event) {
      _throttle(() => {
        // console.log(this.list)
        this.$emit("handleDrag", { event });
      });
    },
    handleDragend(event) {
      this.$emit("handleDragend", { event });
    }
  },
  components: {
    // buttonTemplate
  }
};
</script>

<style lang="scss" scoped>
.element-list {
  padding: 10px;
  li {
    position: relative;
    float: left;
    margin: 10px;
    max-width: 100%;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
    }
  }
}
</style>
