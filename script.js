// 1) first part >>>>>>>>
// document.getElementById("count-el").innerText = 5

// chalange 1 👾

// let myAge = 24
// console.log(myAge)
// -------------------------------------------
// chalange 2 👾

// let myage = 24,humanDogRatio = 7
// let myDogAge = myage * humanDogRatio
// console.log(myDogAge)
// -------------------------------------------
// chalange 3 👾 

// let bonusPoints = 50
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)
// -------------------------------------------

// chalange 4 👾

// function numberLoger(){
//   console.log(42)
// }

// numberLoger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function sum(){
//   console.log(lap1 + lap2 + lap3)
// }
// sum()

// let lapsCompleted = 0
// function increment(){
//   lapsCompleted++
//   console.log(lapsCompleted)
// }
// increment()
// increment()
// increment()

// -------------------------------------------
//Main chalange 1 💠 

// count = 0
// countEl = document.getElementById("count-el")
// function increment(){
//   count++
//   countEl.innerText = count;
// }
// function save(){
//   console.log(count)
// }


// -------------------------------------------
// chalange 5 👾 

// let message = "You have tree new notifications"

// let messageToUser = "Login"

// let myName = "ata"
// let greetings = "Hi my name is "
// let myGreetings =  greetings + myName
// console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-el");
// welcomeEl.innerText = myGreetings

// function save(){
//     let sperator = count + " - "
//     welcomeEl.textContent += sperator
//     countEl.innerText = 0
//     count = 0
//   }
// -------------------------------------
// section 1 finished ------------------
// -------------------------------------

// chalanege 2-1
// let firstName = "atabal",lastName = "jamshidi"
// let fullName = firstName + " " +lastName 
// console.log(fullName)

// let hi = "Linda"
// let greeting = "Hi there"

// function greet(){
//   console.log(hi + " " + greeting)
// }

// greet()

// chalange 2-2

// let myPoint = 3
// let myPointEl = document.getElementById("myPoint-el")

// function add3Points(){
//   myPoint += 3
//   myPointEl.textContent = myPoint
// }

// function remove1Point(){
//   myPoint -= 1
//   myPointEl.textContent = myPoint
// }

// chalange 2-3


// let error = "Something went wrong, please try again"
// let purchaseEl = document.getElementById("pourchase-el")
// function pourchase(){
//   purchaseEl.textContent = error
// }

// chalange 2-4
//   let num1 = 8
//   let num2 = 2

//   document.getElementById("num1-el").textContent = num1
//   document.getElementById("num2-el").textContent = num2
// let output = document.getElementById("output-el")
// function Add(){
//   output.textContent = num1 + num2
// }
// function Subtract(){
//   output.textContent = num1 - num2
// }
// function Devide(){
//   output.textContent = num1 / num2
// }
// function Multiply(){
//   output.textContent = num1 * num2
// }
// --------------------------------------- 
// section 2 finished --------------------
// ---------------------------------------

// chalange 3-1

// let firstCard = 4
// let secondCard = 17
// let sum = firstCard + secondCard

// if (sum < 21) {
//   console.log("Do you want to draw a new card?")
// }else if(sum === 21){
//   console.log("you got blackjack!")
// }else {
//   console.log("youre out the game!")
// }
// --------------------------------

// chalange 3-2 

// let age = 12

// if(age > 21){
//   console.log("Welcome")
// }else {
//   console.log("you can not enter the club!")
// }

// -------------------------------

// chalange 3-3


// let me = ["atabak jamshidi", 24, true]

// let messages = [
//   "hey how is going on ?",
//   "I'm greate, thank you! how about you?",
//   "All good. i learn js"
// ]
// let newMessage = "same here!"

// messages.push(newMessage)

// console.log(messages)
// for (let count = 10; count < 101; count+=10) {
//   console.log(count);

// }
// let sentence = ["Hello", "my", "name", "is", "ata"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " "

// }

// -------------------------------
// chalange 3-4

// let hasCompletedCourse = false
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
  
// }

// function generateCertificate() {
//   console.log("Generating certificate...");
// }

// let hasSolveChalange = false
// let hasHintsLeft = false

// if (hasSolveChalange === fatruelse && hasHintsLeft === flase) {
//   console.log("Showing the solution ...");
// }


// -------------------------------
// chalange 3-5
// let person = {
//   name: "atabak",
//   family: "jamshidi",
//   age: 24,
//   bio: function(){
//     console.log("hey, may name is " + person.name + "and " + person.age + " years old");
//   }
// }
// person.bio()


// -------------------------------



let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

let player = {
  name: "ata",
  chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// random number generator function
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  }
  return randomNumber
}


function startGame() {
  isAlive = true
  renderGame()
}


// game generator 
function renderGame() {

  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "

  }

  document.getElementById("sum-el").textContent = "Sum: " + sum

  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "you got blackjack!"
    hasBlackJack = true
  } else {
    message = "youre out the game!"
    isAlive = false
  }

  console.log(message);
  console.log(isAlive);
  // cash out 
  console.log(hasBlackJack)
  messageEl.textContent = message
}

// take new card
function newCard() {
  console.log("newCard");

  if (isAlive === true) {
    let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
  }
  
}

