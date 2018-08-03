import { getPopularList, getMonthList, getFollowList } from '@/Api/schedule';
import cloneDeep from 'lodash/cloneDeep';

const user = {
    namespaced: true,

    state: {
        chosenNav: '热门',
        popularList: {},
        followList: {},
        calendarList: [],
        monthList: {}
    },

    mutations: {
        SET_CHOSENNAV: (state, name) => {
            state.chosenNav = name;
        },
        SET_POPULARLIST: (state, list) => {
            state.popularList = list;
        },
        SET_FOLLOWLIST: (state, list) => {
            state.followList = list;
        },
        SET_MONTHLIST: (state, data) => {
            let str = `${data.params.year}-${data.params.month}`;
            if (state.monthList[str]) return;
            state.monthList[str] = cloneDeep(data.list);
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
        GetFollowList({ commit }) {
            return new Promise((resolve, reject) => {
                getFollowList()
                    .then(res => {
                        commit('SET_FOLLOWLIST', res.data.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        GetMonthList({ commit }, params) {
            return new Promise((resolve, reject) => {
                getMonthList(params)
                    .then(res => {
                        commit('SET_MONTHLIST', {
                            params: params,
                            list: res.data.data
                        });
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
