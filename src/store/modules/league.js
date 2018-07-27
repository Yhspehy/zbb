import { getLeagueList } from '@/Api/subPage';
import { UPDATE_LEAGUELIST, UPDATE_SUBLEAGUELIST, UPDATE_UNSUBLEAGUELIST } from '@/store/mutation-types';
import { saveToLocal } from '@/assets/js/localstore';
<<<<<<< Updated upstream
import store from '..';
import { loadFromLocal } from '../../assets/js/localstore';
=======
import { loadFromLocal } from '@/assets/js/localstore';
>>>>>>> Stashed changes
const league = {
    namespaced: true,
    state: {
        leagueList: undefined,
        subLeagueList: undefined,
        unSubLeagueList: undefined
    },
    mutations: {
        [UPDATE_LEAGUELIST](state, payload) {
            state.leagueList = [...payload];
            saveToLocal('leagueList', [...payload]);
        },
        [UPDATE_SUBLEAGUELIST](state, payload) {
            state.subLeagueList = [...payload];
            saveToLocal('subLeagueList', [...payload]);
        },
        [UPDATE_UNSUBLEAGUELIST](state, payload) {
            state.unSubLeagueList = [...payload];
            saveToLocal('unSubLeagueList', [...payload]);
        }
    },
    actions: {
<<<<<<< Updated upstream
        async GetLeagueList({ commit, rootGetters }) {
            return new Promise((resolve, reject) => {
                getLeagueList()
                    .then(res => {
                        if (res.data.status) {
                            commit('UPDATE_LEAGUELIST', res.data.data);
                            resolve(rootGetters.leagueList);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        async GetSubLeagueList({ commit, dispatch, rootGetters }) {
=======
        async GetLeagueList({ commit }) {
            let res = await getLeagueList().catch(err => {
                console.log(err);
            });
            if (res.data.status) {
                commit('UPDATE_LEAGUELIST', res.data.data);
            }
        },
        async GetSubLeagueList({ commit, dispatch, state }) {
>>>>>>> Stashed changes
            if (window.localStorage.hasOwnProperty('subLeagueList')) {
                commit('UPDATE_SUBLEAGUELIST', loadFromLocal('subLeagueList'));
            } else {
                await dispatch('GetLeagueList').catch(err => {
                    console.log(err);
                });
                commit('UPDATE_SUBLEAGUELIST', state.leagueList);
            }
        },

<<<<<<< Updated upstream
        EditSubLeagueList({ commit, rootGetters }, payload) {
            console.log(payload);
            return new Promise((resolve, reject) => {
                commit('UPDATE_SUBLEAGUELIST', payload.subList);
                commit('UPDATE_UNSUBLEAGUELIST', payload.unSubList);
                resolve(rootGetters.subLeagueList);
            });
=======
        EditSubLeagueList({ commit }, payload) {
            commit('UPDATE_SUBLEAGUELIST', payload.subList);
            commit('UPDATE_UNSUBLEAGUELIST', payload.unSubList);
>>>>>>> Stashed changes
        }
    }
};
export default league;
