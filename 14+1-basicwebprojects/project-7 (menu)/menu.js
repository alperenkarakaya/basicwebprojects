const btnAll=document.querySelector("#btnAll")
const btnBreakfast=document.querySelector("#btnBreakfast")
const btnLunch=document.querySelector("#btnLunch")
const btnDrinks=document.querySelector("#btnDrinks")
const breakfastItems=document.querySelectorAll(".breakfast")
const lunchItems=document.querySelectorAll(".lunch")
const drinkItems=document.querySelectorAll(".drink")
trackItems=0;

btnAll.addEventListener("click",function(){
    for(let i=1;i<=18;i++){
        let menuItem=document.querySelector(`.menuItem${i}`)
        menuItem.style.display="flex";
    }
})
btnBreakfast.addEventListener("click",function(){
    for(let i=1;i<=18;i++){
        let menuItem=document.querySelector(`.menuItem${i}`)
        for(let j=0;j<=5;j++){
            if(menuItem.classList[j]!=""){
                if(menuItem.classList[j]==="breakfast"){
                    menuItem.style.display="flex";
                    break;
                }
                else if(menuItem.classList[j]!=="breakfast"){
                    menuItem.style.display="none";
                }
            }
        }
    }
})
btnLunch.addEventListener("click",function(){
    for(let i=1;i<=18;i++){
        let menuItem=document.querySelector(`.menuItem${i}`)
        for(let j=0;j<=5;j++){
            if(menuItem.classList[j]!=""){
                if(menuItem.classList[j]==="lunch"){
                    menuItem.style.display="flex";
                    break;
                }
                else if(menuItem.classList[j]!=="lunch"){
                    menuItem.style.display="none";
                }
            }
        }
    }
})
btnDrinks.addEventListener("click",function(){
    for(let i=1;i<=18;i++){
        let menuItem=document.querySelector(`.menuItem${i}`)
        for(let j=0;j<=5;j++){
            if(menuItem.classList[j]!=""){
                if(menuItem.classList[j]==="drink"){
                    menuItem.style.display="flex";
                    break;
                }
                else if(menuItem.classList[j]!=="drink"){
                    menuItem.style.display="none";
                }
            }
        }
    }
})