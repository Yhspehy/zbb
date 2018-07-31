import { getPopularList } from '@/Api/schedule';

const user = {
    namespaced: true,

    state: {
        popularList: {}
    },

    mutations: {
        SET_POPULARLIST: (state, list) => {
            state.popularList = list;
        }
    },

    actions: {
        GetPopularList({ commit }) {
            return new Promise((resolve, reject) => {
                getPopularList()
                    .then(res => {
                        commit('SET_POPULARLIST', res.data);
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
