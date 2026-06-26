let myName="srujana  "
//console.log(myName.trueLength());

let myHeros=["thor","spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`)
}
//heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
//inheritance
const User={
    name: "chai",
    email: "shao@gmailc.pom"
}
const Teacher={
    makeVedio: true
}
const TeachingSupport={
    isAvailable: false
}
const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode      "
String.prototype.trueLength=function(){
    console.log(`${this}`); 
    //console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()