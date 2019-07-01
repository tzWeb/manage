/**
 * 创建script
 * @param url
 * @returns {Promise}
 */
export default function remoteLoad (url, hasCallback) {
    return createScript(url)
    function createScript (url) {
      var scriptElement = document.createElement('script')
      document.body.appendChild(scriptElement)
      var promise = new Promise((resolve, reject) => {
        scriptElement.addEventListener('load', e => {
          removeScript(scriptElement)
          if (!hasCallback) {
            resolve(e)
          }
        }, false)
  
        scriptElement.addEventListener('error', e => {
          removeScript(scriptElement)
          reject(e)
        }, false)
  
        if (hasCallback) {
          window.____callback____ = function () {
            resolve()
            window.____callback____ = null
          }
        }
      })
  
      if (hasCallback) {
        url += '&callback=____callback____'
      }
  
      scriptElement.src = url
  
      return promise
    }
  
    /**
     * 移除script标签
     * @param url script dom
     */
    function removeScript (url) {
      let scripts = document.getElementsByTagName('script')
      for (let bb of scripts) {
        if (bb.src.indexOf(url) > -1) {
          document.getElementsByTagName('head')[0].removeChild(bb)
        }
      }
    }
  }