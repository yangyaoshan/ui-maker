import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import style from "./modules/style";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: {
    style
  }
});
