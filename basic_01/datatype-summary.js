//# Primitive - call by value
//type : String, Number, Boolean, null, bigInt, undefined, Symbol

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTem = null
let userName;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 25465544554458585522n

// console.log(id === anotherId)
// console.log(bigNumber)


// # Reference(Non Primitive) - call by Reference
// type : Arry, Object, Functions
const heros = ["shaktiman", "naagraj", "doga"] //arry
// {
//     name:"Mahasin",
//     age:33,
//     email:"mahasin@demo.com"
// } object 
//console.log(heros)



// let myObj = {
//     name:"Mahasin",
//     age:33,
//     email:"mahasin@demo.com"
// } object width vatiable 
//console.log(myObj)



// function(){} - Function
const myFunction = function(){
    console.log("Demo")
}
console.log(typeof myFunction)

