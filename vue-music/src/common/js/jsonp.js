import originJSONP from 'jsonp' // 导入下载好的jsonp

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) //判断处理url参数格式

  return new Promise((resolve, reject) => { // 构造Promise实例
    originJSONP(url, option, (err, data) => { // 调用下载好的jsonp
      if (!err) {  //如果没有错误 就把数据给到resolve
        resolve(data)
      } else { // 如果收到错误
        reject(err)
      }
    })
  })
}

export function param (data) {   //请求的url参数拼接
  let url = '' 
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
