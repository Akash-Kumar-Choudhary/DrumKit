var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;++i){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        this.style.color="white";
        console.log(this.innerHTML);
    });
}