const fs = require('fs');
const getApi = require('./mock/getApi');
const postApi = require('./mock/postApi');


console.log('getApi:');
console.log(getApi);
console.log();
console.log('postApi:');
console.log(postApi);
console.log();


module.exports = {
    // pages: {
    //     index: {
    //         title: '直播吧'
    //     }
    // },
    /**
     *
     * devServer相关配置
     * https://cli.vuejs.org/config/#devserver
     *
     */
    devServer: {
        // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
        proxy: {
            '/api': {
                target: '<url>', // target host
                ws: true, // proxy websockets
                changeOrigin: true // needed for virtual hosted sites
            }
        },
        before: function (app) {
            Object.keys(getApi).forEach(function (url) {
                app.get(url, function (req, res) {
                    fs.readFile(getApi[url], 'utf-8', (err, data) => {
                        if (err) return console.log(err)
                        let json = JSON.parse(data);
                        res.json(json)
                    })
                })
            })
            Object.keys(postApi).forEach(function (url) {
                app.post(url, function (req, res) {
                    fs.readFile(postApi[url], 'utf-8', (err, data) => {
                        if (err) return console.log(err)
                        let json = JSON.parse(data);
                        res.json(json)
                    })
                })
            })
        }
    }
}