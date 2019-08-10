<template>
  <div class="login">
    <van-cell-group>
      <van-field
        v-model="phone"
        label="+86"
        placeholder="请输入手机号"
        :error-message="errorPhone"
        @input="checkPhone"
        maxlength="11"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :error-message="errorMsm"
      >
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
      sms: "",
      errorPhone: "",
      errorMsm: ""
    };
  },
  methods: {
    ...mapActions(["setUserData"]),
    //手机格式校验
    checkPhone() {
      if (!this.phone) {
        this.errorPhone = "手机号不能为空";
      } else {
        this.errorPhone = "";
        if (!this.phone.match(/1[^0-2][0-9]{9}/)) {
          this.errorPhone = "手机号格式有误";
        }
      }
    },
    login() {
      if (this.phone != "" && this.sms != "") {
        //校验通过
        if(this.errorPhone == ""){
          //TODO: 发送登录请求,得到用户信息
          this.setUserData({ phone: this.phone, sms: this.sms }).then(() => {
            //登录成功后跳转到登录前的那个页面
            const redirect = decodeURIComponent(
              this.$router.history.current.query.redirect || "/"
            ); //这里query对象被放在了history对象的current对象中
            this.$router.push({ path: redirect });
          });
        }
      } else {
        //错误提示
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