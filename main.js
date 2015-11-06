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

// if a user clicks a card, it should reveal the back of the card
var uncoverCard = function(event){
  console.log(event);

  if ($squareA.hasClass('back')) {
      $squareA.removeClass('back');
      $squareA.addClass('front');
  } 
};

$squareA.one('click', uncoverCard);
























