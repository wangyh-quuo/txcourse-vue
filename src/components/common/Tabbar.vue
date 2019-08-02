<template>
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/classify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/" icon="records" info="5">课程表</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="friends-o" info="20">我的</van-tabbar-item>
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