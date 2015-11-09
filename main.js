console.log("linked!");

// a  |  b  |  c  |  d  
// e  |  f  |  g  |  h
// i  |  j  |  k  |  l
// m  |  n  |  o  |  p

//define each sqr as its own var
var $squareA = $('#sqrA');
var $squareB = $('#sqrB');
var $squareC = $('#sqrC');
var $squareD = $('#sqrD');
var $squareE = $('#sqrE');
var $squareF = $('#sqrF');
var $squareG = $('#sqrG');
var $squareH = $('#sqrH');
var $squareI = $('#sqrI');
var $squareJ = $('#sqrJ');
var $squareK = $('#sqrK');
var $squareL = $('#sqrL');
var $squareM = $('#sqrM');
var $squareN = $('#sqrN');
var $squareO = $('#sqrO');
var $squareP = $('#sqrP');

// save front of card images to their own variables
var $wesley = $('.wesley');
var $buttercup = $('.buttercup');
var $fezzik = $('.fezzik');
var $inigo = $('.inigo');
var $bishop = $('.bishop');
var $max = $('.max');
var $rous = $('.rous');
var $vizzini = $('.vizzini');
var cardFronts = [$wesley, $buttercup, $fezzik, $inigo, $bishop, $max, $rous, $vizzini]; //array that stores the images for the front of cards
var $cardBack = $('.back'); //back of card when turned over

//have empty array of card pairs to push cards that have been clicked into
var pairs = [];
var clicks = 0; // how many times has the user clicked?
var matches = 0; //how many matches have been made
var firstCard; 
var secondCard;
var possibleMatches = 8;

var squares = [
    [$squareA, $squareB, $squareC, $squareD],
    [$squareE, $squareF, $squareG, $squareH],
    [$squareI, $squareJ, $squareK, $squareL],
    [$squareM, $squareN, $squareO, $squareP]
    ]; // first want to save all the squares to an array for reference
    //could just use the jquery selector instead of saving as variables to dry it up


// -- each character needs to be assigned to two cards in the deck*****
// first do uncover card functions and add which classes will be revealed BEFORE working on shuffling.
// -- if a user clicks a card, it should reveal the front of the card
var uncoverCardA = function(event){
  console.log(event);

  if ($squareA.hasClass('back')) {
      $squareA.removeClass('back');
      $squareA.addClass('bishop');
  }

  
};


var uncoverCardB = function(event){
  console.log(event);

  if ($squareB.hasClass('back')) {
      $squareB.removeClass('back');
      $squareB.addClass('wesley');
  }

  
};

var uncoverCardC = function(event){
  console.log(event);

  if ($squareC.hasClass('back')) {
      $squareC.removeClass('back');
      $squareC.addClass('wesley');
  } 
};

var uncoverCardD = function(event){
  console.log(event);

  if ($squareD.hasClass('back')) {
      $squareD.removeClass('back');
      $squareD.addClass('buttercup');
  } 
};

var uncoverCardE = function(event){
  console.log(event);

  if ($squareE.hasClass('back')) {
      $squareE.removeClass('back');
      $squareE.addClass('bishop');
  } 
};

var uncoverCardF = function(event){
  console.log(event);

  if ($squareF.hasClass('back')) {
      $squareF.removeClass('back');
      $squareF.addClass('vizzini');
  } 
};

$squareA.on('click', uncoverCardA);
$squareB.on('click', uncoverCardB);
$squareC.on('click', uncoverCardC);
$squareD.on('click', uncoverCardD);
$squareE.on('click', uncoverCardE);
$squareF.on('click', uncoverCardF);

var uncoverCardG = function(event){
  console.log(event);

  if ($squareG.hasClass('back')) {
      $squareG.removeClass('back');
      $squareG.addClass('inigo');
  } 
};

$squareG.on('click', uncoverCardG);

var uncoverCardH = function(event){
  console.log(event);

  if ($squareH.hasClass('back')) {
      $squareH.removeClass('back');
      $squareH.addClass('fezzik');
  } 
};

$squareH.on('click', uncoverCardH);

var uncoverCardI = function(event){
  console.log(event);

  if ($squareI.hasClass('back')) {
      $squareI.removeClass('back');
      $squareI.addClass('max');
  } 
};

$squareI.on('click', uncoverCardI);

var uncoverCardJ = function(event){
  console.log(event);

  if ($squareJ.hasClass('back')) {
      $squareJ.removeClass('back');
      $squareJ.addClass('buttercup');
  } 
};

$squareJ.on('click', uncoverCardJ);

var uncoverCardK = function(event){
  console.log(event);

  if ($squareK.hasClass('back')) {
      $squareK.removeClass('back');
      $squareK.addClass('rous');
  } 
};

$squareK.on('click', uncoverCardK);

var uncoverCardL = function(event){
  console.log(event);

  if ($squareL.hasClass('back')) {
      $squareL.removeClass('back');
      $squareL.addClass('max');
  } 
};

$squareL.on('click', uncoverCardL);

var uncoverCardM = function(event){
  console.log(event);

  if ($squareM.hasClass('back')) {
      $squareM.removeClass('back');
      $squareM.addClass('fezzik');
  } 
};

$squareM.on('click', uncoverCardM);

var uncoverCardN = function(event){
  console.log(event);

  if ($squareN.hasClass('back')) {
      $squareN.removeClass('back');
      $squareN.addClass('inigo');
  } 
};

$squareN.on('click', uncoverCardN);

var uncoverCardO = function(event){
  console.log(event);

  if ($squareO.hasClass('back')) {
      $squareO.removeClass('back');
      $squareO.addClass('vizzini');
  }
};

$squareO.on('click', uncoverCardO);

var uncoverCardP = function(event){
  console.log(event);

  var characterClass = 'rous';

  clicks++;


  if ($squareP.hasClass('back')) {
      $squareP.addClass(characterClass);
      $squareP.removeClass('back');
  }

  checkForMatch($squareP, characterClass);

 
};

$squareP.on('click', uncoverCardP);

// !!!! now that a character has been assigned to cards and shows up on clicks, need to make sure the user can't uncover more than two cards at a time. 


// -- when a user clicks two cards, check for a match, if no match, flip cards back. if yes, keep both cards uncovered.
// var checkForMatch = function(){
//     if (pairs[0].classList === pairs[1].classList) {
//         matches++
//         pairs.length = 0;
//         return 
//         //leave cards uncovered if match
//         //also want to empty the pairs array so new cards can be pushed in to check for a match
//     } else {
//         //cover cards back if no match
//         squares[i].removeClass(cardFronts[i])
//     }
// };


var previousCardCharacterClass;

var checkForMatch = function($currentCard, currentCardCharacterClass) {

    if (clicks === 1) {
        // if first card of a pair is clicked
        // no previousCard
        // adopt the character class of the card that has been clicked
        previousCardCharacterClass = currentCardCharacterClass;
    } else if (clicks === 2) {
        // if second card of a pair is clicked
        // compare previous card and current card
        // do they have matching character classes
        if (previousCardCharacterClass === currentCardCharacterClass) {
            matches++;
        } else {
            // turn the cards back around
            $currentCard.removeClass(currentCardCharacterClass);
            $currentCard.addClass('back');
        }

        clicks = 0;
    }
};



// var saveFrontToSquares = function(){
//  for (var i = 0; i < cardFronts.length; i++) { // goal is to iterate through cardFronts, grab one value (make sure that value isn't available in further iterations)
//      var twoSquares = function(){}; // take the value grabbed from above and assign it to two random squares. (make sure those squares are not available anymore)
//  };
// };

// need to do some kind of function for firstCard and secondCard?

// choosing a card
var chooseCard = function(square){ //square will be the index of squares array
 //if 2 clicks have been made
 if (clicks = 2){
    return checkForMatch();
 }
 // check if the cards match

 //if no clicks,
 if (clicks = 0){

 }
 //store card index of clicked div in firstCard
 //show image corresponding to first card clicked
 //set clicks to 1

 // else
 // set clicks to 2
 // store card index in secondCard var
 // show image corresponding to second card clicked

}; 


// -- randomize which character will be on which cards (this can be at the end when you figure out everything else. this is for when you hit reset probably)
var shuffleCharacters = function shuffleCharacters(array) {
    for (var i = array.length - 1; i > 0; i--) { //Loops through each of the values between the array length and one, decrementing the loop variable for each iteration.
        var j = Math.floor(Math.random() * (i + 1)); //math floor rounds to nearest integer so you don't get a decimal. math random will give a number between 0 and whatever the index (i) is. 
        var temporaryIndex = array[i];
        array[i] = array[j];
        array[j] = temporaryIndex;
    };
    return array;
};

// shuffleCharacters(cardFronts);

var hitReset = function(){
    //when #resetBtn is clicked, run the shuffle Characters function.
}







// EXTRA/BONUS FEATURES (if you have time):
//  - when a match occurs, have a soundbyte
// button to turn sounds off
// theme song upon opening the game (when a soundbyte for match is played, pause theme song)
// button for turning off music (separate from sound)

