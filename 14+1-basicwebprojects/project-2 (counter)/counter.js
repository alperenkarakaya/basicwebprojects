const btnUp=document.querySelector("#btnUp")
const btnDown=document.querySelector("#btnDown")
const btnReset=document.querySelector("#btnReset")
const number=document.querySelector("#numberCounter")

btnReset.addEventListener("click", function(){
    number.innerText="0";
    number.style.color="black";
})
btnUp.addEventListener("click", function(){
    number.innerText=parseInt(number.innerText)+1;
    if(parseInt(number.innerText)===0){
        number.style.color="black"; 
    }
    else if(parseInt(number.innerText)>0){
        number.style.color="green";
    }
})
btnDown.addEventListener("click", function(){
    number.innerText=parseInt(number.innerText)-1;
    if(parseInt(number.innerText)===0){
        number.style.color="black";
    }
    else if(parseInt(number.innerText)<0){
        number.style.color="red";
    }
})

