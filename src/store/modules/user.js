import { loginByUserName } from '@/Api/user';

const user = {
    namespaced: true,

    state: {
        username: '',
        token: ''
    },

    mutations: {
        SET_USERNAME: (state, username) => {
            state.username = username;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },

    actions: {
        LoginByUsername({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginByUserName(userInfo.username, userInfo.password)
                    .then(res => {
                        commit('SET_USERNAME', userInfo.username);
                        commit('SET_TOKEN', res.token);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};

export default user;
