/**
 * 缩放方法
 * 使页面适应屏幕大小
 */
var winW;
var winH;
var w;
var h;
var htmlDom = document.getElementsByTagName('html')[0];
var scaleDom=document.getElementsByClassName("scale")[0];
//缩放元素
function sizeFn() {
    winW = document.documentElement.clientWidth;
    winH = document.documentElement.clientHeight;
    // if(winW>=1920){
    //     w=1920;
    //     h=1080;
    // }else if(1366<winW<1920){
    //     w=1600;
    //     h=900;
    // }else{
    //     w=1024;
    //     h=768;
    // }
    w=1920;
    h=1080;
    if(htmlDom){
        if ((winW / winH) > (w / h)) {
            htmlDom.style.height = h+"px";
            htmlDom.style.width = h * (winW / winH) + "px";
            scaleDom.style.transform = 'scale(' + winH / h + ')'
        } else {
            htmlDom.style.width = w+"px";
            htmlDom.style.height = w * (winH / winW) + "px";
            scaleDom.style.transform = 'scale(' + winW / w + ')'
        }
    }
}
//还原不想缩放的元素
function sizeUnFn() {
    var unScaleDom=document.getElementsByClassName("unScale")[0];
    if(unScaleDom){
        if ((winW / winH) > (w/h)) {
            unScaleDom.style.transform = 'scale(' + h / winH + ')'
        } else {
            unScaleDom.style.transform = 'scale(' + w / winW + ')'
        }
    }
}
sizeFn();
setTimeout(sizeUnFn,1000);
if (window.addEventListener) {
    window.addEventListener("resize", function() {
        sizeFn();
        sizeUnFn();
    });
} else {
    window.attachEvent("onresize", function() {
        sizeFn();
        sizeUnFn();
    });
}