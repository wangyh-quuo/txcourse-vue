<template>
  <section class="course">
    <ul class="list">
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item_img">
          <img class="course_img" :src="item.courseImg" />
        </div>
        <p class="course_title" v-text="item.name"></p>
        <p class="course_price" v-text="price(item)"></p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "CourseList",
  data() {
    return {
      recommendList: []
    };
  },
  computed: {
    price(item) {
      return function(item) {
        return item.free == 1 ? "免费" : `￥${item.price}`;
      };
    }
  },
  methods: {
    getRecommendList() {
      this.$get("/api/index/recommends")
        .then(res => {
          console.log(1);
          this.recommendList = res.courseList;
        })
        .catch(error => {
          console.log("course loading failure!");
        });
    }
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
    overflow: hidden;//清除浮动
    padding-bottom: 0.5rem;
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
