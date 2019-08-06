<template>
  <section class="introduce">
    <p class="description">课程简介:{{course.course.introduce}}</p>
    <ul class="detail">
      <li class="item">
        <span>难度：{{rank(course.course.rank)}}</span>
      </li>
      <li class="item">
        <span>时长：{{course.course.time}}</span>
      </li>
      <li class="item">
        <span>人数：{{course.course.learning}}</span>
      </li>
      <li class="item">
        <span>评分：9.6</span>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CourseIntroduce",
  computed: {
    ...mapState(["course"]),
    rank() {
      return status => {
        switch (status) {
          case 0:
            return "入门";
          case 1:
            return "初级";
          case 2:
            return "中极";
          case 3:
            return "高级";
          default:
            break;
        }
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.description {
  line-height: 0.4rem;
  padding: 0.1rem;
  border-bottom: 0.01rem dotted #666;
}

.detail {
  display: flex;
  line-height: 0.4rem;
  text-align: center;

  .item {
    color: #666;

    span {
      padding: 0 0.1rem;
      border-right: 0.01rem solid #666;
    }
  }

  .item:last-child {
    border: none;
  }
}
</style>
