<template>
  <div>
    <question-header>
      <template #header_left>
        <back></back>
      </template>
      <template #header_right>
        <span class="title">我的提问</span>
        <nav-more class></nav-more>
      </template>
    </question-header>
    <div style="padding-top: 0.54rem;"></div>
    <section>
      <div class="questionItem" v-for="question of questionList" :key="question.id">
        <p class="myQuestion">{{question.questionContent}}</p>
        <div class="answer" v-for="answer of question.answerList" :key="answer.id">
          <p>{{answer.answerContent}}</p>
          <p class="answer_bottom">
            <span class="left">{{answer.time}}</span>
            <span class="right">采纳</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import QuestionHeader from "@/components/common/Header";
import Back from "@/components/common/Back";
import NavMore from "@/components/common/More";
export default {
  name: "UserQuestion",
  components: {
    QuestionHeader,
    Back,
    NavMore
  },
  data() {
    return {
      questionList: []
    }
  },
  mounted() {
    this.$get("/api/question").then(res=>{
      this.questionList = res.questionList;
    })
  },
};
</script>

<style lang="stylus" scoped>
.questionItem {
  background: #fff;
  margin-top: 0.1rem;
}

.myQuestion {
  line-height: 0.25rem;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  font-size: 0.16rem;
  border-bottom: 0.01rem solid #ccc;
  
}

.answer {
  padding: 0 0.2rem;
  line-height: 0.2rem;
  color: #666;
  font-size: 0.14rem;
  
}
.answer_bottom{
  overflow hidden
}
.left {
  float: left;
}

.right {
  float: right;
}
</style>