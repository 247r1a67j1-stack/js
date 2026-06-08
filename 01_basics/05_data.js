// primitve (call by value)

// 7 categories: String,Number,boolean,null,undefined,Symbol(unique),bigInt

const score=100

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);



// reference type(non premitive)

// Arrays,Objects,Functions

//arrays
const heros=["shak","nag","dog"];

//object
let myObj={
    name: "hitec",
    age: 2
}
//functioms

const myFunction=function(){
    console.log("Hello World");
    
}

