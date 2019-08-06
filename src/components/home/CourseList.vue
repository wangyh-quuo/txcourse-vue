<template>
  <section class="course">
    <ul class="list">
      <router-link
        :to="{name: 'course', params: {courseId: item.id}}"
        tag="li"
        class="item"
        v-for="item of course.recommendList"
        :key="item.id"
      >
        <div class="item_img">
          <img v-show="!loading" class="course_img" :src="item.courseImg" />
          <van-loading v-if="loading" type="spinner" color="#1989fa" />
        </div>
        <p class="course_title" v-text="item.name"></p>
        <p class="course_price" v-text="price(item)"></p>
      </router-link>
      <loading @get-more="getMore"></loading>
    </ul>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Loading from "@/components/common/Loading";
export default {
  name: "CourseList",
  components: {
    Loading
  },
  computed: {
    price() {
      return function(item) {
        return item.free == 1 ? "免费" : `￥${item.price}`;
      };
    },
    ...mapState(["course", "loading"])
  },
  methods: {
    ...mapActions(["getRecommendList", "getMore"])
  },
  mounted() {
    this.getRecommendList();
  }
};
</script>
<style lang="stylus" scoped>
.course {
  margin-top: 0.05rem;

  .list {
    width: 100%;
    overflow: hidden; // 清除浮动
  }

  .item {
    width: 50%;
    float: left;

    .item_img {
      padding: 0.1rem;
    }

    .course_img {
      border-radius: 0.1rem;
      width: 100%;
    }

    .course_title {
      padding-left: 0.1rem;
      font-size: 0.18rem;
      line-height: 0.2rem;
      height: 0.4rem;
    }

    .course_price {
      color: #23bbff;
      padding-left: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
  }
}
</style>
