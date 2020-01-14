window.onload = function() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var oNext = document.getElementById('nextPage');
	var oBtn = document.getElementById('aBtn');
	var oUl1 = document.getElementById('main1');
	var oUl2 = document.getElementById('main2');
	var popWrap = document.getElementById('popWrap');
	var cloaseBtn = document.getElementById('cloaseBtn');
	var okBtn = document.getElementById('okBtn');
	var ts_1 = document.getElementById('ts_1');
	var ts_2 = document.getElementById('ts_2');
	var ts_2_1 = document.getElementById('ts_2_1');
	var ts_2_2 = document.getElementById('ts_2_2');
	var ts_3 = document.getElementById('ts_3');
	var h = document.documentElement.clientHeight;
	var html1 = '';
	var html2 = '';
	var arr = [];
	var arr2 = [];
	var aAnswer = [];
	var aAnswer2 = [
		'TFL was founded in <span>1996</span>',
		'The TFL claim is <span>Great chemicals. Excellent advice</span>',
		'TFL offering products processes is <span>Beamhouse, Wet-end and Finishing</span>',
		'TFL’s Global Fashion Centre located in <span>Italy</span>',
		'<span>The finishing of leather articles with a substantially lower add-on</span> is the brand new technology TFL MICRO TEC stands for'
	];

	var aAnswer2cn = [
		'<br/>TFL是<span>1996</span>建立的',
		'<br/>TFL的品牌理念是 <span>优异的助剂。优异的专业意见</span>',
		'<br/>TFL所提供的产品是针对<span>准备工段、水场和整饰</span>工艺流程的',
		'<br/>TFL的全球时尚中心是在 <span>意大利</span>',
		'<br/><span>对皮革制件采用一种大幅度减低粒面负荷的整饰技术</span>全新技术TFL MICRO TEC是什么意思？'
	];


	history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
            history.pushState(null, null, document.URL);
    });



	for(var i=0;i<oData.question.length;i++){
		var obj = oData.question[i];
		html1 += '<li><p><span class="en">&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+oData.question[i].q+'</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+oData.question[i].qc+'</p>';
		for(var ii=0;ii<obj.s.length;ii++){
			html1 += '<label><input name="question_'+i+'" type="radio" value="'+getABC(ii)+'" /><i class="iconfont icon-yduidanxuankuang"></i><i class="iconfont icon-yduidanxuankuangxuanzhong"></i><span class="en">'+obj.s[ii]+'</span>';
			if(obj.sc){
				html1 += '<span>'+obj.sc[ii]+'</span>';	
			}	
			
			html1 += '</label><br/>';	
		}
		aAnswer.push(obj.a);
		html1 += '</li>';
	}

	for(var i=0;i<oData.userInfo.length;i++){
		var obj = oData.userInfo[i];
		if(obj.type == 'text'){
			html2 += '<li><span><span class="en">'+obj.q+'</span><span>'+obj.qc+'</span></span>：<input name="userInfo_'+i+'" type="text" placeholder="'+obj.p+'&nbsp;&nbsp;'+obj.pc+'" ></li>';
		}else if(obj.type == 'radio'){
			html2 += '<li><span><span class="en">'+obj.q+'</span><span>'+obj.qc+'</span></span><b>：</b>';
			for(var ii=0;ii<obj.a.length;ii++){
				html2 += '<label><input name="userInfo_'+i+'" type="radio" value="'+obj.a[ii]+'" /><i class="iconfont icon-yduidanxuankuang"></i><i class="iconfont icon-yduidanxuankuangxuanzhong"></i><span class="en">'+obj.a[ii]+'</span><span>'+obj.ac[ii]+'</span></label>';
			}
			html2 += '</li>';
		}else if(obj.type == 'checkbox'){
			html2 += '<li><p><span class="en">'+obj.q+'</span><br/><span>'+obj.qc+'</span></p>';
			for(var ii=0;ii<obj.a.length;ii++){
				if(ii == obj.a.length-1){
					html2 += '<label><input name="userInfo_'+i+'" type="checkbox" value="'+obj.a[ii]+'" id="checkOther" /><i class="iconfont icon-duoxuan_weixuanzhong"></i><i class="iconfont icon-duoxuan_xuanzhong"></i><span><span class="en">'+obj.a[ii]+'</span><br/>'+obj.ac[ii]+'</span><b>：</b><input type="text" placeholder="Please fill in the reason   请填入原因" id="textOther"></label>';
				}else{
					html2 += '<label><input name="userInfo_'+i+'" type="checkbox" value="'+obj.a[ii]+'" /><i class="iconfont icon-duoxuan_weixuanzhong"></i><i class="iconfont icon-duoxuan_xuanzhong"></i><span class="en">'+obj.a[ii]+'</span><span>'+obj.ac[ii]+'</span></label>';
				}
			}
			html2 += '</li>';
		}
	}

	oUl1.innerHTML = html1;
	oUl2.innerHTML = html2;


	//console.log(aAnswer);
	oNext.onclick = function(){
		var aPrompt = [];
		arr = [];
		for(var i=0;i<oData.question.length;i++){
			var str = 'question_'+i;
			var _value = getRadioVAlue(str);
			arr.push(_value);
			if(!_value){
				aPrompt.push((i+1));
			}
		}

		if(aPrompt.length>0){
			okBtn.innerHTML = 'OK';
			if(aPrompt.length==oData.question.length){
				ts_2.style.display = 'block';
			}else if(aPrompt.length<oData.question.length){
				ts_2_1.style.display = 'block';
			}
			
			popWrap.style.display = 'block';
			okBtn.onclick = popmr;
		}else{
			var bArr = [];
			for(var i=0;i<arr.length;i++){
				if(arr[i] != aAnswer[i]){
					bArr.push(i);
				}
			}

			if(bArr.length>0){
				var _html = '<p>';
				for(var i=0;i<bArr.length;i++){
					if(i==bArr.length-1){
						_html+= aAnswer2[bArr[i]];
						_html+= aAnswer2cn[bArr[i]];
					}else{
						_html+= aAnswer2[bArr[i]];
						_html+= aAnswer2cn[bArr[i]]+'<br/>';
					}
				}
				_html += '</p>';

				//console.log(_html)
				ts_3.innerHTML = _html;
				okBtn.innerHTML = 'I know it now<br/><span>我现在知道了</span>';
				ts_3.style.display = 'table';
				popWrap.style.display = 'block';
				okBtn.onclick = function(){
					page1.style.display = 'none';
					page2.style.display = 'block';
					popmr();
				}
			}else{
				page1.style.display = 'none';
				page2.style.display = 'block';
			} 
		}
	}

	cloaseBtn.onclick = popmr;
	


	oBtn.onclick = function(){
		var checkOther = document.getElementById('checkOther');
		var textOther = document.getElementById('textOther');
		var aPrompt2 = [];
		arr2 = [];
		var aLi = oUl2.children;
		for(var i=0;i<aLi.length;i++){
			var oInput = aLi[i].getElementsByTagName('input')[0];
			var str = 'userInfo_'+i;
			if(oInput.type == 'text'){
				arr2.push(oInput.value);
				if(!oInput.value){
					aPrompt2.push((i+1));
				}
			}else if(oInput.type == 'radio'){
				var _value2 = getRadioVAlue(str);
				arr2.push(_value2);
				if(!_value2){
					aPrompt2.push((i+1));
				}
			}else if(oInput.type == 'checkbox'){
				var _aValue2 = getCheckboxVAlue(str);
				arr2.push(_aValue2);
				if(_aValue2.length == 0){
					aPrompt2.push((i+1));
				}
			}
		}


		var bPrompt2 = false;
		if(checkOther.checked == true){
			if(!textOther.value){
				bPrompt2 = true;
			}
		}

		if(aPrompt2.length>0 || bPrompt2){
			okBtn.innerHTML = 'OK';
			ts_2_2.style.display = 'block';
			popWrap.style.display = 'block';
			okBtn.onclick = popmr;
		}else{

			okBtn.innerHTML = 'OK';
			ts_1.style.display = 'block';
			popWrap.style.display = 'block';
			okBtn.onclick = function(){
				location.reload();
			};

			//写入答案
			var id = 'NO' + new Date().getTime();
			var cavPath1 = getDirectory()+'data.csv';
			var sContent1 = id+','+arr.join();
			writeCSV(cavPath1, sContent1);


			//写入用户信息
			var cavPath2 = getDirectory()+'user.csv';
			var reasons = ''
			
			if(arr2[8].length>1){
				for(var iii=0; iii<arr2[8].length;iii++){
					reasons += arr2[8][iii]+'\n';
				}
			}else{
				reasons = arr2[8][0];
			}

			arr2[8] = '"'+reasons+'"';
			var sContent2 = id+','+arr2.join();
			writeCSV(cavPath2, sContent2);
		}
	}


	function popmr(){
		popWrap.style.display = 'none';
		ts_1.style.display = 'none';
		ts_2.style.display = 'none';
		ts_2_1.style.display = 'none';
		ts_2_2.style.display = 'none';
		ts_3.style.display = 'none';
		ts_3.innerHTML = '';
	}

	function getABC(num){
		var str = 'ABCDEFG';
		return str.charAt(num);
	}

	//获取Radio的值
	function getRadioVAlue(name){
		var aRadio = document.getElementsByName(name);
		var value = '';
		for (var i = 0; i < aRadio.length; i++) {
			if (aRadio[i].checked == true) {
				value = aRadio[i].value;
				break;
			}
		}
		return value;
	}

	//获取Checkbox的值
	function getCheckboxVAlue(name){
		var aCheckbox = document.getElementsByName(name);
		var aValue = [];
		for (var i = 0; i < aCheckbox.length; i++) {
			if (aCheckbox[i].checked) {
				if(aCheckbox[i].value == 'Other'){
					var textOther = document.getElementById('textOther');
					if(textOther.value){
						aValue.push(textOther.value);
					}
				}else{
					aValue.push(aCheckbox[i].value);
				}
			}
		}
		return aValue;
	}

	//写文件
    function writeCSV(pathFile, content){
		var oFso = new ActiveXObject("Scripting.FileSystemObject");  
		oFile = oFso.OpenTextFile(pathFile,8,true); //写方式打开      
		oFile.WriteLine(content); 
		oFile.Close();     
    }

    //获取目录
    function getDirectory(){
    	var nVersion = 'js/';
    	var cavPath = document.scripts;
		cavPath = cavPath[cavPath.length - 1].src.substring(8);
		var num = cavPath.lastIndexOf(nVersion);
		cavPath = cavPath.substring(0,num);
		cavPath = cavPath.replace(/\//ig, "\\")+'\\csv\\';
		cavPath = decodeURI(cavPath);
		return cavPath;
    }
}

