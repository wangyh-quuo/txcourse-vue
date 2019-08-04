<template>
  <section class="course">
    <router-link to="/video/1" tag="ul" class="list" v-for="item of courses" :key="item.id">
      <li class="item_left">
        <div class="item_img">
          <img class="course_img" :src="item.courseImg" />
          <span class="course_progress">已学{{ item.progress }}%</span>
        </div>
      </li>
      <li class="item_right">
        <p class="course_title ellipse">{{ item.name }}</p>
        <p class="course_record ellipse">学习至1-1javaScript深入浅出课程介绍</p>
      </li>
    </router-link>
  </section>
</template>

<script>

export default {
  name: "MyCourse",
  data() {
    return {
      courses: [],
      loading: false
    };
  },
  methods: {
    getUserCourse() {
      //TODO: 数据加载中
      this.loading = true;
      //请求我的课程api
      this.$get("/api/myCourse",{ uid: 12138 }).then(res=>{
        console.log(res)
        this.courses = res.myCourse;
      }).catch(err=>{
        console.log(err)
      });
    }
  },
  mounted() {
    this.getUserCourse();
  }
};
</script>

<style lang="stylus" scoped>
.course {
  .list {
    display: flex;
    border-bottom: 0.01rem solid #ccc;

    .item_left {
      width: 50%;

      .item_img {
        padding: 0.1rem;
        position: relative;
      }

      .course_img {
        width: 100%;
        border-radius: 0.1rem;
      }

      .course_progress {
        position: absolute;
        z-index: 1;
        bottom: 15%;
        right: 15%;
        background: #000;
        opacity: 0.3;
        width: 0.6rem;
        line-height: 0.2rem;
        border-radius: 10%;
        color: #fff;
        text-align: center;
      }
    }

    .item_right {
      margin: 0.1rem;
      width: 50%;
      line-height: 0.4rem;

      .course_title {
        font-size: 0.16rem;
        line-height: 0.3rem;
      }

      .course_record {
        color: #666;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
