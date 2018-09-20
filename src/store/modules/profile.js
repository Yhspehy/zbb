const profile = {
    namespaced: true,

    state: {
        transition: true
    },

    mutations: {
        SET_TRANSITION: (state, val) => {
            state.transition = val;
        }
    },

    actions: {}
};

export default profile;
