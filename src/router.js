import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Classify from "./views/Classify";
import ClassifyCourse from "./views/ClassifyCourse";
import CourseDetail from "./views/CourseDetail";
import Video from "./views/Video";

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
      name: "vidoeo",
      component: Video
    }
  ]
});
