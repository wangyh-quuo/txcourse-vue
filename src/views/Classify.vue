<template>
  <div class="classify">
    <div class="bgheader">
      <header class="header_search">
        <search :inputBgColor="inputBgColor"></search>
      </header>
    <classify-title></classify-title>
    </div>
    <classify-item></classify-item>
    <tabbar></tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import search from "@/components/common/Search";
import ClassifyTitle from "@/components/course/ClassifyTitle";
import ClassifyItem from "@/components/course/ClassifyItem";
import tabbar from "@/components/common/Tabbar";
export default {
  name: "classify",
  data() {
    return {
      inputBgColor: '#23b8ff'//'#65cdff'
    }
  },
  components: {
    search,
    ClassifyTitle,
    ClassifyItem,
    tabbar
  }
};
</script>
<style lang="stylus" scoped>
@import "~@/assets/css/variables.styl" 
  .bgheader
    width: 100%
    background-color: $bgColor;
    background-image: url('~@/assets/img/header.png');
    background-size: cover;
  .header_search
    padding: 0.12rem
</style>

