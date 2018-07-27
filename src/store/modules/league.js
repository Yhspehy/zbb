import { getLeagueList } from '@/Api/subPage';
import { UPDATE_LEAGUELIST, UPDATE_SUBLEAGUELIST, UPDATE_UNSUBLEAGUELIST } from '@/store/mutation-types';
import { saveToLocal } from '@/assets/js/localstore';
import store from '..';
import { loadFromLocal } from '../../assets/js/localstore';
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
            //saveToLocal('leagueList', payload);
        },
        [UPDATE_SUBLEAGUELIST](state, payload) {
            state.subLeagueList = [...payload];
            //saveToLocal('subLeagueList', payload);
        },
        [UPDATE_UNSUBLEAGUELIST](state, payload) {
            state.unSubLeagueList = [...payload];
            //saveToLocal('unSubLeagueList', payload);
        }
    },
    actions: {
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
            if (window.localStorage.hasOwnProperty('subLeagueList')) {
                commit('UPDATE_SUBLEAGUELIST', loadFromLocal('subLeagueList'));
            } else {
                await dispatch('GetLeagueList');
                saveToLocal('subLeagueList', rootGetters.leagueList);
                commit('UPDATE_SUBLEAGUELIST', rootGetters.leagueList);
            }
        },

        EditSubLeagueList({ commit, rootGetters }, payload) {
            console.log(payload);
            return new Promise((resolve, reject) => {
                commit('UPDATE_SUBLEAGUELIST', payload.subList);
                commit('UPDATE_UNSUBLEAGUELIST', payload.unSubList);
                resolve(rootGetters.subLeagueList);
            });
        }
    }
};
export default league;
