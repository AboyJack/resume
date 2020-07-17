<template>
  <div class="resume-header">
    <h1>{{title}}</h1>
    <div class="download-list">
      <a><i class="iconfont iconpdf"></i>PDF下载</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'top-header',
    data () {
      return {
        title: 'PERSONAL RESUME'
      }
    },
    methods: {

    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/assets/style/index.scss";
  .resume-header {
    background-color: $-primary-7;
    height: px-rem(100);
    line-height: px-rem(110);
    @include border-bottom-split;
    display: flex;
    h1 {
      font-size: px-rem(30);
      padding-left: px-rem(50);
      font-weight: 500;
      color: $-font-title;
      width: px-rem(300);
    }
    .download-list {
      color: $-font-title;
      font-size: 12px;
      padding-left: px-rem(50);
      flex: 1;
      align-self: center;
      i {
        position: relative;
        top: 3px;
      }
      &:before {
        content: "";
        position: relative;
        right: 10px;
        width: 10px;
        border-left: 1px solid $-split-color;
      }
    }
  }
</style>
