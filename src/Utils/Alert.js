/**
 *
 * 全局组件Alert
 * this.$C_Alert.open(message) 开启
 * this.$C_Alert.close() 关闭
 *
 */

import Alert from '@/components/Alert.vue';
import Vue from 'vue';

Alert.newInstance = () => {
    const Instance = new Vue({
        render(h) {
            return h(Alert);
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const alert = Instance.$children[0];

    return {
        open(content) {
            alert.open(content);
        },
        close() {
            alert.close();
        }
    };
};

let alertInstance;

function getAlertInstance(type, content = '') {
    alertInstance = alertInstance || Alert.newInstance();

    if (type === 'open') {
        alertInstance.open(content);
    } else {
        alertInstance.close();
    }
}

export default {
    open(content) {
        return getAlertInstance('open', content);
    },
    close() {
        return getAlertInstance('close');
    }
};
