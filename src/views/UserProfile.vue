<template>
  <div class="user_profile">
    <profile-header>
      <template #header_left>
        <router-link to="/" tag="span" class="back">
          <van-icon name="arrow-left" size="0.2rem" />
        </router-link>
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
      <van-button type="info" size="large">退出登录</van-button>
    </div>
  </div>
</template>
<script>
import ProfileHeader from "@/components/common/Header";
import NavMore from "@/components/common/More";
import UserInfo from "@/components/user/UserInfo"
import Group from "@/components/user/Group"
import List from "@/components/user/List"
export default {
  name: "UserProfile",
  components: {
    ProfileHeader,
    NavMore,
    UserInfo,
    Group,
    List
  }
};
</script>

<style lang="stylus" scoped>
.user_profile
  background: #f4f4f4
.pages
  padding-top: 0.54rem

</style>