
let scoreHome = 0
let scoreVis = 0
let score = 0


let scoreHomeEl = document.getElementById("score-h-el")
let scoreVisEl = document.getElementById("score-v-el")
console.log(scoreHomeEl)
console.log(scoreVisEl)

function addOneHome() {
 scoreHome+= 1;
 scoreHomeEl.textContent = scoreHome;
 console.log(scoreHome)
}

function addTwoHome(){
 scoreHome+= 2;
 scoreHomeEl.textContent = scoreHome;
 console.log(scoreHome)
}

function addThreeHome(){
    scoreHome+= 3;
    scoreHomeEl.textContent = scoreHome;
    console.log(scoreHome)
   }

   function addOneVis() {
    scoreVis+= 1;
    scoreVisEl.textContent = scoreVis;
    console.log(scoreVis)
   }
   
   function addTwoVis(){
    scoreVis+= 2;
    scoreVisEl.textContent = scoreVis;
    console.log(scoreVis)
   }
   
   function addThreeVis(){
       scoreVis+= 3;
       scoreVisEl.textContent = scoreVis;
       console.log(scoreVis)
      }

function resetScore() {
    console.log("In Here")
    scoreHome = 0
    scoreVis = 0
    scoreVisEl.textContent = 0;
    scoreHomeEl.textContent = scoreHome;
}