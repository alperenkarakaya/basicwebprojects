const groceryItemList=document.querySelector("#grocery-item-list")
const groceryInput=document.querySelector("#grocery-input")
const addButton=document.querySelector("#add-button")
const clearButton=document.querySelector("#clear-button")

let itemTracker=0;

addButton.addEventListener("click",function(){
    if(groceryInput.value!=""){
        let addItem="";
        let givenInput=groceryInput.value;
        itemTracker+=1;
        updateItemCounter();
        let addText=`
        <div id="item${itemTracker}" class="grocery-item-list-item">
                <p><span id="item-number">${itemTracker}</span> ${givenInput}</p>
            <div id="buttons${itemTracker}" class="grocery-item-list-buttons">
                <button id="Xitem${itemTracker}" class="grocery-item-list-buttonX">X</button>
            </div>
        </div>`;
        groceryItemList.innerHTML+=addText;
    }
    groceryInput.value="";
    if(itemTracker!==0){
        let groceryItemListButtonX=document.querySelectorAll(".grocery-item-list-buttonX")
        groceryItemListButtonX.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const id=button.getAttribute("id").slice(1);
                let element=document.getElementById(`${id}`);
                let numberOfDeletedElement=parseInt(element.getAttribute("id").slice(4));
                element.remove();
                for (let k = numberOfDeletedElement + 1; k <= itemTracker; k++) {
                    let getItem = document.querySelector(`#item${k}`);
                    let updatedItemId = `item${k - 1}`;
                    getItem.setAttribute("id", updatedItemId);
          
                    let buttonsContainer = document.querySelector(`#buttons${k}`);
                    let updatedButtonsId = `buttons${k - 1}`;
                    buttonsContainer.setAttribute("id", updatedButtonsId);
                    buttonsContainer.querySelectorAll("button").forEach((button) => {
                      let buttonId = button.getAttribute("id");
                      let updatedButtonId = buttonId.replace(`item${k}`, `item${k - 1}`);
                      button.setAttribute("id", updatedButtonId);
                    });
                }
                itemTracker=itemTracker-1;
                updateItemCounter();
            })
        })
    }
})
groceryInput.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        if(groceryInput.value!=""){
            let addItem="";
            let givenInput=groceryInput.value;
            itemTracker+=1;
            updateItemCounter();
            let addText=`
            <div id="item${itemTracker}" class="grocery-item-list-item">
                    <p><span id="item-number">${itemTracker}</span> ${givenInput}</p>
                <div id="buttons${itemTracker}" class="grocery-item-list-buttons">
                    <button id="Xitem${itemTracker}" class="grocery-item-list-buttonX">X</button>
                </div>
            </div>`;
            groceryItemList.innerHTML+=addText;
        }
        groceryInput.value="";
        if(itemTracker!==0){
            let groceryItemListButtonX=document.querySelectorAll(".grocery-item-list-buttonX")
            groceryItemListButtonX.forEach((button) => {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const id=button.getAttribute("id").slice(1);
                    let element=document.getElementById(`${id}`);
                    let numberOfDeletedElement=parseInt(element.getAttribute("id").slice(4));
                    element.remove();
                    for (let k = numberOfDeletedElement + 1; k <= itemTracker; k++) {
                        let getItem = document.querySelector(`#item${k}`);
                        let updatedItemId = `item${k - 1}`;
                        getItem.setAttribute("id", updatedItemId);
            
                        let buttonsContainer = document.querySelector(`#buttons${k}`);
                        let updatedButtonsId = `buttons${k - 1}`;
                        buttonsContainer.setAttribute("id", updatedButtonsId);
                        buttonsContainer.querySelectorAll("button").forEach((button) => {
                        let buttonId = button.getAttribute("id");
                        let updatedButtonId = buttonId.replace(`item${k}`, `item${k - 1}`);
                        button.setAttribute("id", updatedButtonId);
                        });
                    }
                    itemTracker=itemTracker-1;
                    updateItemCounter();
                })
            })
        }
    }
})
clearButton.addEventListener("click",function(){
    for(let i=1;i<=itemTracker;i++){
        let removeElementId=document.querySelector(`#item${i}`);
        removeElementId.remove();
    }
    itemTracker=0;
    updateItemCounter();
})

const itemCalc=document.querySelector("#item-calc")

const updateItemCounter = () => {
    itemCalc.innerHTML = `<p>items: ${itemTracker}</p>`;
}



