<template>
  <div class="bgColor_body">
    <coupon-header>
      <template #header_left>
        <back></back>
      </template>
      <template #header_right>
        <span class="title">我的优惠券</span>
      </template>
    </coupon-header>
    <div style="padding-top: 0.8rem;"></div>
    <section class="coupons">
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    </section>
    <!-- 优惠券单元格 -->

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>
<script>
import CouponHeader from "@/components/common/Header";
import Back from "@/components/common/Back";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  name: "coupon",
  components: {
    CouponHeader,
    Back
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  .logo {
    display: inline-block;
    width: 0.26rem;
    height: 0.26rem;
    background: transparent;
    transform: translateY(0.14rem);
  }

  .title {
    display: inline-block;
    font-size: 0.16rem;
    color: #666;
    position: absolute;
    left: 50%
    transform: translateX(-50%)
  }
}
.coupons span{
  font-size: 0.18rem
}
</style>