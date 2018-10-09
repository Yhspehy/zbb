export function copy(el) {
    var copyText = document.querySelector(el);
    var textArea = document.createElement('textarea');
    textArea.value = copyText.textContent;
    textArea.style.position = 'fixed';
    textArea.style.top = '-1000px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
    return true;
}

let startX = -1;
let vue = null;

export function SafariSlideLeftTwiceTransitionAddLis(vm) {
    if (!vue) vue = vm;
    document.addEventListener('touchstart', watchTouchStart);
    document.addEventListener('touchend', watchTouchEnd);
}

export function SafariSlideLeftTwiceTransitionRemoveLis() {
    document.removeEventListener('touchstart', watchTouchStart);
    document.removeEventListener('touchend', watchTouchEnd);
}

function watchTouchStart(e) {
    console.log('touchstart');
    startX = e.pageX < 34 ? e.pageX : -1;
}

function watchTouchEnd(e) {
    if (startX > -1 && e.pageX < 0) {
        console.log('touchend');
        const width = window.screen.width;
        const dis = width + e.pageX - startX - 16;
        if (dis > width / 2) {
            vue.$store.commit('profile/SET_TRANSITION', false);
        }
    }
}

/**
 *
 * 下拉刷新
 * 因为better-scroll的下拉刷新有些问题，而且scroll的时候也会出现部分问题
 * 所以先写一个原生的，体验也好一点
 *
 * 参数：
 * parent 父元素的id或者clcxpass
 * el     选中的容器的id或者class
 * re     刷新div的id或者class
 *
 * refreshHeight   超过多少高度就可以释放刷新
 * status 状态 0:下拉来刷新  1:释放了就可以刷新  2:已经释放，正在刷新
 *        值存在status.value中
 *        在使用的组件中监听status.value来切换div即可
 *        状态为2的时候要手动设置过渡效果
 *
 * bottom  re相对container的-top值，不建议修改
 *
 *
 * 使用说明：
 *   参照community/recommend
 *   设置好那几个.refresh和.refreshText
 *   监听status.value，当status.value为2的时候重新获取数据
 */

export function slideRefresh(options) {
    const parent = document.querySelector(options.parent);
    const container = document.querySelector(options.el);
    const re = document.querySelector(options.re);
    // re的原始高度
    const originReHeight = re.offsetHeight;
    const refreshHeight = options.refreshHeight || 60;
    const bottom = options.bottom || window.screen.width / 50;
    // let startY = 0;
    // 手指滑动距离
    let dis = 0;
    // 固定parent
    let top = 0;
    // 判断是否在滚动刷新条
    let isScroll = false;

    function touchstart() {
        // startY = e.pageY;
        container.style['transition'] = 'transform 0s';
    }

    function touchmove(e) {
        isScroll = document.body.scrollTop < 0;
        if (document.body.scrollTop < 0) {
            dis = -document.body.scrollTop;
        }
        if (parent.scrollTop + parent.clientHeight > container.scrollHeight) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (isScroll) {
            // dis = (e.pageY - startY) / 2;
            re.style.opacity = dis >= re.offsetHeight + 20 ? 1 : dis / (re.offsetHeight + 20);
            if (!top) {
                top = parent.offsetTop;
                parent.style.position = 'fixed';
                parent.style.top = top + 'px';
            }

            if (dis > originReHeight - bottom) {
                re.style.height = dis + bottom + 'px';
            }

            container.style['transform'] = 'translate(0, ' + dis + 'px)';
            if (dis > refreshHeight) {
                options.status.value = 1;
            }
            e.preventDefault();
        } else {
            dis = 0;
            // startY = 0;
            re.style.opacity = 0;
            top = 0;
            parent.style.position = '';
            parent.style.top = '';
            isScroll = false;
            options.status.value = 0;
        }
    }

    function touchend() {
        if (isScroll) {
            if (dis > refreshHeight) {
                options.status.value = 2;
            } else {
                re.style.opacity = 0;
                container.style['transition'] = 'transform 0.6s ease';
                container.style['transform'] = 'translate(0, 0px)';
            }
            window.scrollTo(0, 0);
            dis = 0;
            // startY = 0;
            top = 0;
            parent.style.position = '';
            parent.style.top = '';
            isScroll = false;
        }
    }

    function init() {
        container.addEventListener('touchstart', touchstart);
        container.addEventListener('touchmove', touchmove);
        container.addEventListener('touchend', touchend);
    }

    function destroy() {
        container.removeEventListener('touchstart', touchstart);
        container.removeEventListener('touchmove', touchmove);
        container.removeEventListener('touchend', touchend);
    }

    return {
        isScroll,
        init,
        destroy
    };
}
