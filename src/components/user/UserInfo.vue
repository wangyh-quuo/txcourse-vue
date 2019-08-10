<template>
  <div class="box">
    <img class="user_avater" src="@/assets/img/cat.jpeg" alt="">
    <div class="user_info">
      <p class="user_name">{{user.userData.name}}</p>
      <p class="learn_time">学习时长 {{user.userData.learning}}分钟</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "UserInfo",
  computed: {
    ...mapState(['user'])
  },
};
</script>

<style lang="stylus" scoped>
.box 
  width: 100%;
  background: #33384a;
  height: 1rem
  color: #fff
  .user_avater
    float: left;
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem
    margin-left: 0.2rem
    border-radius: 50% 
  .user_info
    float: left;
    margin-top: 0.2rem
    padding-left: 0.2rem
    line-height: 0.3rem
  .user_name
    font-size: 0.18rem
  .learn_time
    color: #666
</style>