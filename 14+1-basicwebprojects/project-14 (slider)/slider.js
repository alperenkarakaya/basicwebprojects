const btnBackward=document.querySelector("#btn-backward")
const btnOnward=document.querySelector("#btn-onward")
const slider=document.querySelector("#slider")
const slides=document.querySelector("#slides")
const slide=document.querySelectorAll(".slide")

tracker=0;
let scrollWidth=0;

window.addEventListener("resize",function(){
    scrollWidth=0;
    scrollSlide();
})

let scrollSlide=function(){
    slider.scrollLeft=scrollWidth;
}
btnOnward.addEventListener("click", function(){
    tracker+=1;
    scrollWidth+=slides.offsetWidth;
    if(scrollWidth===slides.offsetWidth*4){
        scrollWidth=0;
        tracker=0;
    }
    console.log(scrollWidth);
    scrollSlide();
})
btnBackward.addEventListener("click", function(){
    tracker-=1;
    scrollWidth-=slides.offsetWidth;
    if(scrollWidth<0){
        scrollWidth=slides.offsetWidth*3;
        tracker=3;
    }
    console.log(scrollWidth);
    scrollSlide();
})