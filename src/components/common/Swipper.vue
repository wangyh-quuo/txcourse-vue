<template>
  <div class="swipper">
    <van-swipe :autoplay="3000" indicator-color="white" loop>
      <van-swipe-item v-for="(item,index) of swipperList" :key="index">
        <img class="swipper_img" :src="item.swipperImg" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "swipper",
  props: {
    swipperList: Array
  }
};
</script>
<style lang="stylus" scoped>
.swipper {
  padding-top: 0.54rem;
}

.swipper_img {
  width: 100%;
}
</style>
