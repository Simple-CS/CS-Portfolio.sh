var button = document.getElementById("button");
var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");
var vid5 = document.getElementById("vid5");
var display = document.getElementById("display");

var myArray = ["vid1","vid2","vid3","vid4","vid5"];

button.addEventListener("click",function(){
    
});


function randomMath(){
    Math.floor(Math.random()*myArray.length);

if (myArray.value == "vid1"){
    display.innerHTML = "Please display something";
}
if (myArray.value == "vid2"){
    display.innerHTML = "Lol";
}
if (myArray.value == "vid3"){
    display.innerHTML = "Why me???";
}
if (myArray.value == "vid4"){
    display.innerHTML = "Kek";
}
if (myArray.value == "vid5"){
    display.innerHTML = "BRB, there is a bridge that needs my attention.";
    }
}
// JavaScript File