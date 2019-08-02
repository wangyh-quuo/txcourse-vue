<template>
  <div>
    <div>
      <div class="more" @click="show">
        <van-icon name="more-o" size="20px" />
      </div>
      <transition name="tab">
        <div class="nav" v-show="tabShow">
          <p>
            <van-icon name="wap-home" size="20px" />
            <span>回到首页</span>
          </p>
          <p>
            <van-icon name="contact" size="20px" />
            <span>个人中心</span>
          </p>
          <p>
            <van-icon name="certificate" size="20px" />
            <span v-if="!login">注册登录</span>
            <span v-if="login">退出登录</span>
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
export default {
  name: "more",
  data() {
    return {
      tabShow: false, //是否显示tab
      login: false  //是否登录
    };
  },
  methods: {
    show() {
      this.tabShow = !this.tabShow;
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
