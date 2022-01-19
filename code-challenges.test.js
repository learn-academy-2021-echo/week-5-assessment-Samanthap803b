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

// describe("strCode", () =>{
//   it("return a code message,The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
//     const secretCodeWord1 = "Lackadaisical"
//     const secretCodeWord2 = "Gobbledygook"
//     const secretCodeWord3 = "Eccentric"
//  expect(strCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//  expect(strCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//  expect(strCode(secretCodeWord3)).toEqual("3cc3ntr1c")
//   })
// })
// // My test fail i got RED
// // b) Create the function that makes the test pass.
// // Now i have to create a function that is going to make my test pass.
// // First i have to declare my variable strCode.
// // After that i want to use conditionals my plan is to use .include to find the letters that i want to .replace
// // In my if statement i want to say that if my string have "aAeEiIoO" in my new
// const strCode = (string)=>{
//   if (string.includes("aA") ||("eE")||("iI")||("oO")){
//     var newStrCod = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
//   }
//   return newStrCod
// }
//Its Green
// IT tok me alont time to do this in my line 46 i was using let to declare my new variable but it wasent working I still dont know how is working with var.
// The only reason i can think of is because my original value is const I check and that is not the reason im doing something wrong but I cant find it.
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]

const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("justAorE", () =>{
it("returns all the words that contain that particular letter a or e", () =>{
const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
expect(justAorE(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
expect(justAorE(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
})
 })
// My test fail now im going to try to make it pass.
// b) Create the function that makes the test pass.
//First im going to declare my variable justAorE and i want to use .filter
//with this i want .filter to go in my array and just return what i need.
//i think im going to use .include to tell what i need.

const justAorE = (array, string) => {
  let newAr = array.filter ..........

  


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
