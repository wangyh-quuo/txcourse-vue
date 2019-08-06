import {
  getClassifyList,
  getClassifyItems,
  getRecommendList,
  getCourseListByCondition,
  getCourseDetail
} from "@/api/api";

const state = {
  classifyList: [],
  classifyItems: [],
  recommendList: [],
  courseList: [],
  course: {}
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
  },
  orderCourseByCondition(state, payload) {
    switch (payload) {
      case 0:
        state.courseList.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      case 1:
        state.courseList.sort((a, b) => {
          return b.learning - a.learning;
        });
        break;
      case 2:
        state.courseList.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 3:
        state.courseList.sort((a, b) => {
          return b.price - a.price;
        });
        break;

      default:
        break;
    }
  },
  setCourse(state, payload) {
    state.course = payload;
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
  },
  //课程详情数据
  getCourseDetail(context, param) {
    getCourseDetail(param)
      .then(res => {
        context.commit("setCourse", res);
      })
      .catch(err => {
        console.log(err, "course loading failure!");
      });
  },
  //打开课程视频
  getVideo(context, param) {
    if (param != null) {
      context.commit("setCurrent", param);
    }
    getCourseDetail(param)
      .then(res => {
        context.commit("setCourse", res);
      })
      .catch(err => {
        console.log(err, "course loading failure!");
      });
  }
};
export default {
  state,
  mutations,
  actions
};
