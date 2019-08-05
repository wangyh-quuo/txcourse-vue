import {
  getClassifyList,
  getClassifyItems,
  getRecommendList,
  getCourseListByCondition
} from "@/api/api";

const state = {
  classifyList: [],
  classifyItems: [],
  recommendList: [],
  courseList: []
};
const mutations = {
  setClassifyList(state, payload) {
    state.classifyList = payload;
  },
  setClassifyItems(state, payload) {
    state.classifyItems = payload;
  },
  setRecommendList(state, payload) {
    state.recommendList = payload;
  },
  getMore(state, payload) {
    state.recommendList.push(...payload);
  },
  setCourseList(state, payload) {
    state.courseList = payload;
  },
  addCourseList(state, payload) {
    state.courseList.push(...payload);
  }
};
const actions = {
  getClassifyList(context) {
    //如果分类数据不为空，则请求数据
    if (state.classifyList.length == 0) {
      getClassifyList().then(res => {
        context.commit("setClassifyList", res);
      });
    }
  },
  getClassifyItems(context, params = { id: 1 }) {
    getClassifyItems(params).then(res => {
      context.commit("setClassifyItems", res[params.id - 1]);
    });
  },
  getRecommendList(context, params) {
    context.commit("startLoading");
    getRecommendList(params).then(res => {
      context.commit("setRecommendList", res);
      context.commit("overLoading");
    });
  },
  //获得更多
  getMore(context, params) {
    //判断数据是否还有
    if (state.recommendList.length > 24) {
      context.commit("noMoreData");
    } else {
      context.commit("startLoading");
      context.commit("moreData");
      getRecommendList(params).then(res => {
        context.commit("getMore", res);
        context.commit("overLoading");
      });
    }
  },
  //获得分类下的课程
  getCourseListByCondition(context, params) {
    context.commit("startLoading");
    getCourseListByCondition(params).then(res => {
      context.commit("setCourseList", res);
      context.commit("overLoading");
    });
  },
  getMoreCourse(context, params) {
    //判断数据是否还有
    if (state.courseList.length > 24) {
      context.commit("noMoreData");
    } else {
      context.commit("startLoading");
      context.commit("moreData");
      getCourseListByCondition(params).then(res => {
        context.commit("addCourseList", res);
        context.commit("overLoading");
      });
    }
  }
};
export default {
  state,
  mutations,
  actions
};
