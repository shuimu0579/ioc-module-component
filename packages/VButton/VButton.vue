<template>
  <div>
    <button  v-bind="$attrs" class="button">
        <slot />
    </button>
    <el-link href="https://element.eleme.io" target="_blank">default</el-link>
    <el-link type="primary">primary</el-link>
    <el-link type="success">success</el-link>
    <el-link type="warning">warning</el-link>
    <el-link type="danger">danger</el-link>
    <el-link type="info">info</el-link>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </div>
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
    color: @danger;
    font-size: 30px;
  }
  .el-link {
    margin-right: 8px;
  }
  .el-link .el-icon--right.el-icon {
    vertical-align: text-bottom;
  }
</style>


