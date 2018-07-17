import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import {
    request,
    setVm
} from './Api/request.js'

Vue.prototype.$axios = request
Vue.config.productionTip = false;

let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

setVm(vm);