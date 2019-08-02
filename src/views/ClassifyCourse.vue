<template>
  <div>
    <header class="course_header">
      <course-header>
        <template #header_left>
          <router-link to="/" tag="span" class="logo"></router-link>
        </template>
        <template #header_right>
           <search></search>
        </template>
      </course-header>
      <drop-menu></drop-menu>
      
    </header>
    <course-item></course-item>
  </div>
</template>

<script>
import CourseHeader from "@/components/common/Header";
import search from "@/components/common/Search";
import CourseItem from "@/components/course/CourseItem";
import DropMenu from "@/components/course/DropMenu";

export default {
  name: "ClassifyCourse",
  components: {
    CourseHeader,
    search,
    CourseItem,
    DropMenu
  }
};
</script>

<style lang="stylus" scoped></style>
