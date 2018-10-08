const fs = require('fs');
const path = require('path');
//const path = require('path')
const getApi = require('./mock/getApi');
const postApi = require('./mock/postApi');

// console.log('getApi:');
// console.log(getApi);
// console.log();
// console.log('postApi:');
// console.log(postApi);
// console.log();

module.exports = {
    baseUrl: './',
    outputDir: './cordova/www',
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
    // cli已经配置了，source-map用于生产环境中
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置...
    //     } else {
    //         // 为开发环境修改配置...
    //         'source-map';
    //     }
    // },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/mixins.scss";`
            },
            postcss: {
                plugins: () => [
                    require('postcss-px-to-viewport')({
                        viewportWidth: 750,
                        viewportHeight: 1334,
                        unitPrecision: 3,
                        viewportUnit: 'vw',
                        selectorBlackList: ['.ignore'],
                        minPixelValue: 1,
                        mediaQuery: false
                    })
                ]
            }
        }
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
        proxy: {
            '/api': {
                target: '<url>', // target host
                ws: true, // proxy websockets
                changeOrigin: true // needed for virtual hosted sites
            }
        },
        hot: true,
        before: function(app) {
            Object.keys(getApi).forEach(function(url) {
                app.get(url, function(req, res) {
                    fs.readFile(getApi[url], 'utf-8', (err, data) => {
                        if (err) return console.log(err);
                        let json = JSON.parse(data);
                        res.json(json);
                    });
                });
            });
            Object.keys(postApi).forEach(function(url) {
                app.post(url, function(req, res) {
                    fs.readFile(postApi[url], 'utf-8', (err, data) => {
                        if (err) return console.log(err);
                        let json = JSON.parse(data);
                        res.json(json);
                    });
                });
            });
        }
    }
};
