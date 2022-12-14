<template>
  <button  v-bind="$attrs" class="button">
      <slot />
  </button>
</template>

<script>
export default {
  name: "VButton",
}
</script>

<style lang="less" scoped>
  .button {
    color: green;
    font-size: 30px;
  }
</style>


