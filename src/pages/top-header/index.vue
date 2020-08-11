<template>
  <div class="resume-header">
    <h1 v-once>personal resume</h1>
    <div class="download-list">
      <a @click="copyText(phone, '联系电话')">
        <i class="iconfont iconicon-phone"></i>
        {{phone}}
      </a>
    </div>
    <div class="download-list">
      <a href="mailto:1105521265@qq.com">
        <i class="iconfont iconemail"></i>
        {{email}}
      </a>
    </div>
    <div class="download-list"
         ref="downloadList"
         @click="downloadPDF">
      <!-- <a ref="pdfHref"
         href="https://raw.githubusercontent.com/AboyJack/resume/master/docs/resume.pdf">
        <i class="iconfont iconpdf"></i>PDF
      </a> -->
      <a ref="pdfHref"
         href="https://gitee.com/jack_peng/resume/raw/master/docs/resume.pdf">
        <i class="iconfont iconpdf"></i>PDF
      </a>
    </div>
    <div class="more-list">
      <a @click="showPopupList">
        <i class="iconfont iconmore"></i>
      </a>
    </div>
    <Pdf ref="myPdf"
         v-show="false"
         v-for="i in numPages"
         :key="i"
         :src="src"
         :page="i"></Pdf>
  </div>
</template>
<script>
  // import pdfFile from '@/assets/file/resume.pdf'
  import Pdf from 'vue-pdf'
  // import pdf from '@/components/pdf';
  // import download from '@/utils/download'
  // import bus from '@/utils/event-bus'
  import common from '../mixins/common'
  export default {
    name: 'top-header',
    components: {
      Pdf
    },
    mixins: [common],
    data () {
      return {
        title: 'PERSONAL RESUME',
        htmlTitle: 'PERSONAL RESUME',
        pdfElement: '#app',
        showPopup: false,
        src: '',
        numPages: undefined
      }
    },
    mounted () {
      this.$bus.$on('hidePopup', (val) => {
        this.showPopup = val
      })
      this.src = Pdf.createLoadingTask(`${window.location.origin}/resume.pdf`)
      this.src.promise.then(pdf => {
        this.numPages = pdf.numPages
      })
    },
    methods: {
      showPopupList () {
        this.$bus.$emit('showPopup', !this.showPopup)
      },
      printPDF () {
        // console.log(this.$refs.myPdf)
        this.$refs.myPdf && this.$refs.myPdf.print()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/style/index.scss';
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
    z-index: 999999;
    h1 {
      text-transform: uppercase;
      /* letter-spacing: 1px; */
      font-size: px-rem(30);
      padding-left: px-rem(50);
      color: $-font-title;
      width: px-rem(330);
      @include custom-font-family($f-m-s-s);
    }
    .download-list {
      color: $-font-title;
      font-size: 12px;
      padding-left: px-rem(50);
      /* flex: 1; */
      align-self: center;
      a {
        color: $-font-title;
        &:hover {
          color: $-font-color;
          cursor: pointer;
        }
      }
      i {
        position: relative;
        right: 3px;
        top: 1px;
      }
      &:before {
        content: '';
        position: relative;
        right: 12px;
        width: 10px;
        border-left: 1px solid $-split-color;
      }
    }
    .more-list {
      text-align: right;
      padding-right: px-rem(50);
      flex: 1;
      cursor: pointer;
      &:before {
        border-left-width: 0px;
      }
      i {
        font-size: px-rem(45);
      }
    }
    @mixin show-download-list {
      .download-list {
        display: block;
      }
      .more-list {
        display: none;
      }
    }
    @mixin show-more {
      .download-list {
        display: none;
      }
      .more-list {
        display: block;
      }
    }
    @media screen and ($media-max: $w-500) {
      .download-list {
        text-align: right;
        padding-right: px-rem(50);
        &:before {
          border-left-width: 0px;
        }
      }
      @include show-more;
    }
    @media screen and ($media-min: $w-500) and ($media-max: $w-768) {
    }
    @media screen and ($media-min: $w-500) {
      @include show-download-list;
    }
    @media screen and ($media-min: $w-1000) {
      h1 {
        padding-left: 40px;
      }
    }
  }
</style>
