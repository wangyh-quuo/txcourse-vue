<template>
  <header class="header">
    <div class="header_left">
      <slot name="header_left"></slot>
    </div>
    <div class="header_right">
      <slot name="header_right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
</style>
