<template>
  <div>
    <header>
      <video-header>
        <span style="color: #fff;">1.1JavaScript语法</span>
      </video-header>
    </header>
    <div style="height: 0.54rem;"></div>
    <div class="container">
      <div class="video">
        <video class="video_src" src controls></video>
      </div>
   </div>

    <van-tabs v-model="active">
      <van-tab title="介绍">
        <course-introduce></course-introduce>
        <course-discuss></course-discuss>
      </van-tab>
      <van-tab title="章节">
        <course-chapter></course-chapter>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import VideoHeader from '@/components/course/video/VideoHeader'
import CourseIntroduce from "@/components/course/CourseIntroduce";
import CourseDiscuss from "@/components/course/CourseDiscuss";
import CourseChapter from "@/components/course/CourseChapter";
export default {
  name: "video",
  components: {
    VideoHeader,
    CourseIntroduce,
    CourseDiscuss,
    CourseChapter
  }
};
</script>

<style lang="stylus" scoped>
.container{
  background #000
}
.video {
  max-width: 1200px;
  max-height: 625px;
  overflow: hidden;
}

.video_src {
  width: 100%;
}
</style>