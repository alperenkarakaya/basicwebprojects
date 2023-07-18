const navbar=document.querySelector("#navbar")
const mainPageText=document.querySelector("#main-page-text")
const navbarSecond=document.querySelector("#navbar2")
const directions=document.querySelector("#directions");
var listItems = document.getElementsByClassName('direction');


window.addEventListener("scroll",function(){
    const scrollHeight = window.scrollY;
    if (scrollHeight > 80){
      navbar.classList.add("navbar-fixed");
      for (let i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.firstChild.style.color = "black";
      }
    }
    else{
      navbar.classList.remove("navbar-fixed");
      for (let i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.firstChild.style.color = "white";
      }
    }
})

const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("navbar-fixed");
    let position = element.offsetTop - navHeight;

    if (navHeight > 80) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});