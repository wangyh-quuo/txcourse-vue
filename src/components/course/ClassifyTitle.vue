<template>
  <div class="title">
    <div class="first_title">前沿</div>
    <div class="first_title">前端</div>
    <div class="first_title">后端</div>
    <div class="first_title">移动</div>
    <div class="first_title">云计算</div>
    <div class="first_title">运维</div>
    <div class="first_title">UI设计</div>
  </div>
</template>

<script>
export default {
  name: "ClassifyTitle"
};
</script>

<style lang="stylus" scoped>
.title {
  display: flex;
  width: 100%;
  color: #fff;

  .first_title {
    text-align: center;
    font-size: 0.14rem;
    width: 14.2%;
  }
}
</style>