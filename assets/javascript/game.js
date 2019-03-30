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
var userGuesses = [];
var guessesRemaining = 10;
var letterGuess =[];

// SET UP METHOD THAT GENERATES RANDOM WORD
var randomWord = words[Math.floor(Math.random() * words.length)];

// // AN ARRAY THAT LOOPS THROUGH ALL THE LETTERS
var letterButtons = letters.length;

// RETURNS AN INDEX OF 27
for (var i = 0; i < letterButtons.length; i++) {
    // console.log(letterButtons[i]);
}

// CREATE A FUNCTION THAT STARTS GAME WITH ANY KEY PRESSED
document.onkeyup = function(event) {

    // CONVERTS KEY TO LOWER CASE
    var letter = event.key.toLowerCase();
    // console.log(letter);

    //PUSHES ALL LETTERS REGARDLESS OF REPEAT
    // userGuesses.push(letter);
    
    //.INCLUDES MEHTOD TO DETECT CHAR REPEAT
    if (userGuesses.includes(letter)=== false){
        userGuesses.push(letter);
        // console.log(userGuesses);
        //SUBTRACT A GUESS FROM guessesRemaining USING DECREMENT 
        guessesRemaining--;
        // console.log(guessesRemaining);
        //INSERTS GUESSES REMAINING VAR INTO HTML DOC
        $("#guessesRemaining").text("Guesses Remaining " + guessesRemaining)
        $("#lettersChoice").text("Letters Guessed: " + userGuesses);
    }
    

    // INITIATE A VARIABLE THAT RETURNS randomWord HIDDEN BY "_"
    var hiddenArray = [];
    for (var i = 0; i < randomWord.length; i++) {
        hiddenArray[i] = "_ ";
        //UPDATE HIDDEN ARRAY FOR VALID GUESSES
        if (randomWord[i]=== letter) {
            hiddenArray[i]=letter;
            letterButtons--;
            //++ ENSURES guessesRemaining DOESN'T GO DOWN WITH CORRECT GUESS
            guessesRemaining++
            //DISPLAY A CORRECT GUESS BY REPLACING "_" WITH LETTER
            }
        }
    
    //ALLOWS LETTERS TO BE SHOWN WHILE GUESSES ARE VALID
    // GAME OVER
    if (guessesRemaining <= 0){
        alert("GAME OVER!");
        confirm("Refresh to try again?")    
    } 

    // INITIATE GAME WITH RANDOM word DISPLAYED BY A hiddenArray
    document.getElementById("wordBank").innerHTML= hiddenArray;
}
    