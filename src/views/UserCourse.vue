<template>
  <div>
    <course-header>
      <template #header_left>
        <back></back>
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
import Back from "@/components/common/Back";
import NavMore from "@/components/common/More";
import MyCourse from "@/components/user/MyCourse";

export default {
  name: "UserCourse",
  components: {
    CourseHeader,
    Back,
    NavMore,
    MyCourse
  }
};
</script>

<style lang="stylus" scoped></style>