export const download = (content, filename, target = '') => {
  let ele = document.createElement('a')
  ele.download = filename // 下载的名称
  ele.target = target // 规定在何处打开链接文档
  ele.style.display = 'none'
  // 字符内容转变成blob地址 Blob用法 https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
  let blob = new Blob([content])
  ele.href = URL.createObjectURL(blob)
  document.body.appendChild(ele)
  ele.click()
  document.body.removeChild(ele)
}
export default download
