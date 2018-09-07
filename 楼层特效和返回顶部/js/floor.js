//判断浏览器是否为谷歌
function isChrome(){
nu=navigator.userAgent;
if(nu.match(/chrome/i)){
return true;
}
else{
return false;
}
}
//获取ID对象
function getId(id){
return document.getElementById(id);
}
var focus;
imgobj=getId('imgid');
imgobj.onmouseover=function(){
	this.src='images/top2.gif';
}
imgobj.onmouseleave=function(){
	this.src='images/top1.gif';
}
window.onscroll=function(){	
	if(isChrome()){
		tops=document.body.scrollTop;
	}
	else{
		tops=document.documentElement.scrollTop;
	}

	if(tops>=500){
		imgobj.style.display='block';
	}
	else{
		imgobj.style.display='none';
	}
	if(tops<=0 && i>0){
		clearInterval(s);
	}
	
	if(tops>=500){
		$('#lc')[0].style.display='block';
	}
	else{
		$('#lc')[0].style.display='none';
	}
	if(tops>=500){
		$('#lc li')[0].style.background='#2d9f3d';$('#lc li')[0].style.color='#f2f2f2';
		$('#lc li').not($('#lc li:eq(0)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=0;
	}
	if(tops>=980){
		$('#lc li')[1].style.background='#db6d1b';$('#lc li')[1].style.color='#f2f2f2';		
		$('#lc li').not($('#lc li:eq(1)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=1;
	}
	if(tops>=1460){
		$('#lc li')[2].style.background='#d29007';$('#lc li')[2].style.color='#f2f2f2';		
		$('#lc li').not($('#lc li:eq(2)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=2;
	}
	if(tops>=1940){
		$('#lc li')[3].style.background='#2792cc';$('#lc li')[3].style.color='#f2f2f2';		
		$('#lc li').not($('#lc li:eq(3)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=3;
	}
	if(tops>=2420){
		$('#lc li')[4].style.background='#763086';$('#lc li')[4].style.color='#f2f2f2';		
		$('#lc li').not($('#lc li:eq(4)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=4;
	}
	if(tops>=2900){
		$('#lc li')[5].style.background='#d7493b';$('#lc li')[5].style.color='#f2f2f2';		
		$('#lc li').not($('#lc li:eq(5)')).css({'background':'#f1f1f1','color':'#cfcfcf'});
		focus=5;
	}
}
var i=0;
	imgobj.onclick=function(){
	s=setInterval(function(){
		if(isChrome()){
			document.body.scrollTop-=20;
		}
		else{
			document.documentElement.scrollTop-=20;
		}
	},1);
	i++;	
	}
$('#lc li').click(function(){ 
		var ind=$(this).index('#lc li');
		if(ind>focus){
			var floors=setInterval(function(){
				if(ind==0){
					if(isChrome()){
						document.body.scrollTop/=20;
						document.body.scrollTop*=20;
						if(document.body.scrollTop>=500)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;
							
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=500)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;	
					}
				}
				if(ind==1){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop>=980)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=980)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;
					}
				}
				if(ind==2){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop>=1460)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=1460)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;
					}
				}
				if(ind==3){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop>=1940)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=1940)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;
					}
				}
				if(ind==4){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop>=2420)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=2420)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;
					}
				}
				if(ind==5){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop>=2900)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop+=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop>=2900)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop+=20;
					}
				}
				
		},1);
		}
		else if(ind<=focus){
			var floors=setInterval(function(){
				if(ind==0){
					if(isChrome()){
						document.body.scrollTop/=20;
						document.body.scrollTop*=20;
						if(document.body.scrollTop<=500)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;
							
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=500)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}
				if(ind==1){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop<=980)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=980)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}
				if(ind==2){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop<=1460)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=1460)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}
				if(ind==3){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop<=1940)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=1940)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}
				if(ind==4){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop<=2420)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=2420)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}
				if(ind==5){
					document.body.scrollTop/=20;
					document.body.scrollTop*=20;
					if(isChrome()){
						if(document.body.scrollTop<=2900)
						{
							clearInterval(floors);
							return false;
						}		
						document.body.scrollTop-=20;		
					}
					else{
						document.documentElement.scrollTop/=20;
						document.documentElement.scrollTop*=20;
						if(document.documentElement.scrollTop<=2900)
						{
							clearInterval(floors);
							return false;
						}
						document.documentElement.scrollTop-=20;
					}
				}				
		},1);
		}			
});