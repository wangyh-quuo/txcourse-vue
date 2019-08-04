<template>
  <div>
    <course-header>
      <template #header_left>
        <router-link to="/" tag="span" class="back">
          <van-icon name="arrow-left" size="0.2rem" />
        </router-link>
      </template>
      <template #header_right>
        <span class="title">我参加的课程</span>
        <nav-more class></nav-more>
      </template>
    </course-header>
    <div style="padding-top: 0.54rem;"></div>
    <section>
      <my-course></my-course>
    </section>
  </div>
</template>
<script>
import CourseHeader from "@/components/common/Header";
import NavMore from "@/components/common/More";
import MyCourse from "@/components/user/MyCourse";

export default {
  name: "UserCourse",
  components: {
    CourseHeader,
    NavMore,
    MyCourse
  }
};
</script>

<style lang="stylus" scoped></style>