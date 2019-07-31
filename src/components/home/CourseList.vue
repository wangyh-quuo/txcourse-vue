<template>
  <section class="course">
    <ul class="list">
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">免费</p>
      </li>
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">￥.100.00</p>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">免费</p>
      </li>
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">￥.100.00</p>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">免费</p>
      </li>
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">￥.100.00</p>
      </li>
    </ul>
    <ul class="list">
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">免费</p>
      </li>
      <li class="item">
        <div class="item_img">
          <img class="course_img" src="@/assets/img/356.webp" />
        </div>
        <p class="course_title">微信小程序开发</p>
        <p class="course_price">￥.100.00</p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "CourseList"
};
</script>
<style lang="stylus" scoped>
.course {
  margin-top: 0.05rem;

  .list {
    display: flex;
  }

  .item {
    width: 50%;

    .item_img {
      padding: 0.1rem;
    }

    .course_img {
      border-radius: 0.1rem;
      width: 100%;
    }

    .course_title {
      padding-left: 0.1rem;
      font-size: 0.18rem;
      line-height: 0.2rem;
      height: 0.4rem;
    }

    .course_price {
      color: #23bbff;
      padding-left: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
  }
}
</style>
