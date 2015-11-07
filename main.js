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

var clicks; // how many times has the user clicked?
var matches; //how many matches have been made
var firstCard; 
var secondCard;

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

var squares = [
	[$squareA, $squareB, $squareC, $squareD],
	[$squareE, $squareF, $squareG, $squareH],
	[$squareI, $squareJ, $squareK, $squareL],
	[$squareM, $squareN, $squareO, $squareP]
	]; // first want to save all the squares to an array for reference

// -- each character needs to be assigned to two cards in the deck*****
var saveFrontToSquares = function(){
	var cardFronts;
	var squares;
	for (var i = 0; i < cardFronts.length; i++) { // goal is to iterate through cardFronts, grab one value (make sure that value isn't available in further iterations)
		var twoSquares = function(){}; // take the value grabbed from above and assign it to two random squares. (make sure those squares are not available anymore)
	};
};


// -- randomize which character will be on which cards
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

// -- if a user clicks a card, it should reveal the back of the card
var uncoverCard = function(event){
  console.log(event);

  if ($squareA.hasClass('back')) {
      $squareA.removeClass('back');
      $squareA.addClass('vizzini');
  };
};

$squareA.one('click', uncoverCard);

// need to do some kind of function for firstCard and secondCard

// -- when a user clicks two cards, check for a match, if no match, flip cards back. if yes, keep both cards uncovered.
var checkForMatch = function(){

	if (firstCard === secondCard) {

	};
};



//

















