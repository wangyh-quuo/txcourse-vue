<template>
  <div class="header">
    <div class="header_left">
      <router-link to="/" tag="span" class="logo"></router-link>
    </div>
    <div class="header_right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  position: fixed;
  background: #fff;
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
    background: url('~@/assets/logo.png') no-repeat;
    background-size: 0.26rem;
    transform: translateY(0.14rem);
  }

  .header_right {
    flex: 1;
  }
}
</style>
