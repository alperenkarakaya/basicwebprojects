const members=[
    {
        id:1,
        img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/153FD/production/_126973078_whatsubject.jpg",
        names:"Adam Adamson",
        job:"Web Developer",
        text:"Adam: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequuntur minus reiciendis voluptatum accusantium voluptas laudantium aliquid? Aliquam velit fugit possimus rem tempora asperiores, ex aut facere veritatis! Eveniet beatae odit quia hic possimus magnam blanditiis, modi natus ipsa quisquam assumenda excepturi in nesciunt. Ut, exercitationem aut, ullam odio delectus debitis beatae, aliquid commodi nobis architecto harum laudantium fugiat adipisci labore? Tenetur velit maiores enim expedita nostrum unde voluptatem, magnam quae voluptate, dolorum fuga eius dolorem quis ut est. Totam obcaecati consectetur modi repellat distinctio ducimus cupiditate ut quibusdam perspiciatis non, veniam, rem tenetur! Eveniet sit voluptates sed dignissimos quisquam!"
    },
    {
        id:2,
        img:"https://gray-kktv-prod.cdn.arcpublishing.com/resizer/rNLmUfVBgHZSZY7I4Ts5FohNfNE=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/RAGTL6CEDJFE5KEFA44FEH46QY.jpg",
        names:"Benjamin Davis",
        job:"iOS Developer",
        text:"Benjamin: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequuntur minus reiciendis voluptatum accusantium voluptas laudantium aliquid? Aliquam velit fugit possimus rem tempora asperiores, ex aut facere veritatis! Eveniet beatae odit quia hic possimus magnam blanditiis, modi natus ipsa quisquam assumenda excepturi in nesciunt. Ut, exercitationem aut, ullam odio delectus debitis beatae, aliquid commodi nobis architecto harum laudantium fugiat adipisci labore? Tenetur velit maiores enim expedita nostrum unde voluptatem, magnam quae voluptate, dolorum fuga eius dolorem quis ut est. Totam obcaecati consectetur modi repellat distinctio ducimus cupiditate ut quibusdam perspiciatis non, veniam, rem tenetur! Eveniet sit voluptates sed dignissimos quisquam!"
    },
    {
        id:3,
        img:"https://c.ndtvimg.com/2022-04/75h6r0dk_elon-musk-reuters_625x300_11_April_22.jpg",
        names:"David Davidson",
        job:"App Developer",
        text:"David: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequuntur minus reiciendis voluptatum accusantium voluptas laudantium aliquid? Aliquam velit fugit possimus rem tempora asperiores, ex aut facere veritatis! Eveniet beatae odit quia hic possimus magnam blanditiis, modi natus ipsa quisquam assumenda excepturi in nesciunt. Ut, exercitationem aut, ullam odio delectus debitis beatae, aliquid commodi nobis architecto harum laudantium fugiat adipisci labore? Tenetur velit maiores enim expedita nostrum unde voluptatem, magnam quae voluptate, dolorum fuga eius dolorem quis ut est. Totam obcaecati consectetur modi repellat distinctio ducimus cupiditate ut quibusdam perspiciatis non, veniam, rem tenetur! Eveniet sit voluptates sed dignissimos quisquam!"
    }
]

const leftArrow=document.querySelector("#arrowLeft")
const rightArrow=document.querySelector("#arrowRight")
const reviewBox=document.querySelector("#reviewBox")
const personImage=document.querySelector("#personImage")
const personName=document.querySelector("#personName")
const personJob=document.querySelector("#personJob")
const personText=document.querySelector("#personText")
const surpriseMe=document.querySelector("#buttonSupriseMe")
let trackId=1;

leftArrow.addEventListener("click", function(){
    if(trackId>1){    
        trackId=trackId-1;
    }
    else{
        trackId=3;
    }
    for(let i=0;i<=trackId;i++){
        if(i===trackId){
            if(trackId===1){
                personImage.src = members[0].img;
                personName.innerText = members[0].names;
                personJob.innerText = members[0].job;
                personText.innerText = members[0].text;
            }
            else if(trackId===2){
                personImage.src = members[1].img;
                personName.innerText = members[1].names;
                personJob.innerText = members[1].job;
                personText.innerText = members[1].text;
            }
            else if(trackId===3){
                personImage.src = members[2].img;
                personName.innerText = members[2].names;
                personJob.innerText= members[2].job;
                personText.innerText = members[2].text;
            }
        }
    }
})
rightArrow.addEventListener("click", function(){
    if(trackId<3){    
        trackId+=1;
    }
    else{
        trackId=1;
    }
    for(let i=0;i<=trackId;i++){
        if(i===trackId){
            if(trackId===1){
                personImage.src = members[0].img;
                personName.innerText = members[0].names;
                personJob.innerText = members[0].job;
                personText.innerText = members[0].text;
            }
            else if(trackId===2){
                personImage.src = members[1].img;
                personName.innerText = members[1].names;
                personJob.innerText = members[1].job;
                personText.innerText = members[1].text;
            }
            else if(trackId===3){
                personImage.src = members[2].img;
                personName.innerText = members[2].names;
                personJob.innerText= members[2].job;
                personText.innerText = members[2].text;
            }
        }
    }
})
surpriseMe.addEventListener("click", function(){
    trackId=parseInt(Math.random()*3+1);
    for(let i=0;i<=trackId;i++){
        if(i===trackId){
            if(trackId===1){
                personImage.src = members[0].img;
                personName.innerText = members[0].names;
                personJob.innerText = members[0].job;
                personText.innerText = members[0].text;
            }
            else if(trackId===2){
                personImage.src = members[1].img;
                personName.innerText = members[1].names;
                personJob.innerText = members[1].job;
                personText.innerText = members[1].text;
            }
            else if(trackId===3){
                personImage.src = members[2].img;
                personName.innerText = members[2].names;
                personJob.innerText= members[2].job;
                personText.innerText = members[2].text;
            }
        }
    }
})