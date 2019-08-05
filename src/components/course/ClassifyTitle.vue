<template>
  <div class="title" @click="showClassify">
    <div
      class="first_title"
      v-for="(item,index) of course.classifyList"
      :key="item.id"
      :index="index"
      :id="item.id"
      v-text="item.name"
    ></div>
    <div ref="tab" class="tab_line"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ClassifyTitle",
  data() {
    return {
      tabIndex: 1
    };
  },
  computed: {
    ...mapState(["course"])
  },
  methods: {
    ...mapActions(["getClassifyList","getClassifyItems"]),
    showClassify(e) {
      if (e.target.nodeName == "DIV") {
        //当前点击元素的索引
        this.tabIndex = e.target.getAttribute("index");
        //获得元素的宽
        const width = (e.target.offsetWidth / 100) * this.tabIndex;
        //tab底部移动
        this.$refs.tab.style.transform = `translateX(${width}rem)`;
        //请求对应方向下的分类
        const id = e.target.getAttribute("id");
        this.getClassifyItems({ id: id });
      }
    }
  },
  mounted() {
    this.getClassifyList();
  }
};
</script>

<style lang="stylus" scoped>
.title {
  position: relative;
  display: flex;
  width: 100%;
  color: #fff;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  .first_title {
    text-align: center;
    font-size: 0.14rem;
    flex: 14.2%;
    padding: 0.12rem 0;
    overflow: hidden;
  }
}

.title::-webkit-scrollbar {
  display: none;
}

.tab_line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 14.2%;
  height: 0.03rem;
  background: #f44;
  transition: all 0.5s ease;
}
</style>