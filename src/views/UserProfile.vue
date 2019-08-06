<template>
  <div class="user_profile">
    <profile-header>
      <template #header_left>
        <back></back>
      </template>

      <template #header_right>
        <span class="title">个人中心</span>
        <nav-more></nav-more>
      </template>
    </profile-header>
    <div class="pages">
      <user-info></user-info>
      <group></group>
      <list></list>
    </div>
    <div class="postion_bottom">
      <van-button type="info" size="large" @click="logout">退出登录</van-button>
    </div>
  </div>
  
</template>
<script>
import ProfileHeader from "@/components/common/Header";
import Back from "@/components/common/Back";
import NavMore from "@/components/common/More";
import UserInfo from "@/components/user/UserInfo"
import Group from "@/components/user/Group"
import List from "@/components/user/List"

import { mapActions } from "vuex";
export default {
  name: "UserProfile",
  components: {
    ProfileHeader,
    Back,
    NavMore,
    UserInfo,
    Group,
    List
  },
  methods: {
    ...mapActions(['clearUserData']),
    //退出登录,回到首页
    logout (){
      this.clearUserData();
      this.$router.push({name: "home"});
    }
  }
};
</script>

<style lang="stylus" scoped>
.user_profile
  background: #f4f4f4
.pages
  padding-top: 0.54rem

</style>