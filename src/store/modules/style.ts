export default {
  state: {
    windowHeight: window.innerHeight
  },
  mutations: {
    setWindowHeight(state: { windowHeight: number }) {
      // console.log('windowHeight === ', window.innerHeight);
      state.windowHeight = window.innerHeight;
    }
  }
};
