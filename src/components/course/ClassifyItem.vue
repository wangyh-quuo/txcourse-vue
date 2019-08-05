<template>
  <div class="classify_item">
    <ul class="list">
      <li class="list_left">{{course.classifyItems.name}}:</li>
      <li class="list_right">
        <ul>
          <router-link to="/courseList/-1" tag="li" class="item active">全部</router-link>
          <router-link
            :to="{name: 'courseList', params: {'classifyId': item.id}}"
            tag="li"
            class="item"
            v-for="item of course.classifyItems.classifyItems"
            :key="item.id"
            v-text="item.name"
          ></router-link>
        </ul>
      </li>
    </ul>
    <ul class="list">
      <li class="list_left">难度:</li>
      <li class="list_right">
        <ul>
          <router-link to="/courseList/-1" tag="li" class="item active">全部</router-link>
          <router-link to="/courseList/1" tag="li" class="item">入门</router-link>
          <router-link to="/courseList/1" tag="li" class="item">初级</router-link>
          <router-link to="/courseList/1" tag="li" class="item">中级</router-link>
          <router-link to="/courseList/1" tag="li" class="item">高级</router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ClassifyItem",
  computed: {
    ...mapState(["course"])
  },
  methods: {
    ...mapActions(["getClassifyItems"])
  },
  mounted() {
    this.getClassifyItems();
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/variables.styl';

.classify_item {
  .list {
    display: flex;

    .list_left {
      width: 0.8rem;
      font-size: 0.16rem;
      text-align: center;
      font-weight: 700;
      transform: translateY(50%);
    }

    .list_right {
      flex: 1;
      border-left: 0.01rem dotted #000;
      border-bottom: 0.01rem dotted #000;
    }

    .item {
      float: left;
      font-size: 0.12rem;
      line-height: 0.3rem;
      padding: 0.2rem;
    }
  }
}
</style>

