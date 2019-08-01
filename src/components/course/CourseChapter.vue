<template>
  <div class="chapter">
    <section class="course_chapter" v-for="item of 5" :key="item">
      <div class="chapter_title">第{{ item }}章:xxxxxx</div>
      <ul class="chapter_section">
        <router-link to="/video/1" tag="li" class="section_item" v-for="item of 5" :key="item">
          <van-icon name="play-circle-o" size="0.14rem" class="item_left"/>
          {{ item }}
          <van-icon name="circle" class="item_right"/>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "CourseChpter"
};
</script>

<style lang="stylus" scoped>
.chapter {
  background: #F3F5F7;
}

.course_chapter {
  margin: 0.1rem;

  .chapter_title {
    line-height: 0.4rem;
    font-size: 0.14rem;
  }

  .chapter_section {
    line-height: 0.4rem;

    .section_item {
      margin: 0.1rem 0.2rem;
      color: #666;
      background: #fff;
      box-shadow: 0.01rem 0.01rem 0.1rem 0.01rem #65cdff;
      .item_left{
        padding: 0 0.1rem
      }
      .item_right{
        float:right;
        padding: 0 0.1rem
        transform: translateY(100%)
      }
    }
    
  }
}
</style>
