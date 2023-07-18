textList=[{
    itemId:1,
    header:"History",
    p: "aLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur, iure quisquam in labore illum ipsam fugiat dolore iusto incidunt nemo cum ducimus fugit explicabo ipsa magnam nihil id molestiae.",
},{
    itemId:2,
    header:"Visions",
    p: "bLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur, iure quisquam in labore illum ipsam fugiat dolore iusto incidunt nemo cum ducimus fugit explicabo ipsa magnam nihil id molestiae.",

},{
    itemId:3,
    header:"Goals",
    p: "cLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur, iure quisquam in labore illum ipsam fugiat dolore iusto incidunt nemo cum ducimus fugit explicabo ipsa magnam nihil id molestiae.",
}]

const directions=document.querySelectorAll(".direction-tab")
let textBoxHeader=document.querySelector("#text-box-header")
let textBoxP=document.querySelector("#text-box-p")


directions.forEach((titles) =>{
    titles.addEventListener("click",(e) => {
        const titleCheck=e.currentTarget.classList.contains("deactive");
        const directionActive=document.querySelector(".active")
        const id=e.currentTarget.getAttribute("id");
        const element=document.getElementById(`${id}`);
        const titleActive=titles.classList.contains("active");
        if(titleCheck){
            directionActive.classList.remove("active");
            directionActive.classList.add("deactive");
            element.classList.remove("deactive");
            element.classList.add("active");
        }
        for(let i=1;i<4;i++){
            if(directions[`${i-1}`]===titles){
                textBoxHeader.innerText=textList[`${i-1}`].header;
                textBoxP.innerText=textList[`${i-1}`].p;
            }
        }
    })
})