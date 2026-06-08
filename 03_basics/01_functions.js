//functions

function sayMyName(){
   console.log("H");
   console.log("I");
   console.log("T");
}

//sayMyName()

//function addTwonumbers(number1,number2){
//  console.log(number1+number2);
    
//}

function addTwonumbers(number1,number2){
    //let result=number1+number2
    //return result
    //return number1+number2
}


const result=addTwonumbers(3,5)
//console.log("result: ",result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage())


