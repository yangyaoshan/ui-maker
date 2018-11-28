import Vue from "vue";
import { throttle } from "@/utils/common";
const _import: (file: string) => void = file => (): Promise<string> => import('@/packages/' + file + '.vue')

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
        let elData: DOMStringMap = (<HTMLElement>el.srcElement).dataset;
        console.log("ondragend === ", _import(<string>elData.itemClass));
      }
    );
  }
});
