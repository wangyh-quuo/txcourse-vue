<template>
  <div class="container">
    <section class="recommend">
      <h1 class="title">精选好课</h1>
      <div class="category">
        <div class="select-left">
          <em class="select">分类</em>
        </div>
        <div class="select_right">
          <ul class="category_list" @click="classify">
            <li :class="[classifyIndex==-1?'active':'','category_item']">不限</li>
            <li
              :class="[classifyIndex==item.id?'active':'','category_item']"
              v-for="item of course.classifyList"
              :key="item.id"
              :active="item.id"
              v-text="item.name"
            ></li>
          </ul>
        </div>
      </div>
      <div class="category">
        <em class="select">难度</em>
        <div class="select_right">
          <ul class="category_list" @click="rank">
            <li
              :class="[rankIndex==index?'active':'','category_item']"
              v-for="(item,index) of rankArray"
              :key="index"
              :index="index"
              v-text="item"
            ></li>
          </ul>
        </div>
      </div>
    </section>
    <course-list></course-list>
  </div>
</template>
<script>
import CourseList from "@/components/home/CourseList";
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeRecommend",
  data() {
    return {
      classifyIndex: -1,
      rankIndex: 0,
      rankArray: ["不限", "基础", "进阶"]
    };
  },
  components: {
    CourseList
  },
  computed: {
    ...mapState(["course"]) //state课程模块
  },
  methods: {
    ...mapActions(["getClassifyList", "getRecommendList"]),
    //选择分类
    classify(e) {
      if (e.target.nodeName == "LI") {
        const active = e.target.getAttribute("active") || -1;
        this.classifyIndex = active;
        //请求该分类下的推荐课程
        this.getRecommendList({ id: active });
      }
    },
    //选择难度
    rank(e) {
      if (e.target.nodeName == "LI") {
        this.rankIndex = e.target.getAttribute("index");
        //请求该难度下的推荐课程
        this.getRecommendList({ rank: this.rankIndex });
      }
    }
  },
  mounted() {
    //获取分类数据
    this.getClassifyList();
  }
};
</script>
<style lang="stylus">
.container {
  .title {
    text-align: center;
    font-size: 0.18rem;
    color: #777;
    font-weight: 4;
    letter-spacing: 0.08rem;
    line-height: 0.18rem;
    height: 0.2rem;
    margin-top: 0.1rem;
  }

  .category {
    display: flex;
    line-height: 0.2rem;
    height: 0.24rem;
    padding-left: 0.1rem;
    margin-top: 0.05rem;
    color: #777;

    .select-left {
      position: relative;
    }

    .select {
      font-style: normal;
      font-size: 0.14rem;
      color: #333;
      font-weight: 700;
    }

    .select_right {
      flex: 1;
      overflow-x: auto;
      overflow-y: hidden;
      line-height: 0.2rem;
      margin-left: 0.3rem;
      position: relative;
      white-space: nowrap;
    }

    .select_right::-webkit-scrollbar {
      display: none;
    }
  }

  .category_list {
    display: flex;
    white-space: nowrap;
    font-size: 0.14rem;

    .category_item {
      margin-right: 0.3rem;
    }
  }
}

.active {
  color: #23bbff;
}
</style>
