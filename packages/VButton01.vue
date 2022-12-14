<template>
  <button v-bind="$attrs" class="button01">
    <slot />
  </button>
</template>

<style lang="less" scoped>
  .button01 {
    color: red;
    font-size: 30px;
  }
</style>
