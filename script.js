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
  let num1 = 8
  let num2 = 2

  document.getElementById("num1-el").textContent = num1
  document.getElementById("num2-el").textContent = num2
let output = document.getElementById("output-el")
function Add(){
  output.textContent = num1 + num2
}
function Subtract(){
  output.textContent = num1 - num2
}
function Devide(){
  output.textContent = num1 / num2
}
function Multiply(){
  output.textContent = num1 * num2
}

