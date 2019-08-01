<template>
  <van-search
    v-model="keyword"
    input-align="left"
    placeholder="搜索课程"
    shape="round"
    :background="inputBgColor"
  />
</template>
<script>
export default {
  name: "search",
  props: {
    inputBgColor: String //接收input的背景色
  },
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
<style lang="stylus" scoped></style>
