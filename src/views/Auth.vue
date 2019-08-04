<template>
  <div class="Auth">
    <div class="logo center_horizontal"></div>
    <login></login>
  </div>
</template>
<script>
import Login from "@/components/user/Login";
export default {
  name: "Auth",
  components: {
    Login
  }
};
</script>

<style lang="stylus" scoped>
.Auth {
  width: 100%;

  .logo {
    width: 0.5rem;
    height: 0.5rem;
    background: url('~@/assets/logo.png') no-repeat;
    margin-top: 0.5rem;
  }
}
</style>