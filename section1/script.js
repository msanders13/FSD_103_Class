console.log("Script");
let _="Please select OK if you want to be bored by facts about me"//text of alert with _ 
alert(_)//_ and $ can be used
let client="Guest,";//using var is old let is preferred const is unchanging variable
let age=99;//1st instance of let age=
const URL="https://www.youtube.com/channel/UC2Qc-cv36vIj7uu94ezQggA/iot"//this lists individually
age=47;//second let age= that took over
console.log(client);
console.log(age);
console.log(URL);
console.log("Please, " + client + "visit the site:" + URL);

let jobTitle="Developer";
let geoLocation="Monroe Wisconsin";
let partnerName="Kelly Johnson";
let numberChildren="5";
let numberPets=2+1;//using addition of integers
let numberDogs=2;//using integer
const numberCats="1";//variable alt const value never changes
let petNames="Zeus, Gracie, and Groucho";
let moveTo="near the ocean"
let shovel="shovel snow"

console.log(`I will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} With ${numberChildren} kids `);
//template string
document.write(`Please, ${client} visit the site: `);
console.log(`I have ${numberPets} animals, ${numberDogs} dogs and ${numberCats} cat. Their names are ${petNames}. ` );
// var colors = new Array( 'thing 0', 'thing 1' 'thing 2' ); newer better way is to go colors.push('thing');
console.log(`I would like to move ${moveTo} so that I don't have to ${shovel} ever again.`);
document.write(``)

