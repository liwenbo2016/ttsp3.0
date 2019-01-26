		var allCheckList  = document.getElementsByClassName('mui_radio')
		var checkboxList  = document.getElementsByClassName('mui_s_chk')
		var allCheck_ico =document.getElementsByClassName('mui_allCheck_ico')
		
		// checkbox全选
		document.getElementById("mui_allCheck").addEventListener("click", function(){
			var checkStatus = true
		
			for(var i = 0 ; i < allCheckList.length ; i++ ){
				if(allCheckList[i].checked == false){
					checkStatus = false;				
				}				
			}
			
			if(checkStatus){
				allCheckOff(allCheckList)
				allCheck_ico[0].checked =false;
			}
			else{
				allCheckOn(allCheckList)
				allCheck_ico[0].checked =true;
			}
		});
		
		
		function allCheckOn(mList){
			for(var i = 0 ; i < mList.length ; i++ ){
				mList[i].checked = true;		
			}
		}
		function allCheckOff(mList){
			for(var i = 0 ; i < mList.length ; i++ ){
				mList[i].checked = false;		
			}
		}
		
		// 局部全选
		for(var i = 0; i < checkboxList.length;i++){
			checkboxList[i].addEventListener('change' , function(){
				var chkParent = this.parentNode.parentNode
				var chkList = chkParent.getElementsByClassName('mui_chk')
		
				var chkStatus = true
		
// 				for(var i = 0 ; i < chkList.length ; i++ ){
// 					if(chkList[i].checked == false){
// 						chkStatus = false;		
// 					}				
// 				}
				if(this.checked){
					chkStatus = false
				}
				else{
					chkStatus = true
				}
				if(chkStatus){
					allCheckOff(chkList)
				}
				else{
					allCheckOn(chkList)
				}
			})
		}
		// 子集false 即父级false
		mui('.mui_item ').on('change' , '.mui_chk ',function(){
			var topWrap = this.parentNode.parentNode.parentNode
			var thisFather=topWrap.getElementsByClassName('mui_s_chk')
			if(this.checked){
				
			}
			else{
				thisFather[0].checked = false
				allCheck_ico[0].checked = (false)
			}
		})
		
		// 编辑
		var editObj = document.getElementById("mui_edit")
		editObj.addEventListener("click", function(){
			window.location.href="shoppingCart-edit.html"
		})
		