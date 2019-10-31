/*
 * 描述：判断浏览器信息
 * 日期：2018.9.29
 * 版本：V1.0
 */
// 判断当前浏览类型
function checkBrowserVersion(callback) {
  var u = window.navigator.userAgent; //取得浏览器的userAgent字符串
  var O = {
    isOpera:u.indexOf("OPR") > -1,
    isFF:u.indexOf("Firefox") > -1,
    isQQBrowser:u.indexOf("QQBrowser") > -1,
    isEdge:u.indexOf("Edge") > -1,
    isChrome:u.indexOf("Chrome") > -1,
    isSafari:u.indexOf("Safari") > -1,
    isIE:u.indexOf("Trident") > -1,//ie
    ie11lt:u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1,//ie11-
    ie11gt:u.indexOf("rv:11.0") > -1,//ie11
    isMobile: u.indexOf("Mobile") > -1,
    isAndroid:u.indexOf("Android") > -1,
    isPad:u.indexOf("iPad") > -1,
    isIphone:u.indexOf("iPhone") > -1,
    weiXin: u.indexOf('MicroMessenger') != -1 //是否为微信浏览器

  }//校验浏览器类型
  var b = "";//版本
  if(O.isOpera) { b = "Opera";}
  else if (O.isFF) {b = "Firefox";}
  else if (O.isQQBrowser) {b = "QQBrowser";}
  else if (O.isEdge) {b = "Edge";}
  else if (O.isMobile && O.isAndroid) {b = "Android";}
  else if (O.isMobile && O.isPad) {b = "iPad";}
  else if (O.isMobile && O.isIphone) {b = "iPhone";}
  else if (O.isChrome) { b = "Chrome";}
  else if (O.isSafari) { b = "Safari";}
  else if (O.isEdge) {b = "Edge"}
  else if (O.isIE && O.ie11gt) { b = 11;}
  else if (O.isIE && O.ie11lt) {
    new RegExp("MSIE (\\d+\\.\\d+);").test(u);
    b = parseFloat(RegExp["$1"]);
  }
  callback(b);
}
