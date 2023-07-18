const bgVideo=document.querySelector("#bg-video")
const buttonSP=document.querySelector("#buttonS-P")
const btnSlide=document.querySelector("#btn-slide")
tracker=0;
buttonSP.addEventListener("click",function(){
    if(tracker===0){
        bgVideo.pause();
        tracker+=1;
        btnSlide.classList.add("slide-left");
        btnSlide.classList.remove("slide-right");
    }
    else if(tracker===1){
        tracker=0;
        bgVideo.play();
        btnSlide.classList.add("slide-right");
        btnSlide.classList.remove("slide-left");
    }
})