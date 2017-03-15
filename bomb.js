// "use strict";

var answers = ["about",	"after", "again",	"below",	"could", "every",	"first",	"found",	"great",	"house", "large",	"learn",	"never",	"other",	"place", "plant",	"point",	"right",	"small", "sound", "spell",	"still",	"study",	"their",	"there", "these",	"thing",	"think",	"three",	"water", "where",	"which",	"world",	"would",	"write"];

var first = "";
var second = "";
var third = "";
var fourth = "";
var fifth = "";
var total = [];

$('#passwords-1st-letters').keyup(function() {first = $(this).val();
  for (i = 0; i < answers.length; i++) {
    if (first.indexOf(answers[i][0]) >= 0) {
      console.log(answers[i]);
      if (total.indexOf(answers[i]) > -1) {
        console.log(total);
        total.push(answers[i]);
        $('#passwords-answer').text(total);
      };
    };
  };
});
$('#passwords-2nd-letters').keyup(function() {second = $(this).val();});
$('#passwords-3rd-letters').keyup(function() {third = $(this).val();});
$('#passwords-4th-letters').keyup(function() {fourth = $(this).val();});
$('#passwords-5th-letters').keyup(function() {fifth = $(this).val();});

for (i = 0; i < answers.length; i++) {
  if (first.indexOf(answers[i][0]) >= 0) {
    $('#passwords-answer').text(answers[i]);
  };
};
