const Xbutton=document.getElementById("Xbutton")
const closingTab=document.getElementById("closingTab")
const mainPageBoxButton=document.getElementById("mainPageBox-button")
const bgModal=document.getElementById("bg-modal")

Xbutton.addEventListener("click",function(){
    closingTab.style.visibility="hidden";
    bgModal.style.visibility="hidden";
})
mainPageBoxButton.addEventListener("click",function(){
    closingTab.style.visibility="visible";
    bgModal.style.visibility="visible";
})
