let options = {1:"rock" , 2:"paper" , 3:"scissors"}

let userSelection = 1;
let computerSelection = 1;


let numberOfRound = 0;
let currentRound = 0;

let computerResult = 0;
let userResult = 0;

let access = true ;
document.querySelector("#rounds_popup > .pop_up_background").style.visibility= "visible";
document.querySelector("#rounds_popup > .pop_up_background").style.opacity= "1";
document.querySelector("#rounds_popup .pop_up_box").style.transform= "translateY(0)";

// starting popup
function starter(){
 numberOfRound = document.querySelector("#number_of_round").value;
 document.querySelector("#rounds_popup > .pop_up_background").style.visibility= "hidden";
 document.querySelector("#rounds_popup > .pop_up_background").style.opacity= "0";
 document.querySelector("#rounds_popup .pop_up_box").style.transform= "translateY(-1000px)";
};

function selectorHandler(){
  document.querySelector(".user_choice > img").src = document.querySelector("#selector").value === "1" ? "./pic/rock.png" : document.querySelector("#selector").value === "2" ? "./pic/paper.png" : "./pic/scissors.png";
}

// computer selection process 
document.getElementById("start_game").addEventListener("click" , () => {
  if(access){
    access = false;
    userSelection = parseInt(document.querySelector("#selector").value);
    let counter = 10;
    let computerAction =  setInterval(() => {
      let selectedItem = Math.floor(Math.random()*3) + 1;
      document.querySelector(".computer_choice > img").src = `./pic/${options[selectedItem]}.png`;
      computerSelection = selectedItem;
      counter--;
      if(counter === 0){
        clearInterval(computerAction);
      }
    }, 200)
    setTimeout(() => {
      if(userSelection === computerSelection){
        alert("TIE");
        currentRound++
        checkEnd()
      } else if(userSelection ===1){
        if(computerSelection === 2){
          increaseComputerResult()
          currentRound++
          checkEnd()
        }
        if(computerSelection === 3){
          increaseUserResult()
          currentRound++
          checkEnd()
        }
      } else if(userSelection ===2){
        if(computerSelection === 3){
          increaseComputerResult()
          currentRound++
          checkEnd()
        }
        if(computerSelection === 1){
          increaseUserResult()
          currentRound++
          checkEnd()
        }
      } else if(userSelection ===3){
        if(computerSelection === 1){
          increaseComputerResult()
          currentRound++
          checkEnd()
        }
        if(computerSelection === 2){
          increaseUserResult()
          currentRound++
          checkEnd()
        }
      }
      access = true;
    },2400);
  }
});

// ending conditions
function  increaseComputerResult(){
  computerResult++;
  document.querySelector(".computer_score").innerHTML = computerResult;
};
function  increaseUserResult(){
  userResult++;
  document.querySelector(".user_score").innerHTML = userResult;
};

function checkEnd(){
  if(numberOfRound == currentRound){
    if(computerResult == userResult){
      numberOfRound++;
    }else if(userResult > computerResult){
      document.querySelector("#successful_popup > .pop_up_background").style.visibility= "visible";
      document.querySelector("#successful_popup > .pop_up_background").style.opacity= "1";
      document.querySelector("#successful_popup .pop_up_box").style.transform= "translateY(0)";
    }else{
      document.querySelector("#failed_popup > .pop_up_background").style.visibility= "visible";
      document.querySelector("#failed_popup > .pop_up_background").style.opacity= "1";
      document.querySelector("#failed_popup .pop_up_box").style.transform= "translateY(0)";
    }
  }
}