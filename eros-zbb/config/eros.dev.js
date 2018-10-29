// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'eslint': false,
    'webpackWarnings': false,
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        // 'js/pages/hello.vue',
        'js/pages/home/index.vue',
        'js/pages/home/recommend.vue',
        'js/pages/home/highlights.vue',
        'js/pages/schedule/index.vue',
        'js/pages/schedule/popular.vue',
        'js/pages/schedule/match.vue',
        'js/pages/schedule/follow.vue',
        'js/pages/community/index.vue',
        'js/pages/community/recommend.vue',
        'js/pages/community/circle.vue',
        'js/pages/community/activity.vue',
        'js/pages/profile/index.vue'
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
