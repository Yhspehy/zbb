const path = require('path');

const getApi = {
    '/mock/login': path.resolve(__dirname, 'login/login.json')
}

module.exports = getApi;