<template>
  <div class="title">
    <div class="first_title">
      <span class="tab_border">前沿</span>
    </div>
    <div class="first_title">
      <span>前端</span>
    </div>
    <div class="first_title">
      <span>后端</span>
    </div>
    <div class="first_title">
      <span>移动</span>
    </div>
    <div class="first_title">
      <span>云计算</span>
    </div>
    <div class="first_title">
      <span>运维</span>
    </div>
    <div class="first_title">
      <span>UI设计</span>
    </div>
    
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
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  .first_title {
    text-align: center;
    font-size: 0.14rem;
    width: 0.6rem;
    margin: 0 0.2rem;

    span {
      display: inline-block;
      padding: 0.12rem 0;
      overflow: hidden;
    }
  }
}

.title::-webkit-scrollbar {
  display: none;
}
</style>