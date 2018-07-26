const path = require('path');

const postApi = {
    '/mock/reg': path.resolve(__dirname, 'login/reg.json'),
    '/mock/subPage/leagueList': path.resolve(__dirname, 'subPage/leagueList.json')
}

module.exports = postApi;