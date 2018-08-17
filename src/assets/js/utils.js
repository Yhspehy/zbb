/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
const urlParse = function() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=12345', '&a=b]
    if (arr) {
        arr.forEach(item => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};

const hello = function() {
    let greetings = '';
    let now = new Date();
    let hour = now.getHours();
    if (hour < 6) {
        greetings = '凌晨好, ';
    } else if (hour < 9) {
        greetings = '早上好, ';
    } else if (hour < 12) {
        greetings = '上午好, ';
    } else if (hour < 14) {
        greetings = '中午好, ';
    } else if (hour < 17) {
        greetings = '下午好, ';
    } else if (hour < 19) {
        greetings = '傍晚好, ';
    } else if (hour < 22) {
        greetings = '晚上好, ';
    } else {
        greetings = '夜里好, ';
    }
    return greetings;
};

export { urlParse, hello };
