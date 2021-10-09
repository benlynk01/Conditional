var firstInteger = document.body.querySelector(".intOne");
var secondInteger = document.body.querySelector(".intTwo");
var operator = document.body.querySelector(".sign");
var output = document.body.querySelector(".answer");

var question1 =Number(prompt("Please enter an integer."));

if (isNaN(question1)){
    firstInteger.innerHTML="Error: You must enter an integer. Bye bye";
}
else{
    firstInteger.innerHTML="Step 1 complete"
}

var question2 = (prompt("Enter an operator. Ex: +,-,/,*"));

if (question2 == "+" || question2 == "-" || question2 == "/" || question2 == "*"){
    operator.innerHTML = "Step 2 complete";
}
else {
    operator.innerHTML = "Error: You must enter one of the valid operator. See ya later";
}

var question3 = Number(prompt("Please enter another integer"));

if (isNaN(question3)){
    secondInteger.innerHTML = "Error: You must enter an integer. Deuces";
}
else{
    secondInteger.innerHTML = "Step 3 complete";
}

if (question2 == "+"){
    output.innerHTML = question1+question3;
}
else if (question2 == "-"){
    output.innerHTML = question1-question3;
}
else if (question2 == "/"){
    output.innerHTML = question1/question3;
}
else if (question2 == "*"){
    output.innerHTML = question1*question3;
}