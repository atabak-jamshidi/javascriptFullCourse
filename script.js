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

count = 0
countEl = document.getElementById("count-el")
function increment(){
  count++
  countEl.innerText = count;
}
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

let welcomeEl = document.getElementById("welcome-el");
// welcomeEl.innerText = myGreetings

function save(){
    let sperator = count + " - "
    welcomeEl.textContent += sperator
    countEl.innerText = 0
    count = 0
  }