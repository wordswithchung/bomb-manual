// "use strict";

var answers = ["about",	"after", "again",	"below", "could", "every",	"first",	"found",	"great",	"house", "large",	"learn",	"never",	"other",	"place", "plant",	"point",	"right",	"small", "sound", "spell",	"still",	"study",	"their",	"there", "these",	"thing",	"think",	"three",	"water", "where",	"which",	"world",	"would",	"write"];
var l = ["", "", "", "", ""];
var temp = [];

var l0 = document.getElementById('pw-letters-0');
var l1 = document.getElementById('pw-letters-1');
var l2 = document.getElementById('pw-letters-2');
var l3 = document.getElementById('pw-letters-3');
var l4 = document.getElementById('pw-letters-4');

function addLetters() {
  if (l0.value !== null) {l[0] = l0.value; getAnswers(0);};
  if (l1.value !== null) {l[1] = l1.value; getAnswers(1);};
  if (l2.value !== null) {l[2] = l2.value; getAnswers(2);};
  if (l3.value !== null) {l[3] = l3.value; getAnswers(3);};
  if (l4.value !== null) {l[4] = l4.value; getAnswers(4);};
  console.log(l);
}

function getAnswers(letterIndex) {
  if ( l[letterIndex].length > 0 ) {loopThroughAnswers(letterIndex);}
  checkLetters();
}

function checkLetters() {
  var count = 0;
  for (i = 0; i < l.length; i++) {
    if (l[i].length > 0) {count += 1;}
  }
  console.log("This is count " + count);
  if (count > 2) {makeNewTemp();}
}

function makeNewTemp() {
  tempTemp = Array.from(temp);
  for (i = 0; i < temp.length; i++) {
    console.log("This is makeNewTemp()" + temp[i]);
    if ( (l[0].length > 0) && !l[0].includes(temp[i][0]) ) {tempTemp.pop(temp[i]);}
    if ( (l[1].length > 0) && !l[1].includes(temp[i][1]) ) {tempTemp.pop(temp[i]);}
    if ( (l[2].length > 0) && !l[2].includes(temp[i][2]) ) {tempTemp.pop(temp[i]);}
    if ( (l[3].length > 0) && !l[3].includes(temp[i][3]) ) {tempTemp.pop(temp[i]);}
    if ( (l[4].length > 0) && !l[4].includes(temp[i][4]) ) {tempTemp.pop(temp[i]);}
    console.log("This is tempTemp " + tempTemp);
    }

  displayAnswers(tempTemp);
  }

function loopThroughAnswers(letterIndex) {
  for (i = 0; i < answers.length; i++) {
    if (l[letterIndex].includes(answers[i][letterIndex]) &&
        !temp.includes(answers[i])) {
      temp.push(answers[i]);
    }
  }
}

function displayAnswers(temp) {
  $("#passwords-answers").text(tempTemp);
}
