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
// hides the game area and displays the overlay showing the user if they got the answer correct or incorrect
$userSubmit.submit(instead(submitSelection));

function submitSelection(){
	$quizArea.hide();
	$overlay.fadeIn(1500);
	checkUserSelection(userSelection);
}
// calls preventDefault to whatever you pass this function to
function instead(fn){
	return function(e){
		e.preventDefault();
		fn.apply(this);
	};
}

// takes an argument and checks whether that input is the correct answer
// sets the feedback section to correct or incorrect
// shows user correct answer if they answered incorrectly
// increments the correct and incorrect values
var checkUserSelection = (function(){
	var $currentQuestionFeedback = $('#current-question-feedback');
	var $correctAnswer = $('#correct-answer');
	var $displayCorrect = $('#display-correct');

	return function(userInput){
		if (userInput === questions[page].answer) {
			$displayCorrect.hide();
			$currentQuestionFeedback.text("Correct!");
			$currentQuestionFeedback.css("color", "green");
			correct++;
		} else {
			$displayCorrect.show();
			$correctAnswer.text(questions[page].answer);
			$currentQuestionFeedback.text("Incorrect");
			$currentQuestionFeedback.css("color", "red");
			incorrect++			
		}		
	}

})();
// calls displayNextQuestion function when user clicks on 'NEXT' button
$nextButton.click(displayNextQuestion);

// increments page and answered variables 
// hides the overlay and shows next question in queue
// clears user choice div in next question
// shows user total score when they reach the end 
function displayNextQuestion(){
	page++;
	answered++;
	$overlay.hide();
	$quizArea.fadeIn(3000);
	setUserChoice("");
	showUserTotalScore();
	displayQuestion();
}

// starts quiz over again when user clicks on 'START OVER' button
$reStartButton.click(startOver);

// reloads page 
function startOver(){
	window.location.reload();	
}

// checks how many questions user has answered. if theyve reached the end, displays the total questions answered correctly
var showUserTotalScore = (function(){
	var $totalCorrect = $('#total-correct');

	return function(){
		if(answered === 5){		
			$quizArea.hide();
			$overlay.hide();
			$totalCorrect.text(correct);		
			$quizResults.show();
			giveUserRating();
		}			
	}

})();

})

