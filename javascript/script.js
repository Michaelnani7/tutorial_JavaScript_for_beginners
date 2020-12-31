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

// Challenge 2: Cat Generator Project

function GenerateCat() {
  let img = document.createElement("img");
  //Generate random image
  img.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";

  document.getElementById("flex-cat-generate").appendChild(img);
  console.log(document.getElementById("flex-cat-generate"));
  console.log(randomToRpsInt());
}

// Challenge 3:  rock paper Scissors Project

function rpsGame(yourChoice) {
  let humanChoice = yourChoice.id;
  // console.log(humanChoice);

  let botChoice = numberToChoice(randomToRpsInt());
  console.log("Computer Choice " + botChoice);

  let result = decideWinner(humanChoice, botChoice);
  // console.log(result);

  /* {"message" : "you won", "color" : "green"} */
  let message = finalMessage(result);
  // console.log(message);

  rpsfrontEnd(yourChoice.id, botChoice, message);
}

// Generate random number

function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
  const rpsDataBase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };

  // console.log(rpsDataBase[yourChoice][computerChoice]);
  // console.log(rpsDataBase[computerChoice][yourChoice]);

  let yourScore = rpsDataBase[yourChoice][computerChoice];
  let computerScore = rpsDataBase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage(yourScore, computerScore) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied! ", color: "yellow" };
  } else {
    return { message: "You Won! ", color: "green" };
  }
}

function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDataBase = {
    rock: document.getElementById("rock").src,
    scissor: document.getElementById("scissor").src,
    paper: document.getElementById("paper").src,
  };

  //let remove all the images onclick
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src ='" +
    imagesDataBase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0 10px 50px rgba(0, 0, 0, 0.7)'>";

  messageDiv.innerHTML =
    "<h1 style= 'color:" +
    finalMessage["color"] +
    ";font-size:50px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";

  botDiv.innerHTML =
    "<img src ='" +
    imagesDataBase[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0 10px 50px rgba(255, 23, 0, 0.7)'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
