// Challenge 1: Your Age in Days Project

function ageInDays(params) {
  const birthYear = prompt("in which year were you born .. dear frind");
  const YourAgeInDays = (2020 - birthYear) * 365;
  const h2 = document.createElement("h2");
  const textAnswer = document.createTextNode(
    "You are now " + YourAgeInDays + "days"
  );
  h2.setAttribute("id", "YourAgeInDays");
}
