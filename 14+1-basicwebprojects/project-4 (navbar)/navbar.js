const navbarIconPic=document.getElementById("navbarIconPic")
const dropdownMenu=document.getElementById("dropdownMenu")
const navBar=document.getElementById("navBar")
let openMenu=0;

navbarIcon.addEventListener("click", function(){
    if(openMenu===0){
        dropdownMenu.style.display="block";
        navBar.classList="col-12";
        openMenu+=1;
    }
    else if(openMenu===1){
        dropdownMenu.style.display="none";
        navBar.classList="shadow p-3 mb-5 bg-body-tertiary col-12";
        openMenu=0;
    }
})