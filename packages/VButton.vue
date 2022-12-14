<template>
  <button  v-bind="$attrs" class="button">
      <slot />
  </button>
</template>

<style lang="less" scoped>
  .button {
    color: green;
    font-size: 30px;
  }
</style>


