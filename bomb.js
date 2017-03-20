// "use strict";

var answers = ["about",	"after", "again",	"below",	"could", "every",	"first",	"found",	"great",	"house", "large",	"learn",	"never",	"other",	"place", "plant",	"point",	"right",	"small", "sound", "spell",	"still",	"study",	"their",	"there", "these",	"thing",	"think",	"three",	"water", "where",	"which",	"world",	"would",	"write"];
var letters = ["", "", "", "", ""];

var l1 = document.getElementById('pw-letters-1');
var l2 = document.getElementById('pw-letters-2');
var l3 = document.getElementById('pw-letters-3');
var l4 = document.getElementById('pw-letters-4');
var l5 = document.getElementById('pw-letters-5');

function addLetters() {
  if (l1.value !== null) {letters[0] = l1.value};
  if (l2.value !== null) {letters[1] = l2.value};
  if (l3.value !== null) {letters[2] = l3.value};
  if (l4.value !== null) {letters[3] = l4.value};
  if (l5.value !== null) {letters[4] = l5.value};
  console.log(letters);
  displayAnswers();
}


function displayAnswers() {
  var final = [];
  for (i = 0; i < answers.length; i++) {
    if (letters[0].includes(answers[i][0])) {
      final.push(answers[i]);
    }
  }

  $("#passwords-answers").text(final);
}
