//lists for the questions and answers
const questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"];
const answers = ["Answer to question 1", "Answer to question 2", "Answer to question 3", "Answer to question 4", "Answer to question 5", "Answer to question 6"];
const optionAmounts = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
//define the elements for where the questions and options go.
const optionLocs = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")];
const questionLoc = document.getElementById("question");
const viewport = document.getElementById("viewport");
const questionTopBar = document.getElementById("questionTopBar");
const questionScreen = document.getElementById("questionScreen");
const resultsScreen = document.getElementById("resultsScreen");
//lists for the queue of remaining questions and answers
var questionQueue = questions
var answerQueue = answers
var questionNumber = 0;

//generate a question when the page loads
window.onload = newQuestion();

//easy-to-use random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function incorrect(selected,umAkchuly) {
    viewport.setAttribute("style", "background-color:  #fc433d");
    questionTopBar.setAttribute("style", "background-color:  #b53847; color: #fad7d8;");
    document.body.setAttribute("style", "background-color: #fc433d");
    questionLoc.setAttribute("style", "color:  #61181a");
    optionLocs[selected - 1].setAttribute("style", "background-color: black; color: #fc433d;");
    optionLocs[umAkchuly - 1].setAttribute("style", "background-color: white; color: #fc433d;");
    let amountOfOptions = optionAmounts[questionNumber];
    if (selected != 1 && umAkchuly != 1 && amountOfOptions >= 1) {
        optionLocs[0].setAttribute("style", "background-color: #fc433d; color: #fc433d;");
    }
    if (selected != 2 && umAkchuly != 2 && amountOfOptions >= 2) {
        optionLocs[1].setAttribute("style", "background-color: #fc433d; color: #fc433d;");
    }
    if (selected != 3 && umAkchuly != 3 && amountOfOptions >= 3) {
        optionLocs[2].setAttribute("style", "background-color: #fc433d; color: #fc433d;");
    }
    if (selected != 4 && umAkchuly != 4 && amountOfOptions >= 4) {
        optionLocs[3].setAttribute("style", "background-color: #fc433d; color: #fc433d;");
    }
    setTimeout(() => {
        resetStyling();
        newQuestion();
    }, 1500);
}

function correct(selected) {
    viewport.setAttribute("style", "background-color:  #90fc88");
    questionTopBar.setAttribute("style", "background-color:  #41b538; color: #d9fad7;");
    document.body.setAttribute("style", "background-color: #90fc88");
    questionLoc.setAttribute("style", "color:  #1d6118");
    optionLocs[selected - 1].setAttribute("style", "background-color: white; color: #1d6118");
    let amountOfOptions = optionAmounts[questionNumber];
    if (selected != 1 && amountOfOptions >= 1) {
        optionLocs[0].setAttribute("style", "background-color: #90fc88; color: #90fc88;");
    }
    if (selected != 2 && amountOfOptions >= 2) {
        optionLocs[1].setAttribute("style", "background-color: #90fc88; color: #90fc88;");
    }
    if (selected != 3 && amountOfOptions >= 3) {
        optionLocs[2].setAttribute("style", "background-color: #90fc88; color: #90fc88;");
    }
    if (selected != 4 && amountOfOptions >= 4) {
        optionLocs[3].setAttribute("style", "background-color: #90fc88; color: #90fc88;");
    }
    setTimeout(() => {
        resetStyling();
        newQuestion();
    }, 1000);
}

function resetStyling () {
    viewport.removeAttribute("style");
    questionTopBar.removeAttribute("style");
    document.body.removeAttribute("style");
    questionLoc.removeAttribute("style");
    optionLocs[0].removeAttribute("style");
    optionLocs[1].removeAttribute("style");
    optionLocs[2].removeAttribute("style");
    optionLocs[3].removeAttribute("style");
}

function completed() {
    questionScreen.setAttribute("hidden", true);
    resultsScreen.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById("congrats").setAttribute("hidden", true);
    }, 2000);
}

//function that generates a new question
function newQuestion() {
    questionNumber += 1;
    if (questionNumber > questions.length) {
        completed();
    } else  {
        let amountOfOptions = optionAmounts[questionNumber];
        document.getElementById("qNum").innerText = questionNumber;
        document.getElementById("tQuest").innerText = questions.length;
        //pick a random question
        let picked = getRandomInt(1,questionQueue.length - 1);
        //set the question text
        questionLoc.innerHTML = questionQueue[picked];
        //pick a random option box for the correct question
        let correct = (getRandomInt(1,4));
        //set the text for the correct answer
        optionLocs[correct - 1].innerHTML = answerQueue[picked];
        optionLocs[correct - 1].setAttribute("onclick", "correct(" + correct + ")");
        //remove the used answer from the queue
        //create a temporary list of incorrect answers 
        let incorrectAnswers = answers.filter(item => item !== answerQueue[picked]);
        answerQueue = answerQueue.filter(item => item !== answerQueue[picked]);
        questionQueue = questionQueue.filter(item => item !== questionQueue[picked]);
        if (correct != 1 && amountOfOptions >= 1) {
            let pickedForOption1 = getRandomInt(1,incorrectAnswers.length);
            optionLocs[0].innerHTML = incorrectAnswers[pickedForOption1];
            optionLocs[0].setAttribute("onclick", "incorrect(1," + correct + ")");
            incorrectAnswers = incorrectAnswers.filter(item => item !== incorrectAnswers[pickedForOption1]);
        } else {
            optionLocs[0].setAttribute("hidden", "true");
        }
        if (correct != 2 && amountOfOptions >= 2) {
            let pickedForOption2 = getRandomInt(1,incorrectAnswers.length)
            optionLocs[1].innerHTML = incorrectAnswers[pickedForOption2];
            optionLocs[1].setAttribute("onclick", "incorrect(2," + correct + ")");
            incorrectAnswers = incorrectAnswers.filter(item => item !== incorrectAnswers[pickedForOption2]);
        } else {
            optionLocs[1].setAttribute("hidden","true");
        }
        if (correct != 3 && amountOfOptions >= 3) {
            let pickedForOption3 = getRandomInt(1,incorrectAnswers.length)
            optionLocs[2].innerHTML = incorrectAnswers[pickedForOption3];
            optionLocs[2].setAttribute("onclick", "incorrect(3," + correct + ")");
            incorrectAnswers = incorrectAnswers.filter(item => item !== incorrectAnswers[pickedForOption3]);
        } else {
            optionLocs[2].setAttribute("hidden","true");
        }
        if (correct != 4 && amountOfOptions >= 4) {
            let pickedForOption4 = getRandomInt(1,incorrectAnswers.length)
            optionLocs[3].innerHTML = incorrectAnswers[pickedForOption4];
            optionLocs[3].setAttribute("onclick", "incorrect(4," + correct + ")");
            incorrectAnswers = incorrectAnswers.filter(item => item !== incorrectAnswers[pickedForOption4]);
        } else {
            optionLocs[3].setAttribute("hidden","true");
        }
    }
}