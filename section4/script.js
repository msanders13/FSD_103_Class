console.log("Script")

let traveling = function (){
    let city = document.getElementById("txtCity").value;
    document.getElementById("travels").innerHTML+=`<li>Traveling to ${city}</li>`;
}
