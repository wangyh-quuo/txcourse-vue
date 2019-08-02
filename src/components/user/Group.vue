<template>
 <div class="group">
    <router-link  to="/user/course" tag="div" class="group_item">
       <van-icon color="#23b8ff" size="0.25rem" name="todo-list" />
      <p>我的课程</p>
    </router-link >
    <router-link to="/user/question" tag="div" class="group_item">
      <van-icon color="#23b8ff" size="0.25rem" name="question" />
       <p>我的讨论</p>
    </router-link >
 </div>
</template>
<script>

export default {
  name: "Group"
};
</script>

<style lang="stylus" scoped>
  .group
    display: flex
    width: 100%
    text-align: center
    background: #fff
  .group_item
    width: 50%
    margin: 0.2rem 0
  
</style>