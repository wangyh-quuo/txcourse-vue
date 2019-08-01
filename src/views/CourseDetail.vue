<template>
  <div>
    <course-header>
      <nav-more></nav-more>
    </course-header>

    <div style="height: 0.54rem;"></div>
    <div class="video_img">
      <div class="cover"></div>
    </div>

    <van-tabs v-model="active">
      <van-tab title="介绍">
        <course-introduce></course-introduce>
        <course-discuss></course-discuss>
        <router-link to="/video/1">
          <van-button type="info" size="large" class="begin-learn">开始学习</van-button>
        </router-link>
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
export default {
  name: "CourseDetail",
  components: {
    CourseHeader,
    NavMore,
    CourseIntroduce,
    CourseDiscuss,
    CourseChapter
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
