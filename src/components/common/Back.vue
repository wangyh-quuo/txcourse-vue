<template>
  <span class="back" @click="back">
    <van-icon name="arrow-left" size="0.2rem" />
  </span>
</template>
<script>
export default {
  name: 'back',
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="" scoped></style>