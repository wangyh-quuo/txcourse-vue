<template>
  <div>
    <div>
      <div class="more" @click="show">
        <van-icon name="more-o" size="20px" />
      </div>
      <transition name="tab">
        <div class="nav" v-show="tabShow" @click="tabShow=false">
          <p>
            <van-icon name="wap-home" size="20px" />
            <router-link to="/" tag="span">回到首页</router-link>
          </p>
          <p>
            <van-icon name="contact" size="20px" />
            <router-link to="/user" tag="span">个人中心</router-link>
          </p>
          <p>
            <van-icon name="certificate" size="20px" />
            <router-link v-if="!isLogin()" to="/login" tag="span">注册登录</router-link>
            <span v-if="isLogin()" @click="logout">退出登录</span>
          </p>
        </div>
      </transition>
    </div>
    <van-overlay
      class="overlay"
      z-index="0"
      v-show="tabShow"
      @click="tabShow = false"
    />
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  name: "more",
  data() {
    return {
      tabShow: false, //是否显示tab
      login: false  //是否登录
    };
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['clearUserData']),
    show() {
      this.tabShow = !this.tabShow;
    },
    isLogin() {
      return this.user.auth.loggedIn().result;
    },
    //退出登录,回到首页
    logout (){
      this.clearUserData();
      this.$router.push({name: "home"});
    }
  }
};
</script>

<style lang="stylus" scoped>
.more {
  position: absolute;
  padding-right: 0.1rem;
  right: 0
  i {
    transform: translateY(0.05rem)
  }
}


.nav {
  position: fixed;
  z-index: 1;
  top: 0.54rem;
  right: 0;
  background: #fff;
  width: 1.5rem;
  border-radius: 0 0 0.2rem 0.2rem;

  p {
    margin-left: 0.1rem;
  }

  span {
    font-size: 0.16rem;
    padding: 0.1rem;
  }
}

.overlay {
  margin-top: 0.54rem;
}

.tab-enter {
  transform: translateX(100%);
}

.tab-enter-active {
  transition: all 0.5s ease;
}
</style>
