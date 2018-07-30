import Toast from './Toast.vue';
var plugin = {};

plugin.install = function(Vue, options = {}) {
    const ToastController = Vue.extend(Toast);
    ToastController.prototype.close = function() {
        this.visiable = false;
    };
    Vue.prototype.$toast = (option = {}) => {
        var instance = new ToastController().$mount(document.createElement('div'));
        let duration = option.duration || options.duration || 2000;
        instance.message = typeof option === 'string' ? option : option.message;
        document.body.appendChild(instance.$el);
        setTimeout(function() {
            instance.close();
        }, duration);
    };
};

export default plugin;
