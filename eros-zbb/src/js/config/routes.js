// 这里的后缀都是 .js 因为打包出来的都是js文件，而不是.vue文件，我们要告诉客户端跳转那个js

//  这里的路径和dev.json路径的区别
//  pages里面配置的是路由跳转的地址，也就是dev生成的 dist文件夹下的js bundle路径 从dist/js开始
//  dev.json 的 exports 需要打包的js地址，填入src的需要被打包成js bundle的地址   从src开始

export default {
    // 'eros': {
    //     title: 'eros',
    //     url: '/pages/hello.js'
    // },
    'home': {
        url: '/pages/home/index.js'
    },
    'home.recommend': {
        url: '/pages/home/recommend.js'
    },
    'home.highlights': {
        url: '/pages/home/highlights.js'
    },
    'news': {
        title: '新闻详情',
        url: '/pages/news/index.js'
    },
    'comments': {
        title: '全部评论',
        url: '/pages/comments/index.js'
    },
    'schedule': {
        url: '/pages/schedule/index.js'
    },
    'schedule.popular': {
        url: '/pages/schedule/popular.js'
    },
    'schedule.match': {
        url: '/pages/schedule/match.js'
    },
    'schedule.follow': {
        url: '/pages/schedule/follow.js'
    },
    'schedule.league': {
        title: 'NBA',
        url: '/pages/schedule/league/index.js'
    },
    'live': {
        url: '/pages/live/index.js'
    },
    'community': {
        url: '/pages/community/index.js'
    },
    'community.recommend': {
        url: '/pages/community/recommend.js'
    },
    'community.cirlce': {
        url: '/pages/community/cirlce.js'
    },
    'community.activity': {
        url: '/pages/community/activity.js'
    },
    'profile': {
        url: '/pages/profile/index.js'
    },
    'profile.setting': {
        title: '设置',
        url: '/pages/profile/setting.js'
    },
    'profile.myself': {
        title: '个人信息',
        url: '/pages/profile/myself.js'
    },
    'profile.push': {
        title: '推送通知',
        url: '/pages/profile/push.js'
    },
    'profile.join': {
        title: '加入我们',
        url: '/pages/profile/join.js'
    },
    'profile.suggestion': {
        title: '意见反馈',
        url: '/pages/profile/suggestion.js'
    },
    'profile.problem': {
        title: '常见问题',
        url: '/pages/profile/problem.js'
    },
    'profile.message': {
        title: '系统消息',
        url: '/pages/profile/message.js'
    },
    'profile.about': {
        title: '关于我们',
        url: '/pages/profile/about.js'
    }
}
