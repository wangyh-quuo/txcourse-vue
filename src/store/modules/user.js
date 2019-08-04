const getUserData = () => {
  try {
    return JSON.parse(sessionStorage.getItem("userInfo")) || {}
  } catch (error) {
    return {}
  }
}
const state = {
  //用户登录状态
  auth: {
    //登录认证
    loggedIn() {
      if (Object.keys(state.userData).length>0) {
        //TODO:根据该信息查找，信息是否正确
        if (true) {
          return { result: 1, data: 0, msg: "" };
        } else {
          return { result: 0, data: 0, msg: "用户信息可能更改，请重新登录!" };
        }
      } else {
        return { result: 0, data: 0, msg: "用户未登录" };
      }
    }
  },
  //用户数据
  userData: getUserData(),
};
const getters = {
  //登录状态
  getLoggedIn(state) {
    return state.auth.loggedIn();
  },
  //获得用户数据
  getUserData(state) {
    return state.userData;
  }
};
const mutations = {
  setUserData(state, res) {
    state.userData = res;
  }
};
const actions = {
  //用户登录
  setUserData(context, res) {
    sessionStorage.setItem("userInfo", res);
    context.commit("setUserData", res);
  },
  //退出登录
  clearUserData(context) {
    sessionStorage.removeItem("userInfo");
    context.commit("setUserData", {});
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
