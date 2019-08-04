<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/user/course" icon="records" info="5">课程表</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>

export default {
  name: "tabbar",
  data() {
    return {
      active: 0
    };
  }
};
</script>