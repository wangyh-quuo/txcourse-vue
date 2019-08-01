<template>
  <section class="drop_menu">
    <div class="select_item">
      <div class="order" @click="order">
        <span class="order_title">默认排序</span>
        <van-icon name="arrow-down" />
      </div>
      <div class="filter" @click="courseFilter">
        <span class="filter_title">筛选</span>
        <van-icon name="arrow-down" />
      </div>
    </div>

    <transition name="order">
      <div class="order_box" v-show="isOrder">
        <ul>
          <li class="order_item">综合排序</li>
          <li class="order_item">人气排序</li>
          <li class="order_item">价格最低</li>
          <li class="order_item">价格最高</li>
        </ul>
      </div>
    </transition>

    <van-overlay z-index="0" v-show="isFilter" @click="isFilter = false" />
    <div class="filter_box" v-show="isFilter">
      <div>
        <h1 class="filter_title">方向</h1>
        <div>
          <van-button type="default">前端</van-button>
          <van-button type="default">后端</van-button>
          <van-button type="default">移动</van-button>
          <van-button type="default">云计算</van-button>
          <van-button type="default">运维</van-button>
          <van-button type="default">UI设计</van-button>
        </div>
      </div>
      <div>
        <h1 class="filter_title">类别</h1>
        <div>
          <van-button type="default">前端</van-button>
          <van-button type="default">后端</van-button>
          <van-button type="default">移动</van-button>
          <van-button type="default">云计算</van-button>
          <van-button type="default">运维</van-button>
          <van-button type="default">UI设计</van-button>
        </div>
      </div>
      <div>
        <h1 class="filter_title">难度</h1>
        <div>
          <van-button type="default">入门</van-button>
          <van-button type="default">初级</van-button>
          <van-button type="default">中极</van-button>
          <van-button type="default">高级</van-button>
        </div>
      </div>
      <div class="confirm">
        <van-button type="default">取消</van-button>
        <van-button type="info">确认</van-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DropMenu",
  data() {
    return {
      isOrder: false, //是否选中排序
      isFilter: false
    };
  },
  methods: {
    order() {
      //出现下拉选择
      this.isOrder = !this.isOrder;
    },
    courseFilter() {
      this.isOrder = false;
      this.isFilter = !this.isFilter;
    }
  }
};
</script>

<style lang="stylus" scoped>
.drop_menu {
  width: 100%;
  position: fixed;
  top: 0.54rem;
  line-height: 0.3rem;
  height: 0.5rem;
  background: #fff;

  .select_item {
    display: flex;
    text-align: center;
    color: #666;

    .order {
      width: 50%;

      .order_title {
        padding: 0.1rem 0;
        font-size: 0.16rem;
        border-bottom: 0.03rem solid orange;
      }
    }

    .filter {
      flex: 1;

      .filter_title {
        font-size: 0.16rem;
      }
    }
  }

  .order_box {
    width: 100%;
    background: #fff;

    .order_item {
      padding: 0.05rem;
      border-bottom: 0.01rem solid #ddd;
      color: #23bbff;
    }
  }

  .filter_box {
    width: 100%;
    transform: translateX(10%);
    background: #fff;

    .filter_title {
      line-height: 0.3rem;
      padding-left: 0.1rem;
      font-size: 0.2rem;
      font-weight: 700;
    }

    .confirm {
      width: 100%;
      button{
        width: 40%;
      }
    }

    button {
      margin: 0.1rem;
    }
  }
}

.order-enter {
  transform: translateY(-0.1rem);
}

.order-enter-active, .v-leave-active {
  transition: all 0.5s ease;
}
</style>
