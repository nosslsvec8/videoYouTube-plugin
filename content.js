removeQuerySelector('.ytp-chrome-top');
removeQuerySelector('.ytp-gradient-top');
removeQuerySelector('.annotation.annotation-type-custom.iv-branding');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
    if (request === 'buttonClicked') {
        if (confirm(`Вы уверены что хотите удалить нижнюю панель видео?`)) {
            removeQuerySelector('.ytp-chrome-bottom');
            removeQuerySelector('.ytp-gradient-bottom');
            removeQuerySelector('.annotation.annotation-type-custom.iv-branding');
            removeQuerySelectorAll('.ytp-ce-element.ytp-ce-video.ytp-ce-element-show');
        }
    }
}

function removeQuerySelector(querySelector) {
    if (document.querySelector(querySelector)) {
        document.querySelector(querySelector).remove();
    }
}

function removeQuerySelectorAll(querySelector) {
    if (document.querySelectorAll(querySelector)) {
        document.querySelectorAll(querySelector).forEach(e => e.parentNode.removeChild(e));
    }
}