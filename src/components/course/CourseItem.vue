<template>
  <section class="course">
    <router-link to="/course/1" tag="ul" class="list" v-for="item of 10" :key="item" >
      <li class="item_left">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
      </li>
      <li class="item_right">
        <p class="course_title">微信小程序开发1asdasdasdasdasdas11</p>
        <p class="course_price">免费</p>
      </li>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "CourseItem"
};
</script>

<style lang="stylus" scoped>
.course {
  padding-top: 1rem;

  .list {
    display: flex;
    border-bottom: 0.01rem solid #ccc;

    .item_left {
      width: 50%;

      .item_img {
        padding: 0.1rem;
      }

      .course_img {
        width: 100%;
        border-radius: 0.1rem;
      }
    }

    .item_right {
      margin: 0.1rem;
      width: 50%;
      line-height: 0.4rem;

      .course_title {
        font-size: 0.16rem;
        line-height: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .course_price {
        color: #23bbff;
        font-size: 0.16rem;
      }
    }
  }
}
</style>
