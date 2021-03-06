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

/*----------  评论  ----------*/
const Comments = () => import('@/views/comment/Comments');

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

/*----------  直播  ----------*/
const Live = () => import('@/views/live/Index');
const LiveRoom = () => import('@/views/live/LiveRoom');
const ChatRoom = () => import('@/views/live/ChatRoom');
const LiveQuiz = () => import('@/views/live/Quiz');
const LiveStats = () => import('@/views/live/Stats');
const LiveNews = () => import('@/views/live/News');
const LiveReview = () => import('@/views/live/Review');
const LiveHotComments = () => import('@/views/live/HotComments');

/*----------  社区  ----------*/
const Community = () => import('@/views/community/Index');
const CommunityRecommend = () => import('@/views/community/Recommend');
const CommunityCircle = () => import('@/views/community/Circle');
const CommunityActivity = () => import('@/views/community/Activity');

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
const ProfileSettingMessage = () => import('@/views/profile/Message');

/*----------  Auth  ----------*/
const Auth = () => import('@/views/auth/Index');
const Login = () => import('@/views/auth/Login');
const Register = () => import('@/views/auth/register/Index');
const Forget = () => import('@/views/auth/forget/Index');
const BindMobile = () => import('@/views/auth/BindMobile');

const About = () => import('@/views/About');
const Demo = () => import('@/views/Demo');

Vue.use(Router);

const router = new Router({
    // base: __dirname,
    // mode: 'history',
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
            path: '/comments',
            name: 'comments',
            component: Comments
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: Schedule,
            children: [
                {
                    path: 'match',
                    name: 'schedule_match',
                    component: ScheduleMatch,
                    meta: {
                        isScroll: true,
                        scrollHeight: 0
                    }
                },
                {
                    path: 'popular',
                    name: 'schedule_popular',
                    component: SchedulePopular,
                    meta: {
                        isScroll: true,
                        scrollHeight: 0
                    }
                },
                {
                    path: 'follow',
                    name: 'schedule_follow',
                    component: ScheduleFollow,
                    meta: {
                        isScroll: true,
                        scrollHeight: 0
                    }
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
            redirect: '/schedule/league/:league_id/match',
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
            path: '/live',
            name: 'live',
            component: Live,
            children: [
                {
                    path: 'liveRoom',
                    name: 'live_liveRoom',
                    component: LiveRoom
                },
                {
                    path: 'chatRoom',
                    name: 'live_chatRoom',
                    component: ChatRoom
                },
                {
                    path: 'news',
                    name: 'live_news',
                    component: LiveNews
                },
                {
                    path: 'stats',
                    name: 'live_stats',
                    component: LiveStats
                },
                {
                    path: 'quiz',
                    name: 'live_quiz',
                    component: LiveQuiz
                },
                {
                    path: 'review',
                    name: 'live_review',
                    component: LiveReview
                },
                {
                    path: 'hotComments',
                    name: 'live_hotComments',
                    component: LiveHotComments
                }
            ]
        },
        {
            path: '/community',
            name: 'community',
            component: Community,
            children: [
                {
                    path: 'recommend',
                    name: 'community_recommend',
                    component: CommunityRecommend
                },
                {
                    path: 'circle',
                    name: 'community_circle',
                    component: CommunityCircle
                },
                {
                    path: 'activity',
                    name: 'community_activity',
                    component: CommunityActivity
                }
            ]
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
                },
                {
                    path: 'message',
                    name: 'profile_setting_message',
                    component: ProfileSettingMessage
                }
            ]
        },
        {
            path: '/auth',
            name: 'auth',
            component: Auth,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register
                },
                {
                    path: 'forget',
                    name: 'forget',
                    component: Forget
                },
                {
                    path: 'bindmobile',
                    name: 'bindmobile',
                    component: BindMobile
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
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.meta.isScroll) {
                return {
                    x: 0,
                    y: to.meta.scrollHeight
                };
            }
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
