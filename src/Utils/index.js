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
