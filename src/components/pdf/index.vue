<template>
  <div>
    <!-- <pdf :src="src"
         ref="pdf">
    </pdf> -->
  </div>
</template>
<script>
  // import pdf from 'vue-pdf'
  export default {
    name: 'pdf',
    // components: { pdf },
    data () {
      return {
        src: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      }
    },
    methods: {
      // //预览pdf
      // previewPDF (url) {
      //   this.src = pdf.createLoadingTask(url)
      // },
      // //下载PDF
      // downloadPDF (url, fileName) {
      //   this.axios({
      //     method: 'get',
      //     responseType: 'arraybuffer',
      //     url: url
      //   }).then(function (res) {
      //     //调用下载方法，把后端传过来的流传给fileDownload方法
      //     this.fileDownload(res.data, fileName);
      //   }.bind(this)).catch(function (error) {
      //     this.$Message.error('网络请求出错')
      //     console.log('error', error)
      //   }.bind(this));
      // },
      // fileDownload: (data, fileName) => {
      //   let blob = new Blob([data], {
      //     // type类型后端返回来的数据中会有，根据自己实际进行修改
      //     type: 'application/pdf'
      //   });
      //   let filename = fileName || 'resume.pdf';
      //   if (typeof window.navigator.msSaveBlob !== 'undefined') {
      //     window.navigator.msSaveBlob(blob, filename);
      //   } else {
      //     var blobURL = window.URL.createObjectURL(blob);
      //     // 创建隐藏<a>标签进行下载
      //     var tempLink = document.createElement('a');
      //     tempLink.style.display = 'none';
      //     tempLink.href = blobURL;
      //     tempLink.setAttribute('download', filename);
      //     if (typeof tempLink.download === 'undefined') {
      //       tempLink.setAttribute('target', '_blank');
      //     }
      //     document.body.appendChild(tempLink);
      //     tempLink.click();
      //     document.body.removeChild(tempLink);
      //     window.URL.revokeObjectURL(blobURL);
      //   }
      // }
    }
  }
</script>
