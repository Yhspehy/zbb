import Dialog from './Dialog.vue';

const defaultOption = {
    html: false,
    type: 'confirm',
    title: '',
    message: '',
    okText: '确认',
    cancelText: '取消',
    visiable: true
};

let Plugin = function(Vue, globalOption) {
    this.Vue = Vue;
    this.instance = {};
    this.mounted = false;
    this.options = Object.assign({}, defaultOption, globalOption);
};

Plugin.prototype.alert = function(message = '', option = {}) {
    message && (option.message = message);
    return this.open('alert', option);
};

Plugin.prototype.confirm = function(message = '', option = {}) {
    message && (option.message = message);
    return this.open('confirm', option);
};

Plugin.prototype.open = function(type, option) {
    if (this.mounted === true) {
        return false;
    }
    this.initMount(type, option);
    return new Promise((resolve, reject) => {
        let okCallback = this.instance.onOk;
        let cancelCallback = this.instance.onCancel;
        this.instance.onOk = () => {
            okCallback();
            this.destroy();
            resolve('ok');
        };
        this.instance.onCancel = () => {
            cancelCallback();
            this.destroy();
            reject('cancel');
        };
    });
};

Plugin.prototype.destroy = function() {
    if (this.mounted) {
        let elem = this.instance.$el;
        this.instance.$destroy();
        this.instance.$off();
        elem.remove();
        this.mounted = false;
    }
};

Plugin.prototype.initMount = function(type, option) {
    let DialogConstructor = this.Vue.extend(Dialog);
    this.instance = new DialogConstructor().$mount(document.createElement('div'));
    this.instance.option = Object.assign({}, this.options, option);
    this.instance.option.type = type;
    document.body.appendChild(this.instance.$el);
    this.mounted = true;
};

Plugin.install = function(Vue, globalOption = {}) {
    Vue.prototype.$dialog = new Plugin(Vue, globalOption);
};

export default Plugin;
