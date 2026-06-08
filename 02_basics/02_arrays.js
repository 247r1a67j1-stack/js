const marvel_heros=['nvdh',"ironman","spiderman"]
const dc_heros=["cndbu","eihrnw","ciejr"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_Heros=[...marvel_heros,...dc_heros]
//console.log(all_new_Heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray=anotherArray.flat(Infinity)
//console.log(realArray);



//console.log(Array.isArray("srujana"));
//console.log(Array.from("srujana"));
//console.log(Array.from({name:"srujana"})); //returns empty string because it doesnt know what to take as array a key or value?


let score1=100
let scor2=200
let score3=300

console.log(Array.of(score1,scor2,score3));



