//购物车
$(".header_car").hover(function(){
    $(".car_mini").css("background", "#FBFEE9");
    $(".car_menu").css({"width":"300px"}).animate({
        height:"100px"
    },400).finish();
},function(){
    $(".car_mini").css("background", "#424242");
    $(".car_menu").css({"width":"300px"}).animate({
        height:"0px"
    },400);
})

//导航
$(".menunav li:lt(6)").hover(function(){  	
	var num=$(this).index();
	$(".menu_content_bg").css("border","1px solid #D0D0D0"); 
	$(".menu_content_bg li").eq(num).show().siblings().hide();
    $(".menu_content_bg").height(230);
},function(){  
    $(".menu_content_bg").height(0);
    $(".menu_content_bg").css("border","0px solid #D0D0D0");
})
$(".menu_content_bg").hover(function(){  	
	$(this).css("border","1px solid #D0D0D0"); 
    $(this).height(230);
},function(){  
    $(this).height(0);
    $(this).css("border","0px solid #D0D0D0");
})

//菜单
$(".sidebar>li").hover(function(){
	var num2=$(this).index();
	var aUl=this.getElementsByTagName("ul");
	$(".sidebar_content").eq(num2).css("display","block");
	var iWidth=aUl[0].offsetWidth*aUl.length;
	$(".sidebar_content").eq(num2).width(iWidth);
},function(){
	$(".sidebar_content").eq($(this).index()).css("display","none");
})
	
//轮播图
var zIndex=0;
var timer=null;
$(".binner").hover(function(){
	clearInterval(timer);
	$(".binner a:lt(2)").show();
},function(){
	autoPlay();
	$(".binner a:lt(2)").hide();
})

$("#pre").click(function(){
	zIndex--;
	if(zIndex<0){
		zIndex=$(".binner_pic li").length-1;
	}
	$(".binner_pic li").eq(zIndex).fadeIn().siblings().hide();					 
})
$("#next").click(function(){
	zIndex++;
	if(zIndex==$(".binner_pic li").length){
		zIndex=0;
	}
	$(".binner_pic li").eq(zIndex).fadeIn().siblings().hide();					 
})

autoPlay();

function autoPlay(){
	timer=setInterval(function(){
		zIndex++;
		if(zIndex==$(".binner_pic li").length){
			zIndex=0;
		}
		$(".binner_pic li").eq(zIndex).fadeIn().siblings().hide();
	},3000)
}

//明星产品切换
change();
function change(){
	var aUl=$(".goods_list ul")[0];
	var aLi=aUl.getElementsByTagName("li");
	var oWidth=aLi[0].offsetWidth*5;
	aUl.style.margin=0;
	aUl.style.width=aLi.length*aLi[0].offsetWidth+"px";
	
	var iLeft=0;
	

    $(".controls a").eq(0).click(function(e){
		iLeft=aUl.offsetLeft-oWidth;	
		if(iLeft<=-(aUl.offsetWidth-oWidth)){
			iLeft=-(aUl.offsetWidth-oWidth);	
		}
		$(".goods_list ul").eq(0).animate({left:iLeft},500);	
		e.preventDefault();							
	})
	$(".controls a").eq(1).click(function(e){
		iLeft=aUl.offsetLeft+oWidth;
		if(iLeft>=0){
			iLeft=0;
		}
		$(".goods_list ul").eq(0).animate({left:iLeft},500);		
		e.preventDefault();							
	})
	
}


