<template>
  <button v-bind="$attrs" class="button01">
    <slot />
  </button>
</template>

<script>
export default {
  name: "VButton01",
}
</script>

<script setup> 

</script>

<style lang="less" scoped>
  .button01 {
    color: red;
    font-size: 30px;
  }
</style>
