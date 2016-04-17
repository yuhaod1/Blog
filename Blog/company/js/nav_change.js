window.onload=function()
{
    var oDiv=document.getElementById("adlist");
	var oUl=oDiv.getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("li");
	var timer=null;
	var iSpeed=-2;
	
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.height=oLi[0].offsetHeight*oLi.length+"px";
	
	
	timer=setInterval(fnMove,30);
   
   function  fnMove()
   {     
        if(oUl.offsetTop<-oUl.offsetHeight/2)
		{
		   oUl.style.top=0;
		}
		else if(oUl.offsetTop>0)
		{
		   oUl.style.top=-oUl.offsetHeight/2+'px';
		}
		else
		{
		   oUl.style.top=oUl.offsetTop+iSpeed+'px';  
		}
	}
	oUl.onmouseover=function()
   {
      clearInterval(timer);
   }
   oUl.onmouseout=function()
   {
      timer=setInterval(fnMove,30);
   }	
}