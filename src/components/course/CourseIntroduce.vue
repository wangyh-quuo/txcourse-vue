<template>
  <section class="introduce">
    <p class="description">
      课程简介:由浅入深学习JS语言特性，且解析JS常见误区,从入门到掌握
    </p>
    <ul class="detail">
      <li class="item">
        <span>难度：中级</span>
      </li>
      <li class="item">
        <span>时长：5h28m</span>
      </li>
      <li class="item">
        <span>人数：260020</span>
      </li>
      <li class="item">
        <span>评分：9.6</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "CourseIntroduce"
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
