<template>
  <div class="login">
    <van-cell-group>
      <van-field v-model="phone" label="+86" placeholder="请输入手机号" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login_text">
      <p>注册即同意《用户协议》</p>
    </div>
    <div class="login_btn">
      <van-button type="info" round size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      sms: ""
    };
  },
  methods: {
    ...mapActions(['setUserData']),
    login() {
      if (this.phone != "" && this.sms != "") {
        //TODO: 发送登录请求,得到用户信息
        const user = {
          name: "用户12138"
        };
        this.setUserData(user);
        console.log(this.$store)
        //登录成功后跳转到登录前的那个页面
        const redirect = decodeURIComponent(
          this.$router.history.current.query.redirect || "/"
        ); //这里query对象被放在了history对象的current对象中
        this.$router.push({ path: redirect });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.login {
  margin-top: 0.2rem;

  .login_text {
    color: #666;
    text-align: center;
    line-height: 0.4rem;
  }

  .login_btn {
    margin-top: 0.2rem;
  }
}
</style>