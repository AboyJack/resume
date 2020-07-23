/**
 * 判断是否是移动端
 */
export const isMobile = () => {
  let { userAgent } = window.navigator
  return !!userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

export default {}
