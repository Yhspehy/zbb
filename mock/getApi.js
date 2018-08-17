const path = require('path');

const getApi = {
    '/mock/login': path.resolve(__dirname, 'login/login.json'),
    '/mock/subPage/leagueList': path.resolve(__dirname, 'subPage/leagueList.json'),
    '/mock/schedule/popularList': path.resolve(__dirname, 'schedule/popularList.json'),
    '/mock/schedule/groupPic': path.resolve(__dirname, 'schedule/groupPic.json'),
    '/mock/schedule/monthList': path.resolve(__dirname, 'schedule/monthList.json'),
    '/mock/schedule/followList': path.resolve(__dirname, 'schedule/popularList.json'),
    '/mock/schedule/:id/rank/team': path.resolve(__dirname, 'schedule/teamRank.json'),
    '/mock/schedule/:id/rank/player': path.resolve(__dirname, 'schedule/playerRank.json'),
    '/mock/schedule/:id/playoff': path.resolve(__dirname, 'schedule/playoff.json'),
    '/mock/live/review/:id': path.resolve(__dirname, 'live/review.json'),
    '/mock/live/hotComments/:id': path.resolve(__dirname, 'live/hotComments.json'),
    '/mock/live/stats/:id': path.resolve(__dirname, 'live/stats.json'),
    '/mock/live/liveRoom/:id': path.resolve(__dirname, 'live/liveRoom.json')
};

module.exports = getApi;
