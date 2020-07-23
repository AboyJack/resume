
import axios from 'axios'
export default {
  data () {
    return {
      phone: '18128845330',
      email: '1105521265@qq.com',
      pdfSrc: 'https://raw.githubusercontent.com/AboyJack/resume/master/src/assets/file/resume.pdf',
    }
  },
  methods: {
    copyText (val, title = '内容') {
      this.$copyText(val)
        .then(() => {
          // console.log(res)
          this.$toast.show(`${title}已复制到粘贴板`)
        })
        .catch(() => {
          // console.log(err + '复制失败')
        })
    },
    downloadPDF () {
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
