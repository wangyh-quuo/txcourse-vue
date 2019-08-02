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

Vue.use(Router);

export default new Router({
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
      component: Video
    },
    {
      path: "/user",
      name: "userProfile",
      component: UserProfile
    },
    {
      path: "/coupon",
      name: "coupon",
      component: Coupon
    },
    {
      path: "/user/course",
      name: "userCourse",
      component: UserCourse
    }
  ]
});
