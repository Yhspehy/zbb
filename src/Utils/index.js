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
