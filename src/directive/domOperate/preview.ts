import Vue from "vue";
import { throttle } from "@/utils/common";
import { Module } from 'vuex';
const _import: (file: string) => void = file => (): Promise<string> => import(`@/packages/${file}/template.vue`)

Vue.directive("preview", {
  inserted(dom) {
    // console.log("el === ", el)
    let _throttle = throttle();
    let curTarget: EventTarget;
    document.addEventListener(
      "dragover",
      (el: DragEvent): void => {
        _throttle(() => {
          console.log("ondragover === ", el.target, dom);
          if (dom === el.target) {
            curTarget = el.target;
          }
        });
      }
    );
    document.addEventListener(
      "dragend",
      (el: DragEvent): void => {
        let elData: DOMStringMap = (<HTMLElement>el.srcElement).dataset,
          module = require(`@/packages/${elData.itemClass}/template.vue`),
          component = Vue.extend(module);
        console.log("ondragend === ", require(`@/packages/${elData.itemClass}/template.vue`));
        // let MyMsgConstructor = Vue.extend(require('./main.vue'));
        new component().$mount('#preview-template');
      }
    );
  }
});
