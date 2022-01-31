// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

// Psuedo code: Im going to start with describing my function what strCode .
// After i write my "it" here Im goin to write what i want in return is my string to return in code.
// after this i write my expect what i want in return expecifically. My output.

describe("strCode", () =>{
  it("return a code message,The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
 expect(strCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
 expect(strCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
 expect(strCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// // My test fail i got RED
// // b) Create the function that makes the test pass.
// // Now i have to create a function that is going to make my test pass.
// // First i have to declare my variable strCode.
// // After that i want to use conditionals my plan is to use .include to find the letters that i want to .replace
// // In my if statement i want to say that if my string have "aAeEiIoO" in my new
const strCode = (string)=>{
  if (string.includes("aA") ||("eE")||("iI")||("oO")){
    var newStrCod = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
  }
  return newStrCod
}
//Its Green
// IT tok me alont time to do this in my line 46 i was using let to declare my new variable but it wasent working I still dont know how is working with var.
// The only reason i can think of is because my original value is const I check and that is not the reason im doing something wrong but I cant find it.
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.


// Expected output: ["Apple", "Banana", "Orange"]


// Expected output: ["Cherry", "Blueberry", "Peach"]

 describe("justAor", () => {
  it("returns all the words that contain that particular letter a or e", () =>{
   let arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
   let letterA = "a"
   let arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
   let letterE = "e"
    expect(justAor(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(justAor(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
   })
  })
// My test fail now im going to try to make it pass.
// b) Create the function that makes the test pass.
//First im going to declare my variable justAorE and i want to use .filter
//with this i want .filter to go in my array and just return what i need.
//i think im going to use .includes to tell what i need.
// I think i am almost there and the only reason this didnt work is because
// I im asking for my two variables i enter that hard code so i have to do it dimanic so i can be able to have my two answers.

// const justAor = (array, letter) => {
//   let newJustAorE = array.filter(value=> {
//     return value.includes('a','e') || value.includes('A','E')
//
//   })
//       return newJustAorE
 // }
 const justAor = (array, letter) => {
   let newJustAorE = array.filter(value=> {
     return value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase())

   })
       return newJustAorE
  }
// wiiiiiiii finally i finish this and is Greennnnnnnnnnn!
// I coudent undestand the reason why i keep getting the same answer was because i had the same expect output and i didnt notice .

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//I am going to start with describe im going to write my function fullHouse.
//After that i have to write "it" here im going to write exactly what i want in return.
//In my expect i woing to write what i want in return.
describe("fullHouse", () =>{
 let hand1 = [5, 5, 5, 3, 3]
 let hand2 = [5, 5, 3, 3, 4]
 let hand3 = [5, 5, 5, 5, 4]
 it("take in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
  expect(fullHouse(hand1)).toEqual(true)
  expect(fullHouse(hand2)).toEqual(false)
  expect(fullHouse(hand3)).toEqual(false)
 })
})


// //b) Create the function that makes the test pass.
//First im going to declare my variable fullHouse
const fullHouse = (array) => {
 let newAr = array......
   if((i[0]=== i[1] && i[1]=== i[2] && i[2] === i[3])){
     return true
   }
    else{
     return false
 }
}
//So this didnt work i was trying to go throw my array but i still dont know what to use if .map just to tell me if my index are the same.
// i wanted to see if my index 0,1 and 3 were the same then return true if not return false but im stuck.
// Expected output: true
// Expected output: false
// Expected output: false
