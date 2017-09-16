const canvas = document.getElementById('J_Canvas');
const ctx = canvas.getContext('2d');

function getWindowWidth() {
    return 'innerWidth' in window ? window.innerWidth : document.documentElement.offsetWidth;
}

function getWindowHeight() {
    return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
}

function updateCanvasSize() {
    canvas.width = getWindowWidth();
    canvas.height = getWindowHeight();
}

function addHandler(element, method, normal) {
    element.addEventListener(normal, method, false); // IE9, Chrome, Safari, Oper
}

function addResizeHandler() {
    addHandler(window, resizeHandler, 'resize');
}

function resizeHandler() {
    setTimeout(function () {
        updateCanvasSize();
    }, 350);
}

addResizeHandler();
updateCanvasSize();
