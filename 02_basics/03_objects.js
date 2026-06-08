//objects
//singleton
//object.create


//objects literals


const mySym=Symbol("key1")
const JsUser={
    name: "Hitesh",
    age: 20,
    [mySym]: "mykey1",
    location: "Hyd",
    email: "dshbur@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}



//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);
//console.log(typeof JsUser.mySym);

JsUser.email="cdbjs@gmail.com"
Object.freeze(JsUser)
JsUser.email="csbja@gmail.com"
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello Js user");
    
}

JsUser.greeting2=function(){
    console.log(`hello Js user,${this.name}`);
    
}

console.log(JsUser.greeting)
console.log(JsUser.greeting2);




