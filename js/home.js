
function countTime(startTime, endTime, day) {
    //时间差  
    var leftTime = endTime.getTime()-startTime.getTime(); 
    //定义变量 d,h,m,s保存倒计时的时间  
    var d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);         
        h = checkTime(h);
	    m = checkTime(m);
	    s = checkTime(s);
	    if (day) {
	    	return {'d':d,'h':h,'m':m,'s':s};
	    }
	    return "剩余" + d +"天 " + h + ":" + m + ":" + s;
    } else {
    	return '';
    }
    
    
}
function checkTime(i){
  if (i<10) {
      i = i < 0 ? 0 : i;
      i = "0"+i;
  }
  return i;
}
function hasClass(elements, cName) {
	return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}
function addClass(elements, cName) {
	if(!hasClass(elements, cName)) {
		elements.className += " " + cName; 
	}
}
function removeClass(elements, cName) {
  if (hasClass(elements,cName)) { 
	elements.className = elements.className.replace(new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " ");
  }
}
