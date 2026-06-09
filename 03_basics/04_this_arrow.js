// this and arrow function

const user={
    username:"srujana",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}

//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

//this->current context

//console.log(this);


//function chai(){
  //  let username="srujana"
    //console.log(this.username); /////
    
//}
//chai()

//const chai=function(){
  //  let username="srujana"
    //console.log(this.username);
//}
//chai()

//const chai=()=>{
  // let username="srujana"
   //console.log(this);
//}
//chai()

//const addTwo=(num1,num2)=> num1+num2 //implicit no need of return
//const addTwo=(num1,num2)=> {
  //  return num1+num2
//} //explicit needs return

const addTwo=(num1,num2)=> ({username: "hitesh"})


console.log(addTwo(3,4));

//const myArray=[2,3,5,3,3,5]
//myArray.forEach(()=>())



