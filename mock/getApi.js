const path = require('path');

const getApi = {
    '/mock/login': path.resolve(__dirname, 'login/login.json'),
    '/mock/subPage/leagueList': path.resolve(__dirname, 'subPage/leagueList.json'),
    '/mock/schedule/popularList': path.resolve(__dirname, 'schedule/popularList.json')
};

module.exports = getApi;
