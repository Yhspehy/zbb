export function getBaseURL (jsFile) {
    const bundleUrl = weex.config.bundleUrl
    let host = ''
    let path = ''
    let nativeBase
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist'
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    } else {
        const matches = /\/\/([^/]+?)\//.exec(bundleUrl)
        const matchFirstPath = /\/\/[^/]+\/([^/\s]+)\//.exec(bundleUrl)
        if (matches && matches.length >= 2) {
            host = matches[1]
        }
        if (matchFirstPath && matchFirstPath.length >= 2) {
            path = matchFirstPath[1]
        }
        nativeBase = 'http://' + host + '/'
    }
    // const h5Base = './index.html?page=./'
    // in Native
    let base = nativeBase
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
    // check if in weexpack project
        base = nativeBase + jsFile + '.html'
    // if (path === 'web' || path === 'dist') {
    //   base = h5Base + '/dist/'
    // } else {
    //   base = h5Base + ''
    // }
    } else {
        base = nativeBase + (path ? path + '/' : '') + jsFile + '.js'
    }
    return base
}
