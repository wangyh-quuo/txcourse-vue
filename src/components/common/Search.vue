<template>
  <van-search v-model="keyword" input-align="left" placeholder="搜索课程" shape="round" />
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
<style lang="stylus" scoped></style>
