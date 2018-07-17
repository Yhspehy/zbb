import axios from 'axios';
let vm = null;

/*----------  设置vm，便于后面获取  ----------*/
export function setVm(Vm) {
    vm = Vm;
}



/*----------  封装axios函数  ----------*/
export function request(url, options) {
    let baseUrl = '/';

    // mock数据更改路径
    if (url.match(/^\/mock.*/)) {
        baseUrl = '.'
    }

    const defaultOptions = {
        method: 'get',
        url: `${baseUrl}${url}`
    };

    const mergeOptions = {
        ...defaultOptions,
        ...options
    };

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