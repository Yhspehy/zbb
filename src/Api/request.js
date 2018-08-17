import axios from 'axios';
import merge from 'lodash/merge';
let vm = null;

/*----------  设置vm，便于后面获取  ----------*/
export function setVm(Vm) {
    vm = Vm;
    console.log(vm);
}

/*----------  封装axios函数  ----------*/
export function request(url, options) {
    let baseUrl = '/';
    const token = Date.parse(new Date());
    // mock数据更改路径
    if (url.match(/^\/mock.*/)) {
        baseUrl = '';
    }

    const defaultOptions = {
        url: `${baseUrl}${url}`,
        method: 'get',
        timeout: 5000,
        params: {
            token: token
        }
    };

    const mergeOptions = merge(defaultOptions, options);

    return axios(mergeOptions).then(res => {
        if (!res.data.status) {
            // 500提示页
            if (res.data.message === 500) {
                // vm.$route.push({
                //     name: 'serverWrong'
                // });
            } else {
                // 错误信息弹出框
                // vm.$Message.error({
                //     content: res.data.message,
                //     duration: 2
                // });
            }
        } else {
            return res;
        }
    });
}
