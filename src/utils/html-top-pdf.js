import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

const install = (Vue) => {
  /**
   * 将html页面导出为pdf
   */
  Vue.prototype.exportSavePdf = function () {
    let title = this.htmlTitle || '彭杰-个人简历'
    let element = this.pdfElement || '#app'
    this.$refs.downloadList.hidden = true
    let htmlEle = document.querySelector(element) // 导出pdf的dom元素
    html2canvas(htmlEle, {
      allowTaint: true,
      scale: 2 // 提升画面质量，但是会增加文件大小
    }).then((canvas) => {
      try {
        let { width: contentWidth, height: contentHeight } = canvas
        let pageData = canvas.toDataURL('image/jpeg', 1.0) // 将canvas转为base64图片
        this.$refs.downloadList.hidden = false
        // let pageHeight = contentWidth / 592.28 * 841.89 // 一页pdf显示html页面生成的canvas高度
        // let leftHeight = contentHeight // 未生成pdf的页面高度
        // let position = 0 // 页面偏移

        // // a4纸的尺寸[595.28, 841.89]
        // let imgWidth = 595.28
        // let imgHeight = 592.28 / contentWidth * contentHeight // html页面生成的canvas在pdf中图片的宽高
        // let PDF = new JsPDF('', 'pt', 'a4')
        // // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // if (leftHeight < pageHeight) { // 内容未超过pdf一页显示的范围，无需分页
        //   PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        // } else {
        //   while (leftHeight > 0) {
        //     PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        //     leftHeight -= pageHeight
        //     position -= 841.89
        //     if (leftHeight > 0) { // 避免添加空白页
        //       PDF.addPage()
        //     }
        //   }
        // }

        // 设置pdf的尺寸，pdf要使用pt单位 已知 1pt/1px = 0.75   pt = (px/scale)* 0.75
        // 2为上面的scale 缩放了2倍
        let pdfX = (contentWidth + 10) / 2 * 0.75
        let pdfY = (contentHeight + 500) / 2 * 0.75 // 500为底部留白

        let imgX = pdfX
        let imgY = contentHeight / 2 * 0.75 // 内容图片这里不需要留白的距离
        // 初始化jspdf 第一个参数方向：默认''时为纵向，第二个参数设置pdf内容图片使用的长度单位为pt，第三个参数为PDF的大小，单位是pt
        let PDF = new JsPDF('', 'pt', [pdfX, pdfY])
        // 将内容图片添加到pdf中，因为内容宽高和pdf宽高一样，就只需要一页，位置就是 0,0
        PDF.addImage(pageData, 'JPEG', 0, 0, imgX, imgY)

        PDF.save(`${title}.pdf`)
      } catch (error) {
        this.$refs.downloadList.hidden = false
      }
    })
  }
}

export default install
