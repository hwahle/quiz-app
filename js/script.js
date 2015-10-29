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
	displayQuestion();
}

// grabs all elements and sets them dynamically 
var displayQuestion = (function(){	
	var $current = $('#current-question');
	var $currentQNum = $('#current-question-number');

	return function(){
		//sets current question to each index in questions array. if question does not exist, sets equal to empty string
		var currentQuestion = questions[page] || "";
		// sets choices to each question objects options. if questions does not exist, sets equal to empty string
		var choices = currentQuestion.choices || "";
		for(var i = 0; i < choices.length; i++){
			$('#option-' + (i + 1)).text(choices[i]);	
		}			
		$current.text(currentQuestion.question);
		$currentQNum.text(currentQuestion.qNum)
	}

})();

// displays users selection when user clicks on an option
$optionButton.click(getUserSelection);

// grabs the value of the button selected and sets it to global variable userSelection
// calls function setUserChoice() and passes userSelection to set that text of the div
function getUserSelection(){
	userSelection = $(this).text();		
	setUserChoice(userSelection);
}

var setUserChoice = (function(){
	var $userChoice = $('#user-choice');

	return function(stringToSet){
		$userChoice.text(stringToSet);
	}

})();

})

