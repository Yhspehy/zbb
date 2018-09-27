const community = {
    namespaced: true,

    state: {
        chosenNav: 'community_recommend'
    },

    mutations: {
        SET_CHOSENNAV: (state, name) => {
            state.chosenNav = name;
        }
    },

    actions: {}
};

export default community;
