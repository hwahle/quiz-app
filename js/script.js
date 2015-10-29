$(document).ready(function() {

// set global variables that will be used in functions 
var userSelection;
var correct;
var incorrect;
var page = 0;
var answered = 0;
var $quizArea = $('.quiz-area');
var $overlay = $('.overlay');
var $quizResults = $('.quiz-results');
var $reStartButton = $('#start-over');
var $startButton = $('#start');
var $optionButton = $('.button'); 
var $userSubmit = $('.user-submit');
var $nextButton = $('#next');


// JS objects 
var questions = [{
	question: "Copenhagen is the capital city of...",
	qNum: 1,
	choices: ["Sweden", "Denmark", "Norway", "Finland"],
	answer: "Denmark",
},	
{
	question: "Copenhagen is home to which Disney-adapted folk tale?",
	qNum: 2,
	choices: ["The Little Mermaid", "Beauty and the Beast", "Cinderella", "Lady and the Tramp"],
	answer: "The Little Mermaid",
},
{
	question: "Which great poet and fairytale writer was born in Copenhagen?",
	qNum: 3,
	choices: ["Brothers Grimm", "Lewis Carroll", "Wilhelm Hauff", "Hans Christian Andersen"],
	answer: "Hans Christian Andersen",
},
{
	question: "What is the name of the Best Restaurant in the world, located in Copenhagen?",
	qNum: 4,
	choices: ["Noma", "Geranium", "Cadeau", "The Paul"],
	answer: "Noma",
},
{
	question: "What does the Danish word 'Hygge' loosely translate to in English?",
	qNum: 5,
	choices: ["Chilly", "Drunk", "Cozy", "Authentic"],
	answer: "Cozy",		
}]


// hides questions, overlay, and quiz results area
$quizArea.hide();
$overlay.hide();
$quizResults.hide();
// starts a new game when user clicks on 'START' button
$startButton.click(startGame);

// initialize function. sets global variables to 0 to keep track of right/wrong answers and fires first question
function startGame(){
	var $intro = $('.intro-screen');
	correct = 0;
	incorrect = 0;
	$intro.fadeOut();
	$quizArea.fadeIn(3000);
	
}

})

