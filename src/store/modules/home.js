const home = {
    namespaced: true,

    state: {
        homeFooter: ''
    },

    mutations: {
        SET_HOMEFOOTER: (state, name) => {
            state.homeFooter = name;
        }
    },

    actions: {}
};

export default home;
