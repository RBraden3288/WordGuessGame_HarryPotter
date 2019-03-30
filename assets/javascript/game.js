// var pageAlert= alert("Press any key to start Mr. Potter!");

// VARIABLES

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var words = [
    "harrypotter", 
    "hermionegranger",
    "ronweasley",
    "lordvoldemort",
    "albusdumbledore",
    "severussnape",
    "gryffindor",
    "slytherin",
    "ravenclaw",
    "hufflepuff"
]

// SET UP METHOD THAT GENERATES RANDOM WORD
var randomWord = words[Math.floor(Math.random() * words.length)];

// INITIATE A VARIABLE THAT RETURNS randomWord HIDDEN BY "_"
var hiddenArray = [];
    for (var i = 0; i < randomWord.length; i++) {
        hiddenArray[i] = "_";
    }

// // AN ARRAY THAT LOOPS THROUGH ALL THE LETTERS
var letterButtons = letters.length;


// RETURNS AN INDEX OF 27
for (var i = 0; i < letterButtons; i++) {
    console.log(letterButtons[i]);
}

// CREATE A FUNCTION THAT STARTS GAME WITH ANY KEY PRESSED
document.onkeyup = function(event) {

    // CONVERTS KEY TO LOWER CASE
    var letter = event.key.toLowerCase();

    // INITIATE GAME WITH RANDOM word DISPLAYED BY A hiddenArray
    document.getElementById("wordBank").innerHTML= hiddenArray;
}
    // if (randomWord ===  ) {

    // }

    

// var letters = function(){
//     for (i = 0; i < letters.length; i++) {

//             // create a key detection that starts Game
//     document.onkeyup = function(event) {
            
//         // Determines which key was pressed and defaults it to upper case
//         var letters = event.key.toLowerCase();

//         // game initiates with random word chosen from words
//         var randomWord = words[Math.floor(Math.random() * oscarWinners.length)];

//         // oscarWinners field is filled with underscores that correspond to number of letters assoc.
//         // index of i corresponds to underscores for each field missing
//         var hiddenArray = [];
//         for (var i = 0; i < randomWord.length; i++) {
//             hiddenArray[i] = "_";
//         }

//         // if letter chosen is correct then fill in underscore
//         // Creates a new variable with correct letters
//         var remainingLetters = randomWinner.length;