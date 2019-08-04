import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Classify from "./views/Classify";
import ClassifyCourse from "./views/ClassifyCourse";
import CourseDetail from "./views/CourseDetail";
import Video from "./views/Video";
import UserProfile from "./views/UserProfile";
import Coupon from "./views/Coupon";
import UserCourse from "./views/UserCourse";
import Auth from "./views/Auth";
import store from "./store/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/classify",
      name: "classify",
      component: Classify
    },
    {
      path: "/courseList/:classifyId",
      name: "courseList",
      component: ClassifyCourse
    },
    {
      path: "/course/:courseId",
      name: "course",
      component: CourseDetail
    },
    {
      path: "/video/:videoId",
      name: "video",
      meta: {
        requireAuth: true //该路由需要登陆
      },
      component: Video
    },
    {
      path: "/user",
      name: "userProfile",
      meta: {
        requireAuth: true //该路由需要登陆
      },
      component: UserProfile
    },
    {
      path: "/coupon",
      name: "coupon",
      meta: {
        requireAuth: true //该路由需要登陆
      },
      component: Coupon
    },
    {
      path: "/user/course",
      name: "userCourse",
      meta: {
        requireAuth: true //该路由需要登陆
      },
      component: UserCourse
    },
    {
      path: "/login",
      name: "login",
      component: Auth
    }
  ]
});

router.beforeEach((to, from, next) => {
  //该路由是需要验证
  if (to.matched.some(record => record.meta.requireAuth)) {
    //用户是否登录
    console.log("result", store.state.user.auth.loggedIn().result);
    if (!store.state.user.auth.loggedIn().result) {
      //没有登录，跳转到登录页面，否则放行
      next({
        path: "/login",
        query: { redirect: to.fullPath } //登录成功后将跳转到该路由
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
