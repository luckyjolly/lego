<template>
  <div class="homepage-container">
    <a-layout>
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">慕课乐高</router-link>
        </div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>© 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  export default {
    setup() {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  :deep(.ant-layout) {
    background: #fff;
  }

  .header {
    display: flex;
    justify-self: center;
    align-items: center;
  }
  .page-title {
    color: #fff;
  }
</style>
