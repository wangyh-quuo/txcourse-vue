<template>
  <div class="chapter">
    <section
      class="course_chapter"
      v-for="chapter of course.course.chapterList"
      :key="chapter.chapterName"
    >
      <div class="chapter_title">{{chapter.chapterName}}</div>
      <ul class="chapter_section">
        <!-- <router-link
        :to="{name: 'video' , params: { videoId: section.sectionId }}"-->
        <li
          class="section_item"
          :class="[currentSection==section.sectionId?'active':'']"
          v-for="section of chapter.sectionList"
          :key="section.sectionId"
          @click="openSection(section.sectionId)"
        >
          <van-icon name="play-circle-o" size="0.14rem" class="item_left" />
          {{ section.sectionName }}
          <van-icon name="circle" class="item_right" />
          <!-- </router-link> -->
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "CourseChpter",
  computed: {
    ...mapState(["course","currentSection"])
  },
  methods: {
    ...mapMutations(['setCurrent']),
    openSection(param) {
      this.setCurrent(param);
      this.$emit('section-id',param);
      this.$router.push({ name: "video", params: { videoId: param } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.chapter {
  background: #F3F5F7;
}

.course_chapter {
  margin: 0.1rem;

  .chapter_title {
    line-height: 0.4rem;
    font-size: 0.14rem;
  }

  .chapter_section {
    line-height: 0.4rem;

    .section_item {
      display: block;
      margin: 0.1rem 0.2rem;
      color: #666;
      background: #fff;
      box-shadow: 0.01rem 0.01rem 0.1rem 0.01rem #65cdff;

      .item_left {
        padding: 0 0.1rem;
      }

      .item_right {
        float: right;
        padding: 0 0.1rem;
        transform: translateY(100%);
      }
    }

    .active {
      color: #65cdff;
    }
  }
}
</style>
