<template>
  <div>
    <video-header>
      <template #header_left>
        <router-link to="/course/1" tag="span" class="back">
          <van-icon name="arrow-left" size="0.3rem" />
        </router-link>
      </template>

      <template #header_right>
        <span style="color: #fff;">{{ title }}</span>
        <router-link to="/user" tag="span">
          <van-icon class="user_avater" size="0.3rem" name="manager" />
        </router-link>
      </template>
    </video-header>
    <div style="height: 0.54rem;"></div>
    <div class="container">
      <div class="video">
        <!-- url= https://vd2.bdstatic.com/mda-jeaf53qd6wyxffd3/sc/mda-jeaf53qd6wyxffd3.mp4?auth_key=1565077438-0-0-a37649d39808a291737e44659fe71214&bcevod_channel=searchbox_feed&pd=bjh&abtest=all-->
        <video class="video_src" height="230" src="@/assets/img/mda-jeaf53qd6wyxffd3.mp4" controls></video>
      </div>
    </div>

    <van-tabs>
      <van-tab title="介绍">
        <course-introduce></course-introduce>
        <course-discuss></course-discuss>
      </van-tab>
      <van-tab title="章节">
        <course-chapter @section-id="getTitle"></course-chapter>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import VideoHeader from "@/components/common/Header";
import CourseIntroduce from "@/components/course/CourseIntroduce";
import CourseDiscuss from "@/components/course/CourseDiscuss";
import CourseChapter from "@/components/course/CourseChapter";
import { mapState, mapActions } from "vuex";
export default {
  name: "Video",
  components: {
    VideoHeader,
    CourseIntroduce,
    CourseDiscuss,
    CourseChapter
  },
  data() {
    return {
      videoId: ""
    };
  },
  computed: {
    ...mapState(["course", "currentSection"]),
    title() {
      //查找课程中的章节,显示标题
      if (this.videoId == "") {
        return "1-1JavaScript深入浅出课程介绍";
      }
      const chapterList = this.course.course.chapterList;
      let sectionName = "";
      chapterList.forEach(element => {
        element.sectionList.some(e => {
          if(e.sectionId == this.videoId){
            sectionName = e.sectionName;
          }
        });
      });
      return sectionName;
    }
  },
  methods: {
    ...mapActions(["getVideo"]),
    getTitle(videoId) {
      this.videoId = videoId;
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    next(vm => {
      vm.getVideo(vm.$router.history.current.params.videoId);
    });
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