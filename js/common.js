
function showLoading () {
	var load = document.getElementById('m-loading');
	if (load) {
		load.style.display = 'flex'
	} else {
		var el = document.createElement('div');
		el.setAttribute('id', 'm-loading')
		el.style.cssText = 'position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 100;display: flex;align-items: center;justify-content: center;'
		el.innerHTML = '<span style="width: 40px;height: 40px;" class="mui-spinner"></span>'
		document.body.appendChild(el)
	}
	
}
function closeLoading () {
	var load = document.getElementById('m-loading');
	if (load) {
		load.style.display = 'none'
	}
}
