<template>
  <div>
    <video-header>
      <template #header_left>
        <router-link to="/" tag="span" class="back">
          <van-icon name="arrow-left" size="0.3rem" />
        </router-link>
      </template>

      <template #header_right>
        <span style="color: #fff;">1.1JavaScript语法</span>
        <van-icon class="user_avater" size="0.3rem" name="manager" />
      </template>
    </video-header>
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
import VideoHeader from "@/components/common/Header";
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
.header {
  background: #000;
  color: #fff;

  .logo {
    display: inline-block;
    width: 0.26rem;
    height: 0.26rem;
    background: transparent;
    transform: translateY(0.14rem);
  }

  .user_avater {
    display: inline-block;
    float: right;
    transform: translateY(50%);
  }
}

.container {
  background: #000;
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