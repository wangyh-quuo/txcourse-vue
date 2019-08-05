import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import user from "./modules/user";
import course from "./modules/course";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {
    user,
    course
  }
});
