const directionBox=document.querySelector("#directionBox")
const menuBar=document.querySelector("#menuBar")
const Xbutton=document.querySelector("#Xbutton")
const body=document.querySelector("body")

tracker=0;

menuBar.addEventListener("click",function(){
    if(tracker===0){
        directionBox.style.display="block";
        tracker+=1;
    }
    else{
        directionBox.style.display="none";
        tracker=0;
    }
})
Xbutton.addEventListener("click",function(){
    directionBox.style.display="none";
    tracker=0;
})