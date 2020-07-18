<template>
  <div class="resume-header">
    <h1>{{title}}</h1>
    <div class="download-list">
      <a @click="downloadPDF">
        <i class="iconfont iconpdf"></i>PDF
      </a>
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
      downloadPDF () { }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/assets/style/index.scss";
  .resume-header {
    // position: absolute;
    // right: 0;
    // left: 0;
    position: relative;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    background-color: $-primary-7;
    height: px-rem(100);
    line-height: px-rem(110);
    @include border-bottom-split;
    display: flex;
    h1 {
      font-size: px-rem(30);
      padding-left: px-rem(50);
      /* font-weight: 500; */
      color: $-font-title;
      width: px-rem(330);
      @include custom-font-family($f-m-s-s);
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
    @media screen and ($media-min: $w-1000) {
      h1 {
        padding-left: 40px;
      }
    }
  }
</style>
