<template>
  <div class="home">
    <home-header></home-header>
    <swipper></swipper>
    <home-recommend></home-recommend>
    <tabbar></tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/home/Header";
import swipper from "@/components/common/Swipper";
import HomeRecommend from "@/components/home/Recommend";
import tabbar from "@/components/common/Tabbar";

export default {
  name: "home",
  components: {
    HomeHeader,
    swipper,
    HomeRecommend,
    tabbar
  }
};
</script>
