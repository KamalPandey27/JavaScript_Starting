let marvel_hero = ["IronMan", "Thor", "SpiderMan", "CaptainAmerica"];
let DC_Hero = ["SuperMan", "Batman", "Flash"];

let AllHeroes = marvel_hero.concat(DC_Hero);
// console.log(AllHeroes)

//Another Best method to concat a array

let AllHeroesNew = [...marvel_hero, ...DC_Hero];
console.log(AllHeroesNew);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; //How we can deal with this type of array

const realarray = another_array.flat(Infinity);
// console.log(realarray)

let myname = "KAMAL";
// we convert this type of string in array
let mynamea = Array.from(myname);
// console.log(mynamea)

let a = 2;
let b = 4;
let c = 9;

// console.log(Array.isArray(mynamea)) //To determine is this is array or not

let array = Array.of(a, b, c); //Combine all variable and create a array
console.log(array);
