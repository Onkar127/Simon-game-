let gameSequence = [];
let userSequence = [];
let btns = ["yellow", "red", "purple", "green"];
let start = false;
let level = 0;
let level2=0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game started");
        start = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}




function levelup() {
    userSequence=[];
    level2++
    h2.innerText = `Level ${level2}`;
    let randIdx = Math.floor(Math.random() * 4); // fixed range
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    console.log(gameSequence);
    btnflash(randbtn);

}
function checkans(idx){
    if(userSequence[idx]===gameSequence[idx]){
        if(userSequence.length==gameSequence.length){
          setTimeout(levelup,1000);
        }
    }
     else{
        
        h2.innerHTML=`game over !! <b> your score was ${level2}</b> <br>press any key to restart`;
        reset();
    }
}
 
function btnpress(){
    console.log(this);
    let btn =this;
    btnflash(btn);
    usercolor=btn.getAttribute("id"
    );
    console.log(usercolor);
    userSequence.push(usercolor);
    console.log(userSequence);
    checkans(userSequence.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress )
};
function reset(){
    start=false;
    userSequence=[];
    gameSequence=[];
    level=0;
    
    
}
