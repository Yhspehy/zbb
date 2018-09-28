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
 * parent 父元素的id或者class
 * el     选中的容器的id或者class
 * re     刷新div的id或者class
 *
 * status 状态 0:下拉来刷新  1:释放了就可以刷新  2:已经释放，正在刷新
 *        status是一个数组，监听status[0]即可
 *
 */

export function slideRefresh(options) {
    const parent = document.querySelector(options.parent);
    const container = document.querySelector(options.el);
    const re = document.querySelector(options.re);
    let startY = 0;
    // 手指滑动距离
    let dis = 0;
    // 固定parent
    let top = 0;
    // 判断是否在滚动刷新条
    let isScroll = false;

    function touchstart(e) {
        startY = e.pageY;
        re.style.opacity = 1;
        container.style['transition'] = 'transform 0s';
    }

    function touchmove(e) {
        if (!isScroll) isScroll = document.body.scrollTop < 0;
        dis = e.pageY - startY;

        // 如果正常滚动，不是touch到slide组件的时候
        if (document.body.scrollTop < 0) {
            dis = -document.body.scrollTop;
        } else if (dis > 0 && document.body.scrollTop === 0) {
            // touch 到slide组件的时候
            isScroll = true;
        }
        if (isScroll && dis > 0) {
            if (!top) {
                top = parent.offsetTop;
                parent.style.position = 'fixed';
                parent.style.top = top + 'px';
            }

            if (dis < re.offsetHeight) {
                container.style['transform'] = 'translate(0, ' + dis + 'px)';
                if (dis > 60) {
                    options.status.splice(0, 1, 1);
                }
            }
        }
    }

    function touchend() {
        if (isScroll) {
            window.scrollTo(0, 0);
            dis = 0;
            startY = 0;
            re.style.opacity = 0;
            top = 0;
            parent.style.position = '';
            parent.style.top = '';
            container.style['transition'] = 'transform 0.6s ease';
            container.style['transform'] = 'translate(0, 0px)';
            isScroll = false;
            options.status.splice(0, 1, 2);
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
        dis,
        init,
        destroy
    };
}
