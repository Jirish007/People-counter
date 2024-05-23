
let count = 1;

var show = document.querySelector("#display");
function increment() {
var button = document.querySelector("#button");

if(button.style.backgroundColor = "red"){
    button.style.backgroundColor = "red";
}
    var currentcount = show.innerHTML = count;
count++;
};
function save(elem) {
var current = document.querySelector('#current');
current.textContent += count - 1 + " ||";
if(elem == 2) {
  count = 0;
  show.innerHTML = count;
  //reminds me of the chrome extension app
  count++;
}
else{return false}
}
/*function looping() {
  var value = "#";
  var counter = 10;
  for(counter; counter > value.lenght; counter++) {
    console.log(value);
  }

}
looping();*/
/*function Fizzbuzz() {
var limit = 100;
var number = 0;
for(number; number < 100; number++) {
  console.log(number);
  if(number % 3) {
console.log("Fizz");
  }
  else if(number % 5) {
console.log("Buzz");
  }
  else if( number % 5 && number % 3) {
    console.log("fizzbuzz");
  }
}
};
Fizzbuzz();*/
/*var number = 0;
function savevalue() {
var grab = document.querySelector("#save");
//when we click the button allows us to keep permanently pasting our number to our html document
number++;
grab.innerHTML += number;
};*/
var Firstcard = 5;
var SecondCard = 11;
var sum = Firstcard  + SecondCard;