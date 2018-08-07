import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import home from './modules/home';
import user from './modules/user';
import league from './modules/league';
import schedule from './modules/schedule.js';

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    modules: {
        home,
        user,
        league,
        schedule
    }
});
