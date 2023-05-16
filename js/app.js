
// phase 1
function phaseOne(){
let fullName = prompt("Please enter your name");
let gender = prompt("Please enter your gender " + "Male or Female");
let age = prompt("Please enter your age");
if (age <= 0){
alert ("Please enter right age.");
}
if (!(confirm ("Do you want skip the welcoming message?"))){

if (gender == "Male"||gender=="male"){
    alert("Welcome Mr " + fullName);
}
else if (gender == "Female"||gender=="female"){
    alert("Welcome Ms " + fullName);
}
}
}
//  phase 2

let arr =[];
function phaseTwo(){
let firstInbut = prompt ("Are you LTUC member? " + "(Please answer by Yes or No only)");
if(firstInbut==""||firstInbut==null){
    firstInbut = "invalid";
}
arr.push(firstInbut);
let secondInbut = prompt ("Are you a student? " + "(Please answer by Yes or No only)");
if(secondInbut==""||secondInbut==null){
    secondInbut = "invalid";
}
arr.push(secondInbut);
let thirdInbut = prompt ("Are you finished your tasks? " + "(Please answer by Yes or No only)");
if(thirdInbut==""||thirdInbut==null){
    thirdInbut = "invalid";
}
arr.push(thirdInbut);
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}

phaseOne();
phaseTwo();