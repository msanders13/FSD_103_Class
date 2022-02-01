function sayHello(name,place){
    //body of function creation/declaration
    console.log("Hello " + name + "from " + place);
    let template = `<h2>Hello ${name} from <span class="place">${place}</span></h2>`;
    return template;
}
document.write(sayHello("Mark","USA"));
//calls created/declared function in lines 1-4^
document.write(sayHello("April","USA"));
document.write(sayHello("Arturo","Mexico"));
document.write(sayHello("Variable","Variable"));