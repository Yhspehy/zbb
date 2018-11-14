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
        'js/pages/news/index.vue',
        'js/pages/comments/index.vue',
        'js/pages/schedule/index.vue',
        'js/pages/schedule/popular.vue',
        'js/pages/schedule/match.vue',
        'js/pages/schedule/follow.vue',
        'js/pages/live/index.vue',
        'js/pages/community/index.vue',
        'js/pages/community/recommend.vue',
        'js/pages/community/circle.vue',
        'js/pages/community/activity.vue',
        'js/pages/profile/index.vue',
        'js/pages/profile/setting.vue',
        'js/pages/profile/myself.vue',
        'js/pages/profile/push.vue',
        'js/pages/profile/join.vue',
        'js/pages/profile/suggestion.vue',
        'js/pages/profile/problem.vue',
        'js/pages/profile/message.vue',
        'js/pages/profile/about.vue'
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
        'pwd': '/Users/yc/Project/zbb/eros-zbb/eros-diff-folder',
        'proxy': 'http://192.168.1.7:3001/static/dist/js/'
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
