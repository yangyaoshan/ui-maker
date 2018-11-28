import Vue from "vue";
// import { throttle } from "@/utils/common";
Vue.directive("drag", {
  inserted: (el: HTMLElement): void => {
    // console.log("drag === ", el.parentNode.clientWidth)
    let oDiv = el,
      parentNode = oDiv.parentNode;
    // 左边距最大值
    let maxLeft: number = (<HTMLElement>parentNode).clientWidth; 
    // 上边距最大值
    let maxTop = el.parentNode
      ? (<HTMLElement>parentNode).clientHeight - el.clientHeight
      : 0;
      document.addEventListener(
        "dragover",
        (e: DragEvent): boolean => {
          // 鼠标按下，计算当前元素距离可视区的距离
          let disX:number = e.clientX - oDiv.offsetLeft,
            disY:number = e.clientY - oDiv.offsetTop;
          let movePosition = () => {
            // 获取到鼠标拖拽后的横向位移(距离父级元素)
            let l:number = e.clientX - disX;
            // 获取到鼠标拖拽后的纵向位移(距离父级元素)
            let t:number = e.clientY - disY;
            oDiv.style.left = l + "px";
            oDiv.style.top = t + "px";
            if (e.clientX - disX <= 0) oDiv.style.left = 0 + "px";
            if (e.clientY - disY <= 0) oDiv.style.top = 0 + "px";
            if (e.clientX - disX >= maxLeft) oDiv.style.left = maxLeft + "px";
            if (e.clientY - disY >= maxTop) oDiv.style.top = maxTop + "px";
            // 将此时的位置传出去
            el.dataset.position = JSON.stringify({
              x: oDiv.style.left,
              y: oDiv.style.top
            });
            // binding.value({x: oDiv.style.left, y: oDiv.style.top})
          }
          document.addEventListener("mousemove", movePosition);
          // 松开事件后，移除事件
          let cancelDrag = () => {
            document.removeEventListener("mousemove", movePosition);
            // document.onmousemove = null;
            document.removeEventListener("mouseup", movePosition);
          }
          document.addEventListener("mouseup", cancelDrag);
          return false;    
        }
      );
    oDiv.onmousedown = function(e) {};
  }
});
/* Vue.directive("drag", {
  inserted() {
    let _throttle = throttle();
    let curTarget;
    document.addEventListener(
      "dragover",
      (el: DragEvent): void => {
        _throttle(() => {
          console.log("el === ", el.target);
          curTarget = el.target;
        });
      }
    );
    document.addEventListener(
      "dragend",
      (el: DragEvent): void => {
        _throttle(() => {
          console.log("dragend === ", el.target.innerHTML);
          curTarget.innerHTML = '<el-button type="primary" >1111</el-button>';
        });
      }
    );
  }
}); */
