const pageColor=document.getElementById("pageColor")
let colorID=document.querySelector("span")
const colorButton=document.getElementById("colorButton")
const navbarTextColorChanger=document.querySelectorAll("#topbarText")

colorButton.addEventListener("click", function(){
    let a = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);
    let c = parseInt(Math.random()*255);
    const colorPalette= `rgb(${a},${b},${c})`;
    document.body.style.backgroundColor=colorPalette;
    colorID.innerText=colorPalette;
})

navbarTextColorChanger.addEventListener("click", function(){
    navbarTextColorChanger.style.color("white");
})