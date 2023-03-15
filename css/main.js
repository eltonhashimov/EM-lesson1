
var myHead=document.querySelector("#header")
window.onscroll=function(){
    if(scrollY>92){
        myHead.classList.add("header-active")
    }else{
        myHead.classList.remove("header-active")
    }
}