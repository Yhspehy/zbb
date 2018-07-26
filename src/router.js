import Vue from 'vue';
import Router from 'vue-router';
import SubAdd from './views/sub/Add.vue';
import SubEdit from './views/sub/Edit.vue';
import Home from './views/home/Index.vue';
import Recommend from './views/home/Recommend.vue';
import HighLights from './views/home/HighLights.vue';
import League from './views/home/League.vue';
import News from './views/news/News.vue';
import Schedule from './views/schedule/Index.vue';
import Community from './views/community/Index.vue';
import Profile from './views/profile/Index.vue';
import About from './views/About.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
    base: __dirname,
    routes: [
        {
            path: '/subadd',
            name: 'subAdd',
            component: SubAdd
        },
        {
            path: '/subedit',
            name: 'subEdit',
            component: SubEdit
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'recommend',
                    name: 'recommend',
                    component: Recommend
                },
                {
                    path: 'highlights',
                    name: 'highLights',
                    component: HighLights
                },
                {
                    path: 'league/:league_id',
                    name: 'league',
                    component: League
                },
                {
                    path: '/',
                    redirect: 'recommend'
                }
            ]
        },
        {
            path: 'league/:league_id/detail/:detail_id',
            name: 'detail',
            component: Detail
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule
        },
        {
            path: '/community',
            name: 'community',
            component: Community
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },

        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});
