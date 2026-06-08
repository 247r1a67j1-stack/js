// array

const myArr=[0,1,2,3,4,5]
// JS arrays are resizable
//array elements cannot be accessed using aribitary strings
// shallo copy-properties sharing same referennces
// deep copy -do not share same properties

const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);

//methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//unshift-inserts at first
//myArr.shift()
//shift-pops at first

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr=myArr.join()

//console.log(myArr);
//console.log(typeof newArr);

///////////SLICE,SPLICE//////////

console.log("A ",myArr);


const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
//slice-doesnt include last range
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);
//here the array changes array elements arre except splice elements
//splice-include last range





