<template>
  <div>
    <course-header>
      <template #header_left>
        <router-link to="/" tag="span" class="logo"></router-link>
      </template>
      <template #header_right>
        <nav-more></nav-more>
      </template>
    </course-header>

    <div style="height: 0.54rem;"></div>
    <div class="video_img">
      <div class="cover"></div>
    </div>

    <van-tabs>
      <van-tab title="介绍">
        <course-introduce></course-introduce>
        <course-discuss></course-discuss>
        <van-button type="info" size="large" class="begin-learn" @click="startLearn">开始学习</van-button>
      </van-tab>
      <van-tab title="章节">
        <course-chapter></course-chapter>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CourseHeader from "@/components/common/Header";
import NavMore from "@/components/common/More";
import CourseIntroduce from "@/components/course/CourseIntroduce";
import CourseDiscuss from "@/components/course/CourseDiscuss";
import CourseChapter from "@/components/course/CourseChapter";
import { mapState, mapActions } from "vuex";
export default {
  name: "CourseDetail",
  components: {
    CourseHeader,
    NavMore,
    CourseIntroduce,
    CourseDiscuss,
    CourseChapter
  },
  computed: {
    ...mapState(["course"])
  },
  methods: {
    ...mapActions(["getCourseDetail"]),
    //添加课程学习，如果课程为免费直接学习，付费则添加到购物车
    startLearn() {
      if (this.course.course.price == 0) {
        this.$router.push({
          name: "video",
          params: {
            videoId: this.course.course.chapterList[0].sectionList[0].sectionId
          }
        });
      } else {
        //TODO: 添加至购物车
        this.$router.push({
          name: "cart"
        });
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    next(vm => {
      vm.getCourseDetail(vm.$router.history.current.params.courseId);
    });
  }
};
</script>

<style lang="stylus" scoped>
.begin-learn {
  position: fixed;
  bottom: 0;
  left: 0;
}

.video_img {
  width: 100%;
  height: 1rem;
  background: url('~@/assets/img/video1.jpg') no-repeat 0;
  background-size: cover;
  background-color: #000;

  .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
