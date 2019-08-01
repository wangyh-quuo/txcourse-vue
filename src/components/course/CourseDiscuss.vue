<template>
  <section class="course_discuss">
    <h1 class="discuss_title">学员讨论</h1>
    <ul class="discuss_list" v-for="item of 5" :key="item">
      <li class="discuss_left">
        <img class="avater" src="@/assets/img/cat.jpeg" alt />
      </li>
      <li class="discuss_right">
        <p class="author">用户A</p>
        <p class="question">
          刚看了书，楼上说的极是，不能使用对象字面量创建原型方法，这样会重写原型链。
        </p>
        <p class="last">
          <span class="qtime">15点48分</span>
          <span class="answer">x回答</span>
        </p>
      </li>
    </ul>
    <div class="loading">
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </section>
</template>
<script>
export default {
  name: "CourseDiscuss"
};
</script>

<style lang="stylus" scoped>
.loading {
  text-align: center;
  padding-bottom: 0.4rem;
}

.course_discuss {
  padding-bottom: 0.4rem;
}

.discuss_title {
  font-size: 0.18rem;
  font-weight: 700;
  padding: 0.1rem;
}

.discuss_list {
  display: flex;

  .discuss_left {
    width: 0.4rem;
    margin: 0.1rem;

    .avater {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
  }

  .discuss_right {
    flex: 1;

    .author {
      color: #ccc;
      line-height: 0.18rem;
    }

    .question {
      font-size: 0.16rem;
      line-height: 0.2rem;
      padding: 0.1rem 0 0;
      padding-right: 0.2rem;
      color: #666;
    }

    .last {
      padding: 0.1rem 0;
      padding-right: 0.2rem;
      line-height: 0.4rem;
      height: 0.4rem;
      color: #ccc;

      .qtime {
        float: left;
      }

      .answer {
        float: right;
      }
    }
  }
}
</style>
