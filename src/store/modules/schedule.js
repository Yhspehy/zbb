import {
    getPopularList,
    getPopularListBefore,
    getPopularListAfter,
    getGroupPic,
    getMonthList,
    getFollowList,
    getTeamRank,
    getPlayerRank,
    getPlayoff
} from '@/Api/schedule';
import cloneDeep from 'lodash/cloneDeep';

const schedule = {
    namespaced: true,

    state: {
        chosenNav: 'schedule_popular',
        popularList: {},
        groupPic: {},
        followList: {},
        monthList: {},
        matchLeagueName: '',
        teamRank: {},
        playerRank: {}
    },

    mutations: {
        SET_CHOSENNAV: (state, name) => {
            state.chosenNav = name;
        },
        SET_POPULARLIST: (state, { data, type }) => {
            if (type === 'before') {
                state.popularList = Object.assign({}, data, state.popularList);
            }
            if (type === 'after') {
                state.popularList = Object.assign({}, state.popularList, data);
            }
            if (type === 'now') {
                state.popularList = Object.assign({}, data);
            }
        },
        SET_GROUPPIC: (state, list) => {
            state.groupPic = list;
        },
        SET_FOLLOWLIST: (state, list) => {
            state.followList = list;
        },
        SET_MONTHLIST: (state, data) => {
            let str = `${data.params.year}-${data.params.month}`;
            if (state.monthList[str]) return;
            state.monthList[str] = cloneDeep(data.list);
        },
        SET_MATCHLEAGUENAME: (state, name) => {
            state.matchLeagueName = name;
        },
        SET_TEAMRANK: (state, data) => {
            state.teamRank = data;
        },
        SET_PLAYERRANK: (state, data) => {
            state.playreRank = data;
        }
    },

    actions: {
        async GetPopularList({ commit, state }, { time, type }) {
            //测试
            let res = undefined;
            if (type === 'now') {
                res = await getPopularList({
                    params: {
                        time,
                        type
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else if (type === 'before') {
                res = await getPopularListBefore({
                    params: {
                        time,
                        type
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else if (type === 'after') {
                res = await getPopularListAfter({
                    params: {
                        time,
                        type
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
            commit('SET_POPULARLIST', {
                data: res.data.data,
                type
            });
            return state.popularList;
            // return new Promise((resolve, reject) => {
            //     getPopularList({
            //         params: {
            //             time,
            //             type
            //         }
            //     })
            //         .then(res => {
            //             commit('SET_POPULARLIST', res.data.data);
            //             resolve(res);
            //         })
            //         .catch(error => {
            //             reject(error);
            //         });
            // });
        },
        GetGroupPic({ commit }) {
            return new Promise((resolve, reject) => {
                getGroupPic()
                    .then(res => {
                        commit('SET_GROUPPIC', res.data.data);
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
        GetMonthList({ commit, state }, params) {
            return new Promise((resolve, reject) => {
                if (state.monthList[`${params.year}-${params.month}`]) {
                    resolve(state.monthList[`${params.year}-${params.month}`]);
                } else {
                    getMonthList(params)
                        .then(res => {
                            commit('SET_MONTHLIST', {
                                params: params,
                                list: res.data.data
                            });
                            resolve(res.data.data);
                        })
                        .catch(error => {
                            reject(error);
                        });
                }
            });
        },
        GetTeamRank({ commit }, id) {
            return new Promise((resolve, reject) => {
                getTeamRank(id)
                    .then(res => {
                        commit('SET_TEAMRANK', res.data.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        GetPlayerRank({ commit }, id) {
            return new Promise((resolve, reject) => {
                getPlayerRank(id)
                    .then(res => {
                        commit('SET_PLAYERRANK', res.data.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        GetPlayoff({ commit }, id) {
            return new Promise((resolve, reject) => {
                getPlayoff(id)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        console.log(commit);
                        reject(error);
                    });
            });
        }
    }
};

export default schedule;
