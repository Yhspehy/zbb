import { getLeagueList } from '@/Api/subPage';
import { UPDATE_LEAGUELIST, UPDATE_SUBLEAGUELIST, UPDATE_UNSUBLEAGUELIST } from '@/store/mutation-types';
import { saveToLocal } from '@/assets/js/localstore';
import { loadFromLocal } from '@/assets/js/localstore';
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
        async GetLeagueList({ commit }) {
            let res = await getLeagueList().catch(err => {
                console.log(err);
            });
            if (res.data.status) {
                commit('UPDATE_LEAGUELIST', res.data.data);
            }
        },
        async GetSubLeagueList({ commit, dispatch, state }) {
            if (window.localStorage.hasOwnProperty('subLeagueList')) {
                commit('UPDATE_SUBLEAGUELIST', loadFromLocal('subLeagueList'));
            } else {
                await dispatch('GetLeagueList').catch(err => {
                    console.log(err);
                });
                commit('UPDATE_SUBLEAGUELIST', state.leagueList);
            }
        },

        EditSubLeagueList({ commit }, payload) {
            commit('UPDATE_SUBLEAGUELIST', payload.subList);
            commit('UPDATE_UNSUBLEAGUELIST', payload.unSubList);
        }
    }
};
export default league;
