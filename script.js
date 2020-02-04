var benter=document.getElementById("enter");
var input=document.getElementById("inputvalue");
var ul=document.getElementById("ul1");
var reset=document.getElementById("reset");

var createLi=function()
{
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
};
var insertLiAfterEnter=function()
{	
	if (input.value.length>0) {
		createLi();
	}
};
var insertLiAfterKeyPress=function(event)
{
	if (input.value.length>0&&event.keyCode===13) {
		createLi();
	}
};
var resetAll=function()
{
	document.getElementById("ul1").innerHTML = "";
}

benter.addEventListener("click",insertLiAfterEnter);
input.addEventListener("keypress",insertLiAfterKeyPress);
reset.addEventListener("click",resetAll);