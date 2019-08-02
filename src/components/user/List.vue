<template>
  <div class="list">
    <ul>
      <router-link tag="li"  to="/coupon">
        <van-icon color="rgb(255, 167, 45)" size="0.25rem" name="shopping-cart" />我的购物车
      </router-link>
      <router-link tag="li" to="/coupon">
        <van-icon color="rgb(255, 102, 102)" size="0.25rem" name="like" />我的收藏
      </router-link>
      <router-link tag="li" to="/coupon">
        <van-icon color="rgb(250, 126, 90)" size="0.25rem" name="balance-list" />我的订单
      </router-link>
      <router-link tag="li" to="/coupon">
        <van-icon color="rgb(148, 71, 235" size="0.25rem" name="bill" />优惠券
      </router-link>
      <!-- <li><van-icon name="question" />常见问题</li>
      <li><van-icon name="info" />意见反馈</li>-->
    </ul>
  </div>
</template>
<script>
export default {
  name: "list"
};
</script>

<style lang="stylus" scoped>
.list {
  width: 100%;
  margin: 0.5rem 0;
  background: #fff;

  ul {
    li {
      line-height: 0.3rem;
      border-bottom: 0.01rem solid #ccc;
      padding: 0.1rem;
      font-size: 0.16rem;
      color: #666;

      i {
        padding: 0 0.15rem;
        transform: translateY(0.04rem);
      }
    }
  }
}
</style>