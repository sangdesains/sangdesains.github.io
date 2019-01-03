'use strict';
var _0xf04f = ["hostname", "location", "sangdesains.github.io", "totaly bajakan!!!", "http://sangdesains.blogspot.com/2014/07/jasa-pembuatan-hotspot-rt-rw-net-murah.html", "replace", '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>', '<div id="imghelp">drag and drop a QRCode here', "<br>or select a file", '<input type="file" onchange="handleFiles(this.files)"/>', "</div>", '<video id="v" autoplay></video>', "stopPropagation", "preventDefault", "dataTransfer", "files", "length", "URL", "getData", "decode", "onload", "width", "height", 
"clearRect", "result", "target", "readAsDataURL", "qr-canvas", "getElementById", "style", "px", "2d", "getContext", "drawImage", "log", "&quot;", "&gt;", "&lt;", "&amp;", "canvas", "createElement", "srcObject", "play", "File", "FileReader", "callback", "display", "mainbody", "inline", "innerHTML", '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>', '<br><p id="mp2">sorry your browser is not supported</p><br><br>', '<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>', 
"mediaDevices", "enumerateDevices", "kind", "videoinput", "back", "search", "toLowerCase", "label", "deviceId", "environment", ": ", " id = ", "forEach", "then", "no navigator.mediaDevices.enumerateDevices", "outdiv", "v", "getUserMedia", "catch", "webkitGetUserMedia", "", "opacity", "qrimg", "webcamimg", "qrfile", "dragenter", "addEventListener", "dragover", "drop"];
var gCtx = null;
var gCanvas = null;
var c = 0;
var stype = 0;
var gUM = false;
var webkit = false;
var moz = false;
var v = null;
var hname = window[_0xf04f[1]][_0xf04f[0]];
if (hname !== _0xf04f[2]) {
alert(_0xf04f[3]);
window[_0xf04f[1]][_0xf04f[5]](_0xf04f[4]);
}
var imghtml = _0xf04f[6] + _0xf04f[7] + _0xf04f[8] + _0xf04f[9] + _0xf04f[10] + _0xf04f[10];
var vidhtml = _0xf04f[11];
function dragenter(_0xd113xd$jscomp$0) {
_0xd113xd$jscomp$0[_0xf04f[12]]();
_0xd113xd$jscomp$0[_0xf04f[13]]();
}
function dragover(_0xd113xd$jscomp$1) {
_0xd113xd$jscomp$1[_0xf04f[12]]();
_0xd113xd$jscomp$1[_0xf04f[13]]();
}
function drop(_0xd113xd$jscomp$2) {
_0xd113xd$jscomp$2[_0xf04f[12]]();
_0xd113xd$jscomp$2[_0xf04f[13]]();
var _0xd113x10$jscomp$0 = _0xd113xd$jscomp$2[_0xf04f[14]];
var _0xd113x11$jscomp$0 = _0xd113x10$jscomp$0[_0xf04f[15]];
if (_0xd113x11$jscomp$0[_0xf04f[16]] > 0) {
handleFiles(_0xd113x11$jscomp$0);
} else {
if (_0xd113x10$jscomp$0[_0xf04f[18]](_0xf04f[17])) {
qrcode[_0xf04f[19]](_0xd113x10$jscomp$0[_0xf04f[18]](_0xf04f[17]));
}
}
}
function handleFiles(_0xd113x13$jscomp$0) {
var _0xd113x14$jscomp$0 = [];
var _0xd113x15$jscomp$0 = 0;
for (; _0xd113x15$jscomp$0 < _0xd113x13$jscomp$0[_0xf04f[16]]; _0xd113x15$jscomp$0++) {
var _0xd113x16$jscomp$0 = new FileReader;
_0xd113x16$jscomp$0[_0xf04f[20]] = function(_0xd113x17$jscomp$0) {
return function(_0xd113xd$jscomp$3) {
gCtx[_0xf04f[23]](0, 0, gCanvas[_0xf04f[21]], gCanvas[_0xf04f[22]]);
qrcode[_0xf04f[19]](_0xd113xd$jscomp$3[_0xf04f[25]][_0xf04f[24]]);
};
}(_0xd113x13$jscomp$0[_0xd113x15$jscomp$0]);
_0xd113x16$jscomp$0[_0xf04f[26]](_0xd113x13$jscomp$0[_0xd113x15$jscomp$0]);
}
}
function initCanvas(_0xd113x19$jscomp$0, _0xd113x1a$jscomp$0) {
gCanvas = document[_0xf04f[28]](_0xf04f[27]);
gCanvas[_0xf04f[29]][_0xf04f[21]] = _0xd113x19$jscomp$0 + _0xf04f[30];
gCanvas[_0xf04f[29]][_0xf04f[22]] = _0xd113x1a$jscomp$0 + _0xf04f[30];
gCanvas[_0xf04f[21]] = _0xd113x19$jscomp$0;
gCanvas[_0xf04f[22]] = _0xd113x1a$jscomp$0;
gCtx = gCanvas[_0xf04f[32]](_0xf04f[31]);
gCtx[_0xf04f[23]](0, 0, _0xd113x19$jscomp$0, _0xd113x1a$jscomp$0);
}
function captureToCanvas() {
if (stype != 1) {
return;
}
if (gUM) {
try {
gCtx[_0xf04f[33]](v, 0, 0);
try {
qrcode[_0xf04f[19]]();
} catch (e$jscomp$7) {
console[_0xf04f[34]](e$jscomp$7);
setTimeout(captureToCanvas, 500);
}
} catch (e$jscomp$8) {
console[_0xf04f[34]](e$jscomp$8);
setTimeout(captureToCanvas, 500);
}
}
}
function htmlEntities(_0xd113x1d$jscomp$0) {
return String(_0xd113x1d$jscomp$0)[_0xf04f[5]](/&/g, _0xf04f[38])[_0xf04f[5]](/</g, _0xf04f[37])[_0xf04f[5]](/>/g, _0xf04f[36])[_0xf04f[5]](/"/g, _0xf04f[35]);
}
function read(_0xd113x1f$jscomp$0) {
window[_0xf04f[1]] = _0xd113x1f$jscomp$0;
}
function isCanvasSupported() {
var _0xd113x21$jscomp$0 = document[_0xf04f[40]](_0xf04f[39]);
return !!(_0xd113x21$jscomp$0[_0xf04f[32]] && _0xd113x21$jscomp$0[_0xf04f[32]](_0xf04f[31]));
}
function success(_0xd113x23$jscomp$0) {
v[_0xf04f[41]] = _0xd113x23$jscomp$0;
v[_0xf04f[42]]();
gUM = true;
setTimeout(captureToCanvas, 500);
}
function error(error$jscomp$3) {
gUM = false;
return;
}
function load() {
if (isCanvasSupported() && window[_0xf04f[43]] && window[_0xf04f[44]]) {
initCanvas(800, 600);
qrcode[_0xf04f[45]] = read;
document[_0xf04f[28]](_0xf04f[47])[_0xf04f[29]][_0xf04f[46]] = _0xf04f[48];
setwebcam();
} else {
document[_0xf04f[28]](_0xf04f[47])[_0xf04f[29]][_0xf04f[46]] = _0xf04f[48];
document[_0xf04f[28]](_0xf04f[47])[_0xf04f[49]] = _0xf04f[50] + _0xf04f[51] + _0xf04f[52];
}
}
function setwebcam() {
var _0xd113x27$jscomp$0 = true;
if (navigator[_0xf04f[53]] && navigator[_0xf04f[53]][_0xf04f[54]]) {
try {
navigator[_0xf04f[53]][_0xf04f[54]]()[_0xf04f[66]](function(_0xd113x28$jscomp$0) {
_0xd113x28$jscomp$0[_0xf04f[65]](function(_0xd113x29$jscomp$0) {
if (_0xd113x29$jscomp$0[_0xf04f[55]] === _0xf04f[56]) {
if (_0xd113x29$jscomp$0[_0xf04f[60]][_0xf04f[59]]()[_0xf04f[58]](_0xf04f[57]) > -1) {
_0xd113x27$jscomp$0 = {
"deviceId" : {
"exact" : _0xd113x29$jscomp$0[_0xf04f[61]]
},
"facingMode" : _0xf04f[62]
};
}
}
console[_0xf04f[34]](_0xd113x29$jscomp$0[_0xf04f[55]] + _0xf04f[63] + _0xd113x29$jscomp$0[_0xf04f[60]] + _0xf04f[64] + _0xd113x29$jscomp$0[_0xf04f[61]]);
});
setwebcam2(_0xd113x27$jscomp$0);
});
} catch (e$jscomp$9) {
console[_0xf04f[34]](e$jscomp$9);
}
} else {
console[_0xf04f[34]](_0xf04f[67]);
setwebcam2(_0xd113x27$jscomp$0);
}
}
function setwebcam2(_0xd113x27$jscomp$1) {
console[_0xf04f[34]](_0xd113x27$jscomp$1);
if (stype == 1) {
setTimeout(captureToCanvas, 500);
return;
}
var _0xd113x2b$jscomp$0 = navigator;
document[_0xf04f[28]](_0xf04f[68])[_0xf04f[49]] = vidhtml;
v = document[_0xf04f[28]](_0xf04f[69]);
if (_0xd113x2b$jscomp$0[_0xf04f[53]][_0xf04f[70]]) {
_0xd113x2b$jscomp$0[_0xf04f[53]][_0xf04f[70]]({
video : _0xd113x27$jscomp$1,
audio : false
})[_0xf04f[66]](function(_0xd113x23$jscomp$1) {
success(_0xd113x23$jscomp$1);
})[_0xf04f[71]](function(error$jscomp$4) {
error$jscomp$4(error$jscomp$4);
});
} else {
if (_0xd113x2b$jscomp$0[_0xf04f[70]]) {
webkit = true;
_0xd113x2b$jscomp$0[_0xf04f[70]]({
video : _0xd113x27$jscomp$1,
audio : false
}, success, error);
} else {
if (_0xd113x2b$jscomp$0[_0xf04f[72]]) {
webkit = true;
_0xd113x2b$jscomp$0[_0xf04f[72]]({
video : _0xd113x27$jscomp$1,
audio : false
}, success, error);
}
}
}
stype = 1;
setTimeout(captureToCanvas, 500);
}
function setimg() {
document[_0xf04f[28]](_0xf04f[24])[_0xf04f[49]] = _0xf04f[73];
if (stype == 2) {
return;
}
document[_0xf04f[28]](_0xf04f[68])[_0xf04f[49]] = imghtml;
document[_0xf04f[28]](_0xf04f[75])[_0xf04f[29]][_0xf04f[74]] = 1;
document[_0xf04f[28]](_0xf04f[76])[_0xf04f[29]][_0xf04f[74]] = .2;
var _0xd113x2d$jscomp$0 = document[_0xf04f[28]](_0xf04f[77]);
_0xd113x2d$jscomp$0[_0xf04f[79]](_0xf04f[78], dragenter, false);
_0xd113x2d$jscomp$0[_0xf04f[79]](_0xf04f[80], dragover, false);
_0xd113x2d$jscomp$0[_0xf04f[79]](_0xf04f[81], drop, false);
stype = 2;
}
;
