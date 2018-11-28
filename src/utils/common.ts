/**
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @param idle {number}    空闲时间，单位毫秒，默认300ms
* @return {function}    返回客户调用函数
*/
export function debounce (action: () => void, idle: number = 300) {
  let last: number;
  return function () {
    clearTimeout(last)
    last = setTimeout(() => {
      action.bind(arguments)
    }, idle)
  }
}
export function throttle () {
  let last = 0;
  return function (action: () => void, delay = 300) {
    let curr = +new Date()
    if (curr - last > delay) {
      // console.log(curr - last, action)
      action.bind(arguments)();
      last = curr
    }
  }
}