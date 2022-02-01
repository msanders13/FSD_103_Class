let hunger=80;
let happiness=50;
let energy=40;
function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`🍽️ ${hunger}`; //useemojipedia for icons where JS-Hunger is or in HTML on Feed button
    document.getElementById("happinessInfo").innerHTML=`👋 ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`🏃‍♂️ ${energy}`;
}
function feed(){
    console.log("Feed function");
    hunger=hunger-10;
    happiness=happiness+10;
    //affect variables +happiness and -hunger 10
    //call the displayInfo function
    //if statement to prevent numbers from going negative
    //add style to page
    displayInfo();
}

function pet(){
    console.log("pet function");
    //increase happiness
    energy=energy+10;
    happiness=happiness+5;
    displayInfo();
}

function play(){
    console.log("play function")
    hunger=hunger+10;
    energy=energy-10;
    displayInfo();
}
displayInfo();