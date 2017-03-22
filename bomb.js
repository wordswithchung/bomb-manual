// "use strict";

var answers = ["about",	"after", "again",	"below",	"could", "every",	"first",	"found",	"great",	"house", "large",	"learn",	"never",	"other",	"place", "plant",	"point",	"right",	"small", "sound", "spell",	"still",	"study",	"their",	"there", "these",	"thing",	"think",	"three",	"water", "where",	"which",	"world",	"would",	"write"];
var l = ["", "", "", "", ""];
var temp = [];
var final = [];

var l1 = document.getElementById('pw-letters-1');
var l2 = document.getElementById('pw-letters-2');
var l3 = document.getElementById('pw-letters-3');
var l4 = document.getElementById('pw-letters-4');
var l5 = document.getElementById('pw-letters-5');

function addLetters() {
  if (l1.value !== null) {l[0] = l1.value; getAnswers(0);};
  if (l2.value !== null) {l[1] = l2.value; getAnswers(1);};
  if (l3.value !== null) {l[2] = l3.value; getAnswers(2);};
  if (l4.value !== null) {l[3] = l4.value; getAnswers(3);};
  if (l5.value !== null) {l[4] = l5.value; getAnswers(4);};
  console.log(l);
  displayAnswers();
}

function getAnswers(letterIndex) {
  for (i = 0; i < answers.length; i++) {
    if (l[letterIndex].includes(answers[i][letterIndex]) && (temp.indexOf(answers[i]) < 0)) {
      temp.push(answers[i]);
      console.log(temp);
    }
  }
}

function displayAnswers() {
  // for (i = 0; i < temp.length; i++) {
  //   if ()
  $("#passwords-answers").text(final);
}
