import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './utils/toast/toast';
import Dialog from './utils/dialog/dialog';

import { request, setVm } from './Api/request';
// import C_Alert from './utils/Alert';
import moment from 'moment';

import clean from './directive/directive';
Vue.prototype.$axios = request;
Vue.prototype.$moment = moment;
Vue.prototype.$moment.locale('zh-cn');
// Vue.prototype.$C_Alert = C_Alert;
Vue.config.productionTip = false;

Vue.filter('moment', function(value, formatString = 'YYYY-MM-DD HH:mm:ss') {
    if (!value) return;
    return moment(value).format(formatString);
});

Vue.use(clean);
Vue.use(Toast);
Vue.use(Dialog);
let vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

setVm(vm);
