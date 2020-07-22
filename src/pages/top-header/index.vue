<template>
  <div class="resume-header">
    <h1>{{title}}</h1>
    <div class="download-list">
      <a href="tel:18128845330">
        <i class="iconfont iconicon-phone"></i>
        {{phone}}
      </a>
    </div>
    <div class="download-list">
      <a @click="copyEmail">
        <i class="iconfont iconemail"></i>
        {{email}}
      </a>
    </div>
    <div class="download-list" ref="downloadList">
      <a @click="downloadPDF">
        <i class="iconfont iconpdf"></i>PDF
      </a>
    </div>
    <div class="more-list">
      <a>
        <i class="iconfont iconmore"></i>
      </a>
    </div>
    <!-- <pdf></pdf> -->
  </div>
</template>
<script>
// import pdfFile from '@/assets/file/resume.pdf'
// import pdf from 'vue-pdf'
// import pdf from '@/components/pdf';
// import download from '@/utils/download'
import axios from 'axios'
export default {
  name: 'top-header',
  components: {
    // pdf
  },
  // created () {
  //   this.pdfSrc = pdf.createLoadingTask(this.pdfSrc)
  //   console.log(this.pdfSrc)
  // },
  data() {
    return {
      title: 'PERSONAL RESUME',
      phone: '18128845330',
      email: '1105521265@qq.com',
      // pdfSrc: 'https://github.com/AboyJack/resume/raw/master/src/assets/file/resume.pdf',
      pdfSrc:
        'https://raw.githubusercontent.com/AboyJack/resume/master/src/assets/file/resume.pdf',
      htmlTitle: 'PERSONAL RESUME',
      pdfElement: '#app'
      // pdfSrc: 'https://raw.githubusercontent.com/AboyJack/resume/master/src/assets/file/resume.pdf'
    }
  },
  methods: {
    copyEmail() {
      this.$copyText(this.email)
        .then(() => {
          // console.log(res)
          this.$toast.show('邮箱已复制到粘贴板', 2000)
        })
        .catch(() => {
          // console.log(err + '复制失败')
        })
    },
    downloadPDF() {
      // download(this.pdfSrc, 'PERSONAL RESUME.pdf')
      // this.exportSavePdf()
      axios
        .post(this.pdfSrc, {
          responseType: 'blob'
        })
        .then(res => {
          let ele = document.createElement('a')
          ele.download = 'PERSONAL RESUME.pdf' // 下载的名称
          // ele.target = target // 规定在何处打开链接文档
          ele.style.display = 'none'
          // 字符内容转变成blob地址 Blob用法 https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
          let blob = new Blob([res.data])
          ele.href = URL.createObjectURL(blob)
          // console.log(blob, ele)
          document.body.appendChild(ele)
          ele.click()
          document.body.removeChild(ele)
        })
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
  h1 {
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
      /* top: 3px; */
    }
    &:before {
      content: '';
      position: relative;
      right: 10px;
      width: 10px;
      border-left: 1px solid $-split-color;
    }
  }
  .more-list {
    text-align: right;
    padding-right: px-rem(50);
    flex: 1;
    &:before {
      border-left-width: 0px;
    }
    i {
      font-size: px-rem(50);
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
    @include show-download-list;
  }
  @media screen and ($media-min: $w-1000) {
    h1 {
      padding-left: 40px;
    }
    @include show-download-list;
  }
}
</style>
