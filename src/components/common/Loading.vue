<template>
  <div>
    <div v-if="isBottom" class="load">
      <van-loading v-if="loading" type="spinner" color="#1989fa" />
    </div>
    <div class="noMore" v-if="noMore">
      <p>~我可是有底线的!</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "loading",
  props: {
    maxlength: Number //无更多的课程数据
  },
  data() {
    return {
      isThrottle: true //限流
    };
  },
  computed: {
    ...mapState(["course", "loading", "noMore"])
  },
  methods: {
    more() {
      if (this.isBottom() && this.isThrottle) {
        clearTimeout(this.timer);
        this.$emit("get-more");
        this.isThrottle = false;
        this.timer = setTimeout(() => {
          this.isThrottle = true;
        }, 1000);
      }
    },
    //是否达到底部
    isBottom() {
      const distance =
        this.getPageHeight() - this.scroll().top - this.getWindowHeight();
      if (distance <= 10) {
        return true;
      }
      return false;
    },
    //滚动的位置
    scroll() {
      return {
        top:
          window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop
      };
    },
    //html的高度
    getPageHeight() {
      return document.querySelector("html").scrollHeight;
    },
    getWindowHeight() {
      return (
        document.documentElement.clientHeight || document.body.clientHeight
      );
    }
  },
  activated() {
    window.addEventListener("scroll", this.more);
  },
  deactivated() {
    window.removeEventListener("scroll", this.more);
  }
};
</script>

<style lang="" scoped></style>