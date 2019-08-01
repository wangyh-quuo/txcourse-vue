<template>
  <div class="header" style="color: #fff;">
    <div class="header_left">
      <router-link to="/" tag="span" class="logo">
        <van-icon name="arrow-left" size="0.3rem"/>
      </router-link>
    </div>
    <div class="header_right" >
        <slot></slot>
        <van-icon class="user_avater" size="0.3rem" name="manager" />
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoHeader"
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  position: fixed;
  background: #000;
  line-height: 0.54rem;
  height: 0.54rem;
  z-index: 999;
  width: 100%;

  .header_left {
    width: 0.4rem;
    line-height: 0.26rem;
    text-align: center;
  }

  .logo {
    display: inline-block;
    width: 0.26rem;
    height: 0.26rem;
    transform: translateY(0.14rem);
  }

  .header_right {
    flex: 1;
  }
  .user_avater{
    display: inline-block;
    float: right 
    transform: translateY(50%)
  }
}
</style>