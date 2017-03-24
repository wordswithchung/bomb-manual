// "use strict";

var answers = ["about",	"after", "again",	"below", "could", "every",	"first",	"found",	"great",	"house", "large",	"learn",	"never",	"other",	"place", "plant",	"point",	"right",	"small", "sound", "spell",	"still",	"study",	"their",	"there", "these",	"thing",	"think",	"three",	"water", "where",	"which",	"world",	"would",	"write"];
var l = ["", "", "", "", ""];

var l1 = document.getElementById('pw-letters-1');
var l2 = document.getElementById('pw-letters-2');
var l3 = document.getElementById('pw-letters-3');
var l4 = document.getElementById('pw-letters-4');
var l5 = document.getElementById('pw-letters-5');

function addLetters() {
  if (l1.value !== null) {l[0] = l1.value;};
  if (l2.value !== null) {l[1] = l2.value;};
  if (l3.value !== null) {l[2] = l3.value;};
  if (l4.value !== null) {l[3] = l4.value;};
  if (l5.value !== null) {l[4] = l5.value;};
  console.log(l);
  getAnswers();
}

function getAnswers() {
  var isPopulated = [];
  for (i = 0; i < l.length; i++) {
    if (l[i].length > 0) {
      isPopulated[i] = true;
    } else {
      isPopulated[i] = false;
    }
  }

  var lMap = {}
  for (m = 0; m < l.length; m++) {
    if (l[m].length > 0) {
      lMap[m] = l[m];
    }
  }

  // loop through the dictionary with each word
  // each key is required

  for (a = 0; a < lMap.length; a++) {
    for (j = 0; j < answers.length; j++) {
      if (answers[j])
    }
  }


  for (j = 0; j < answers.length; j++) {
    for (k = 0; k < l.length; k++) {

    }
    if ()

    }

  }
}

function getAnswers(letterIndex) {
  for (i = 0; i < answers.length; i++) {
    if ( && (temp.indexOf(answers[i]) < 0)) {
      temp.push(answers[i]);
      console.log(temp);
    }
  }
}

function displayAnswers() {
  // for (i = 0; i < temp.length; i++) {
  //   if ()
  $("#passwords-answers").text(temp);
}
