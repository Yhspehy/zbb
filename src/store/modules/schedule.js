import { getPopularList, getMonthList } from '@/Api/schedule';

const user = {
    namespaced: true,

    state: {
        chosenNav: '热门',
        popularList: {},
        calendarList: []
    },

    mutations: {
        SET_POPULARLIST: (state, list) => {
            state.popularList = list;
        },
        SET_CHOSENNAV: (state, name) => {
            state.chosenNav = name;
        }
    },

    actions: {
        GetPopularList({ commit }) {
            return new Promise((resolve, reject) => {
                getPopularList()
                    .then(res => {
                        commit('SET_POPULARLIST', res.data.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        GetMonthList({ commit }, params) {
            return new Promise((resolve, reject) => {
                console.log(commit);
                getMonthList(params)
                    .then(res => {
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
