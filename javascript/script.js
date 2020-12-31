// Challenge 1: Your Age in Days Project

function ageInDays(p) {
  const birthYear = prompt("in which year were you born .. dear frind");
  const YourAgeInDays = (2020 - birthYear) * 365;
  const h2 = document.createElement("h2");
  const textAnswer = document.createTextNode(
    "You Are now " + YourAgeInDays + " days"
  );
  h2.setAttribute("id", "YourAgeInDays");
  h2.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h2);
}

function restAge() {
  document.getElementById("YourAgeInDays").remove();
}

// Challenge 1: Cat Generator Project

function GenerateCat() {
  let img = document.createElement("img");
  //Generate random image
  img.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";

  document.getElementById("flex-cat-generate").appendChild(img);
  console.log(document.getElementById("flex-cat-generate"));
  console.log(randomToRpsInt());
}

// Challenge 3:  Rock Paper Scissors Project

function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  // humanChoice = yourChoice.Id;
  // botChoice
  // result =
}

console.log(randomToRpsInt());
function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}
