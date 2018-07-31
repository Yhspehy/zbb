import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './components/toast/toast';

import { request, setVm } from './Api/request';
import moment from 'moment';

Vue.prototype.$axios = request;
Vue.prototype.$moment = moment;
Vue.config.productionTip = false;
Vue.use(Toast);
let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

setVm(vm);
