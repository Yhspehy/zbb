import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './Utils/toast/toast';
import Dialog from './Utils/dialog/dialog';

import { request, setVm } from './Api/request';
import C_Alert from './Utils/Alert';
import moment from 'moment';

Vue.prototype.$axios = request;
Vue.prototype.$moment = moment;
Vue.prototype.$C_Alert = C_Alert;
Vue.config.productionTip = false;
Vue.use(Toast);
Vue.use(Dialog);
let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

setVm(vm);
