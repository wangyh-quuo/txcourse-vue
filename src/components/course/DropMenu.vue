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
          <li class="order_item" @click="orderCourse(0)">综合排序</li>
          <li class="order_item" @click="orderCourse(1)">人气排序</li>
          <li class="order_item" @click="orderCourse(2)">价格最低</li>
          <li class="order_item" @click="orderCourse(3)">价格最高</li>
        </ul>
      </div>
    </transition>

    <van-overlay z-index="0" v-show="isFilter" @click="isFilter = false" />
    <div class="filter_box" v-show="isFilter">
      <div>
        <h1 class="filter_title">方向</h1>
        <div @click="changeClassify">
          <van-button
            plain
            :type="condition.directions==direction.id?'info':'default'"
            v-for="direction of course.classifyList"
            :key="direction.id"
            :id="direction.id"
          >{{direction.name}}</van-button>
        </div>
      </div>
      <div>
        <h1 class="filter_title">类别</h1>
        <div>
          <van-button
            :type="condition.classifys==index?'info':'default'"
            v-for="(classify,index) of course.classifyItems.classifyItems"
            :key="classify.id"
            :id="classify.id"
            @click="condition.classifys=index"
          >{{classify.name}}</van-button>
        </div>
      </div>
      <div>
        <h1 class="filter_title">难度</h1>
        <div>
          <van-button
            :type="condition.ranks==index?'info':'default'"
            v-for="(rank,index) of rankList"
            :key="index"
            @click="condition.ranks=index"
          >{{ rank }}</van-button>
        </div>
      </div>
      <div class="confirm">
        <van-button @click="isFilter=false" type="default">取消</van-button>
        <van-button @click="submit" type="info">确认</van-button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "DropMenu",
  data() {
    return {
      isOrder: false, //是否选中排序
      isFilter: false,
      rankList: ["入门", "初级", "中级", "高级"],
      condition: {
        directions: 1,
        classifys: 0,
        ranks: 0
      }
    };
  },
  computed: {
    ...mapState(["course"])
  },
  methods: {
    ...mapMutations(["orderCourseByCondition"]),
    ...mapActions([
      "getClassifyList",
      "getClassifyItems",
      "getCourseListByCondition"
    ]),
    order() {
      //出现下拉选择
      this.isOrder = !this.isOrder;
    },
    //课程排序
    orderCourse(status) {
      this.isOrder = false;
      this.orderCourseByCondition(status);
    },
    courseFilter() {
      this.isOrder = false;
      this.isFilter = !this.isFilter;
    },
    changeClassify(e) {
      if (e.target.nodeName == "BUTTON") {
        const id = e.target.getAttribute("id");
        this.condition.directions = id;
        this.getClassifyItems({ id: id });
      }
    },
    submit() {
      this.getCourseListByCondition(this.condition);
      this.isFilter = false;
    }
  },
  mounted() {
    this.getClassifyList();
    this.getClassifyItems();
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

      button {
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
