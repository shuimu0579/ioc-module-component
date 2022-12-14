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

<script setup> 

</script>

<style lang="less" scoped>
  .button {
    color: green;
    font-size: 30px;
  }
</style>


