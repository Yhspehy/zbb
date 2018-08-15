import { getLiveTrail, getFocusList, getHotGameCount } from '@/Api/home';
const home = {
    namespaced: true,

    state: {
        homeFooter: '',
        liveTrailList: [],
        focusList: [],
        hotGameCount: 0
    },

    mutations: {
        SET_HOMEFOOTER: (state, name) => {
            state.homeFooter = name;
        },
        GET_LIVETRAIL: (state, payload) => {
            state.liveTrailList = [...payload];
        },
        GET_FOCUS: (state, payload) => {
            state.focusList = [...payload];
        },
        GET_HOTGAMECOUNT: (state, payload) => {
            state.hotGameCount = payload;
        }
    },

    actions: {
        async GetLiveTrail({ commit, state }) {
            let res = await getLiveTrail().catch(err => {
                console.log(err);
            });
            commit('GET_LIVETRAIL', res.data.data);
            return state.liveTrailList;
        },
        async GetFocusList({ commit, state }) {
            let res = await getFocusList().catch(err => {
                console.log(err);
            });
            commit('GET_FOCUS', res.data.data);
            return state.focusList;
        },
        async GetHotGameCount({ commit, state }) {
            let res = await getHotGameCount().catch(err => {
                console.log(err);
            });
            commit('GET_HOTGAMECOUNT', res.data.data);
            return state.hotGameCount;
        }
    }
};

export default home;
