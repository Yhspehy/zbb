const path = require('path');

const getApi = {
    '/mock/login': path.resolve(__dirname, 'login/login.json'),
    '/mock/subPage/leagueList': path.resolve(__dirname, 'subPage/leagueList.json'),
    '/mock/home/recommend/liveTrail': path.resolve(__dirname, 'home/recommend/liveTrail.json'),
    '/mock/home/recommend/pointNews': path.resolve(__dirname, 'home/recommend/pointNews.json'),
    '/mock/home/recommend/focusList': path.resolve(__dirname, 'home/recommend/focusList.json'),
    '/mock/home/recommend/newsList': path.resolve(__dirname, 'home/recommend/newsList.json'),
    '/mock/home/recommend/hotGameCount': path.resolve(__dirname, 'home/recommend/hotGameCount.json'),
    '/mock/schedule/popularList': path.resolve(__dirname, 'schedule/popularList.json'),
    '/mock/schedule/popularListBefore': path.resolve(__dirname, 'schedule/popularListBefore.json'),
    '/mock/schedule/popularListAfter': path.resolve(__dirname, 'schedule/popularListAfter.json'),
    '/mock/schedule/groupPic': path.resolve(__dirname, 'schedule/groupPic.json'),
    '/mock/schedule/monthList': path.resolve(__dirname, 'schedule/monthList.json'),
    '/mock/schedule/followList': path.resolve(__dirname, 'schedule/popularList.json'),
    '/mock/schedule/rank/team/:id': path.resolve(__dirname, 'schedule/teamRank.json'),
    '/mock/schedule/rank/player/:id': path.resolve(__dirname, 'schedule/playerRank.json'),
    '/mock/schedule/playoff/:id': path.resolve(__dirname, 'schedule/playoff.json'),
    '/mock/live/review/:id': path.resolve(__dirname, 'live/review.json'),
    '/mock/live/hotComments/:id': path.resolve(__dirname, 'live/hotComments.json'),
    '/mock/live/liveRoom/:id': path.resolve(__dirname, 'live/liveRoom.json'),
    '/mock/live/quizList/:id': path.resolve(__dirname, 'live/quizList.json'),
    '/mock/live/stats/1': path.resolve(__dirname, 'live/stats.json'),
    '/mock/live/stats/2': path.resolve(__dirname, 'live/footballStats.json'),
    '/mock/addressResult': path.resolve(__dirname, 'addressResult.json'),
    '/mock/news/newInfo/:id': path.resolve(__dirname, 'news/newInfo.json'),
    '/mock/community/recommend/swiper': path.resolve(__dirname, 'home/recommend/focusList.json'),
    '/mock/community/recommend/list': path.resolve(__dirname, 'community/recommendList.json'),
    '/mock/community/circle/all': path.resolve(__dirname, 'community/circle.json')
};

module.exports = getApi;
