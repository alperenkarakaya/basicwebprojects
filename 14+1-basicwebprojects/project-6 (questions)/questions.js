const answerBox1=document.querySelector("#answerBox1")
const answerBox2=document.querySelector("#answerBox2")
const answerBox3=document.querySelector("#answerBox3")
const qBox1=document.querySelector("#qBox1-btn")
const qBox2=document.querySelector("#qBox2-btn")
const qBox3=document.querySelector("#qBox3-btn")
const aBox1=document.querySelector("#aBox1-btn")
const aBox2=document.querySelector("#aBox2-btn")
const aBox3=document.querySelector("#aBox3-btn")


qBox1.addEventListener("click",function(){
    answerBox1.style.display="block";
    qBox1.style.display="none"
    aBox1.style.display="block"
})
qBox2.addEventListener("click",function(){
    answerBox2.style.display="block";
    qBox2.style.display="none"
    aBox2.style.display="block"
})
qBox3.addEventListener("click",function(){
    answerBox3.style.display="block";
    qBox3.style.display="none"
    aBox3.style.display="block"
})
aBox1.addEventListener("click",function(){
    answerBox1.style.display="none";
    aBox1.style.display="none"
    qBox1.style.display="block"
})
aBox2.addEventListener("click",function(){
    answerBox2.style.display="none";
    aBox2.style.display="none"
    qBox2.style.display="block"
})
aBox3.addEventListener("click",function(){
    answerBox3.style.display="none";
    aBox3.style.display="none"
    qBox3.style.display="block"
})