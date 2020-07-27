
// import axios from 'axios'
import Dialog from 'vant/lib/dialog'
import 'vant/lib/dialog/style'
import html2canvas from 'html2canvas'
import printJS from 'print-js'
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
          this.$toast.show(`${title}已复制到粘贴板`, 2500)
        })
        .catch(() => {
          // console.log(err + '复制失败')
        })
    },
    sendEmail () {
      // Dialog.confirm({
      //   title: '提示',
      //   message: '确认发送邮件至邮箱？',
      //   // closeOnClickOverlay: true
      // }).then(() => {
      //   console.log(e.target)
      //   e.target.click()
      // }).catch(() => {
      //   // on cancel
      // })
    },
    closePopup () { },
    downloadPDF () {
      // download(this.pdfSrc, 'PERSONAL RESUME.pdf')
      // this.exportSavePdf()
      this.closePopup()
      Dialog.confirm({
        title: '提示',
        message: '确认下载PDF格式简历？',
        // closeOnClickOverlay: true
      }).then(() => {
        // on confirm
        // axios
        //   .get('http://localhost:8080/static/resume.pdf', {
        //     responseType: 'blob'
        //   })
        //   .then(res => {
        //     let ele = document.createElement('a')
        //     ele.download = 'PERSONAL RESUME.pdf' // 下载的名称
        //     // ele.target = target // 规定在何处打开链接文档
        //     ele.style.display = 'none'
        //     // 字符内容转变成blob地址 Blob用法 https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
        //     let blob = new Blob([res.data])
        //     ele.href = URL.createObjectURL(blob)
        //     // console.log(blob, ele)
        //     document.body.appendChild(ele)
        //     ele.click()
        //     document.body.removeChild(ele)
        //   })
        html2canvas(document.body, {
          backgroundColor: null,
          useCORS: true,
          windowHeight: document.body.scrollHeight
        }).then(canvas => {
          const url = canvas.toDataURL()
          printJS({
            printable: url,
            type: 'image',
            documentTitle: '彭杰-个人简历'
          })
        })
      }).catch(() => {
        // on cancel
        this.showPopup = true
        this.$bus.$emit('hidePopup', true)
      })
    }
  }
}
