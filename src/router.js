import Vue from 'vue';
import Router from 'vue-router';
/*----------  启动页  ----------*/
const SubAdd = () => import('@/views/sub/Add');
const SubEdit = () => import('@/views/sub/Edit');

/*----------  首页  ----------*/
const Home = () => import('@/views/home/Index');
const HomeRecommend = () => import('@/views/home/Recommend');
const HomeHighLights = () => import('@/views/home/HighLights');
const HomeLeague = () => import('@/views/home/League');

/*----------  新闻  ----------*/
const News = () => import('@/views/news/News');

/*----------  赛事  ----------*/
const Schedule = () => import('@/views/schedule/Index');
const ScheduleMatch = () => import('@/views/schedule/Match');
const SchedulePopular = () => import('@/views/schedule/Popular');
const ScheduleCalendar = () => import('@/views/schedule/Calendar');
const ScheduleFollow = () => import('@/views/schedule/Follow');
const ScheduleLeague = () => import('@/views/schedule/League/Index');
const ScheduleLeagueMatch = () => import('@/views/schedule/League/Match');
const ScheduleLeaguePlayoff = () => import('@/views/schedule/League/Playoff');
const ScheduleLeagueTeamRank = () => import('@/views/schedule/League/TeamRank');
const ScheduleLeaguePlayerRank = () => import('@/views/schedule/League/PlayerRank');

/*----------  社区  ----------*/
const Community = () => import('@/views/community/Index');

/*----------  我的  ----------*/
const Profile = () => import('@/views/profile/Index');
const ProfileSetting = () => import('@/views/profile/Setting');
const ProfileSettingIndex = () => import('@/views/profile/SettingIndex');
const ProfileSettingMyself = () => import('@/views/profile/Myself');
const ProfileSettingPush = () => import('@/views/profile/Push');
const ProfileSettingSuggestion = () => import('@/views/profile/Suggestion');
const ProfileSettingProblem = () => import('@/views/profile/Problem');
const ProfileSettingAbout = () => import('@/views/profile/About');
const ProfileSettingJoin = () => import('@/views/profile/Join');

const About = () => import('@/views/About');
const Demo = () => import('@/views/Demo');

// let routeslist = [];

// function importComponent(arr, parentPath) {
// arr.forEach(item => {
//     const result = {
//         path: `${parentPath}${item.path}`,
//         name: item.name
//         // component: resolve => require([`@/views${item.file}`, resolve])
//         // component: () => import(`@/views${item.file}`)
//     };
//     if (item.children) {
//         result.children = importComponent(item.children, `${result.path}/`);
//     }
//     routeslist.push(result);
// });
// console.log(parentPath);
// let ww = '@/views/sub/Add.vue';
// routeslist.push({
//     path: '/subadd',
//     name: 'subAdd',
//     component: () => import(ww)
// });
// }

// importComponent(list, '');

// console.log(routeslist);

// let arr = [
//     {
//         path: '/subadd',
//         name: 'subAdd',
//         component: import('@/views/sub/Add')
//     }
// ];

Vue.use(Router);

// const router = new Router({
//     mode: 'history',
//     routes: routeslist
// });

const router = new Router({
    // base: __dirname,
    mode: 'history',
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
            name: 'home',
            component: Home,
            redirect: '/home/recommend',
            children: [
                {
                    path: 'recommend',
                    name: 'home_recommend',
                    component: HomeRecommend
                },
                {
                    path: 'highlights',
                    name: 'home_highLights',
                    component: HomeHighLights
                },
                {
                    path: 'league/:league_id',
                    name: 'home_league',
                    component: HomeLeague
                }
            ]
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule,
            redirect: '/schedule/popular',
            children: [
                {
                    path: 'match',
                    name: 'schedule_match',
                    component: ScheduleMatch
                },
                {
                    path: 'popular',
                    name: 'schedule_popular',
                    component: SchedulePopular
                },
                {
                    path: 'follow',
                    name: 'schedule_follow',
                    component: ScheduleFollow
                }
            ]
        },
        {
            path: '/schedule/calendar',
            name: 'schedule_calendar',
            component: ScheduleCalendar
        },
        {
            path: '/schedule/league/:league_id',
            name: 'schedule_league',
            component: ScheduleLeague,
            children: [
                {
                    path: 'match',
                    name: 'schedule_league_match',
                    component: ScheduleLeagueMatch
                },
                {
                    path: 'playoff',
                    name: 'schedule_league_playoff',
                    component: ScheduleLeaguePlayoff
                },
                {
                    path: 'teamRank',
                    name: 'schedule_league_teamRank',
                    component: ScheduleLeagueTeamRank
                },
                {
                    path: 'playerRank',
                    name: 'schedule_league_playerRank',
                    component: ScheduleLeaguePlayerRank
                }
            ]
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
            path: '/setting',
            name: 'profile_setting',
            component: ProfileSetting,
            redirect: '/setting/index',
            children: [
                {
                    path: 'index',
                    name: 'profile_setting_index',
                    component: ProfileSettingIndex
                },
                {
                    path: 'myself',
                    name: 'profile_setting_myself',
                    component: ProfileSettingMyself
                },
                {
                    path: 'push',
                    name: 'profile_setting_push',
                    component: ProfileSettingPush
                },
                {
                    path: 'suggestion',
                    name: 'profile_setting_suggestion',
                    component: ProfileSettingSuggestion
                },
                {
                    path: 'problem',
                    name: 'profile_setting_problem',
                    component: ProfileSettingProblem
                },
                {
                    path: 'about',
                    name: 'profile_setting_about',
                    component: ProfileSettingAbout
                },
                {
                    path: 'join',
                    name: 'profile_setting_join',
                    component: ProfileSettingJoin
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        //demo for dialog toast ...
        {
            path: '/demo',
            name: 'demo',
            component: Demo
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
