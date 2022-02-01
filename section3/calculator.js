function calculate(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter the number 1: "));
    console.log(num1);
    let num2=Number(prompt("Enter the number 2: "));
    console.log(num2);
    //display the sum 
    let sum
    let subs
    let mult
    let div
    sum=num1+num2;
    subs=num1-num2;
    mult=num1*num2;
    div=num1/num2;
    console.log(sum);
    document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num1} - ${num2} = ${subs}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>`
    //display subrtraction
    subs=num1-num2;
    console.log(subs);
    //display mulitiplication
    mult=num1*num2;
    console.log(mult);
    //display division
    div=num1/num2;
    console.log(div);
    
}
