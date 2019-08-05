<template>
  <section class="course">
    <router-link
      :to="{name: 'course',params: {'courseId': item.id}}"
      tag="ul"
      class="list"
      v-for="item of course.courseList"
      :key="item.id"
    >
      <li class="item_left">
        <div class="item_img">
          <img class="course_img" :src="item.courseImg" />
        </div>
      </li>
      <li class="item_right">
        <p class="course_title" v-text="item.name"></p>
        <p class="course_price" v-text="price(item)"></p>
        <p class="course_learning">{{item.learning}}个人正在学习</p>
      </li>
    </router-link>
    <loading @get-more="getMoreCourse"></loading>
  </section>
</template>

<script>
import Loading from "@/components/common/Loading";
import { mapState, mapActions } from "vuex";
export default {
  name: "CourseItem",
  components: {
    Loading
  },
  computed: {
    ...mapState(["course", "loading"]),
    price() {
      return function(item) {
        return item.free == 1 ? "免费" : `￥${item.price}`;
      };
    }
  },
  methods: {
    ...mapActions(["getCourseListByCondition", "getMoreCourse"])
  },
  mounted() {
    this.getCourseListByCondition({ classifyId: 1 });
  }
};
</script>

<style lang="stylus" scoped>
.course {
  padding-top: 1rem;

  .list {
    display: flex;
    border-bottom: 0.01rem solid #ccc;

    .item_left {
      width: 50%;

      .item_img {
        padding: 0.1rem;
      }

      .course_img {
        width: 100%;
        border-radius: 0.1rem;
      }
    }

    .item_right {
      margin: 0.1rem;
      width: 50%;
      line-height: 0.4rem;

      .course_title {
        font-size: 0.16rem;
        line-height: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .course_price {
        color: #23bbff;
        font-size: 0.16rem;
      }

      .course_learning {
        color: #666;
        line-height: 0.2rem;
      }
    }
  }
}
</style>
