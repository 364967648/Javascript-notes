'use strict';
var url = 'http://127.0.0.1:3000/';
var xmlHttp = new RequestObject();
xmlHttp.open('post',url,true);
xmlHttp.send();
xmlHttp.onreadystatechange = function(){
	//	Ajax引擎状态为成功  
    if (xmlHttp.readyState == 4) {  
        //	HTTP status success 
        if (xmlHttp.status == 200) {
        	// done after success 
        	console.dir(xmlHttp);
        } else {
        	alert('请求失败，错误码='+xmlHttp.status);
        }

	} 
	// xmlHttp.send();
};
function RequestObject(){
	var xmlHttp = null;
	if (typeof RequestObject.instance != 'object') {
		if(window.XMLHttpRequest) {  
			// IE7+, Firefox, Chrome, Opera, Safari
			xmlHttp = new XMLHttpRequest();  
		} else {  
			// ie6,ie5
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
		}
		RequestObject.instance = xmlHttp;
	} 
	return RequestObject.instance;
}
