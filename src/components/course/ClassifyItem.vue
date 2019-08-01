<template>
  <div class="classify_item">
    <ul class="list">
      <li class="list_left">前端开发:</li>
      <li class="list_right">
        <ul>
          <router-link to="/courseList/1" tag="li" class="item active">全部</router-link>
          <router-link to="/courseList/1" tag="li" class="item">HTML/CSS</router-link>
          <router-link to="/courseList/1" tag="li" class="item">JavaScript</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Vue.js</router-link>
          <router-link to="/courseList/1" tag="li" class="item">React.JS</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Angular</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Node.js</router-link>
          <router-link to="/courseList/1" tag="li" class="item">jQuery</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Bootstrap</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Sass/Less</router-link>
          <router-link to="/courseList/1" tag="li" class="item">WebApp</router-link>
          <router-link to="/courseList/1" tag="li" class="item">小程序</router-link>
          <router-link to="/courseList/1" tag="li" class="item">前端工具</router-link>
          <router-link to="/courseList/1" tag="li" class="item">Html5</router-link>
          <router-link to="/courseList/1" tag="li" class="item">CSS3</router-link>
        </ul>
      </li>
    </ul>
    <ul class="list">
      <li class="list_left">难度:</li>
      <li class="list_right">
        <ul>
          <router-link class="item active">全部</router-link>
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
export default {
  name: "ClassifyItem"
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
      font-size: 0.14rem;
      line-height: 0.3rem;
      padding: 0.2rem;
    }
  }

}
</style>

