import { getLiveTrail, getFocusList, getHotGameCount, getNewsList } from '@/Api/home';
const home = {
    namespaced: true,

    state: {
        homeFooter: '',
        liveTrailList: [],
        focusList: [],
        newsListData: {
            newsList: [],
            updateCount: 0
        },
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
        },
        GET_NEWSLIST: (state, payload) => {
            // 下拉刷新默认只获取第一页新闻数据
            if (payload.page_index === 1) {
                state.newsListData.newsList = [...payload.data.news_list];
            } else {
                state.newsListData.newsList = [...state.newsListData.newsList, ...payload.data.news_list];
            }
            state.newsListData.updateCount = payload.data.update_count;
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
        },
        async GetNewsList({ commit, state }, { type_id, page_index }) {
            let res = await getNewsList({
                params: {
                    type_id,
                    page_index
                }
            }).catch(err => {
                console.log(err);
            });
            commit('GET_NEWSLIST', { data: res.data.data, page_index });
            return state.newsListData;
        }
    }
};

export default home;
