const rock = document.getElementById('rock')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors')
const playButton = document.getElementById('playButton')

var computerScore = 0;
var userScore = 0;

var rsp = ["rock","scissors","paper",];



var userChoice = "";

rock.addEventListener('click', () => {
    userChoice = "rock";
});
paper.addEventListener('click', () => {
    userChoice = "paper";
});
scissors.addEventListener('click', () => {
    userChoice = "scissors";
});

if(userChoice   )

playButton.addEventListener('click', () => {
    
    var computerChoice = rsp[Math.floor(Math.random() * rsp.length)];
    var gameResult = "";
    

    if(computerChoice === "rock"){
        if(userChoice === "scissors") gameResult = "Computer won.", computerScore += 1;
        else if(userChoice === "rock") gameResult = "Tie";
        else gameResult = "You won.", userScore +=1;

    }else if(computerChoice === "scissors"){
        if(userChoice === "scissors") gameResult = "Tie.";
        else if(userChoice === "rock") gameResult = "You won.", userScore +=1;
        else gameResult = "Computer won.", computerScore += 1;

    }else {
        if(userChoice === "scissors") gameResult = "You won.", userScore +=1;
        else if(userChoice === "rock") gameResult = "Computer won.", computerScore += 1;
        else gameResult = "Tie.";
    }

    console.log(gameResult);
    console.log(computerScore);
    
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('userScore').innerHTML = userScore;

   


});




/* 
function win(bn){
	UserPoints++; */






// const func = (arg1, arg2) => {
//     return arg1 + arg2;
// }

// const func2 = arg1 => arg1*2;


// document.getElementsByClassName(playButton),addEventListener('click',function(){
//     function randomRsp (){
//         return rsp[Math.floor(Math.random() * rsp.length)];
//         };


//     if (){
//         console.log(rock)
//     }

// }
// );


