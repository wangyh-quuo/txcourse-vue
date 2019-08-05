<template>
  <div class="home">
    <home-header>
      <template #header_left>
        <router-link to="/" tag="span" class="logo"></router-link>
      </template>

      <template #header_right>
        <search></search>
      </template>
    </home-header>
    <swipper :swipperList="swipperList"></swipper>
    <home-recommend></home-recommend>
    <div style="padding-bottom: 0.5rem;"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/common/Header";
import search from "@/components/common/Search";
import swipper from "@/components/common/Swipper";
import HomeRecommend from "@/components/home/Recommend";
import tabbar from "@/components/common/Tabbar";

export default {
  name: "home",
  components: {
    HomeHeader,
    swipper,
    HomeRecommend,
    tabbar,
    search
  },
  data() {
    return {
      swipperList: [],
      classifyList: [],
    };
  },
  methods: {
    getSwipperList() {
      this.$get("/api/index/swipper")
        .then(res => {
          this.swipperList = res.swipperList;
        })
        .catch(err => {
          console.log(err,"index swipper loading failure!");
        });
    },
  },
  mounted() {
    this.getSwipperList();
  }
};
</script>
