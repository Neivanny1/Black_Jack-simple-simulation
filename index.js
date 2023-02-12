// let player ={
//     name:"Your current Stake",
//     chips: 200
// }
let cards =[]
let sum =0
let hasBlackJack=false
let isAlive =false
let message = ""
let messageEl= document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
let selectElement = document.getElementById("currency-el")               
let selectElement1 = document.getElementById("amount-el")
let outputEL=document.getElementById("pe-el")
let transact = document.getElementById("depo-el")
// playerEl= "you want" + transact.value
// console.log( playerEl)
function display(){
    var date= new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session="AM";
    if(hour===0){
        hour=12;

    }
    if( hour>12){
        hour=hour-12;
        session="PM";
    }
    hour=(hour<10)? "0"+hour :hour;
    min=(min<10)? "0"+min :min;
    sec=(sec<10)? "0"+sec :sec;
    var time = hour + ":" +min+":"+sec +":"+session;
    document.getElementById("watch").innerText=time;
    setTimeout(display,1000);
}
display();

function deposit(){
   result=selectElement1.value
   stake= selectElement.value + result
    outputEL.textContent= " Current Stake: " + stake
    // playerEl.textContent =" Current Stake" + outputEL
    
}
    

//  }

// playerEl.textContent=player.name + ": $" + player.chips                               
function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13) +1
    if (randomNumber > 10){
        return 10
    }else if(randomNumber ===1){
        return 1
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive =true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for( let i= 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message ="Do you want to draw a new card?" 
    }else if( sum === 21){
        message="You've got BlackJack!"
        isAlive = false
        stake= selectElement.value + (selectElement1.value * 3.75)
    outputEL.textContent= " Current Stake: " + stake 
    }else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent= message
}
function withdraw(){
        result= result - selectElement1.value
        stake= selectElement.value + result
        // stake= selectElement.value + ( stake - selectElement1.value)
    // outputEL.textContent= " Current Stake: " + stake
    playerEl.textContent="Stake after withdraw: "+ stake
    }


function newCard(){
    if( isAlive=== true && hasBlackJack === false){
        let card =getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}