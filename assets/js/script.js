// to hide all pages
// var pages = document.getElementById("allPages");
// pages.style.display = "none";


// set var for all pages
var pageOne = document.getElementById("page1");
var pageTwo = document.getElementById("page2");
var pageThree = document.getElementById("page3");
var pageFour = document.getElementById("page4");
var pageFive = document.getElementById("page5");
var pageSix = document.getElementById("page6");
var pageSeven = document.getElementById("page7");
var pageEight = document.getElementById("page8");
var pages = [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix, pageSeven, pageEight];
var currentPage = "";

// display first page-pages[0] only

pages[1].style.display = "none";
pages[2].style.display = "none";
pages[3].style.display = "none";
pages[4].style.display = "none";
pages[5].style.display = "none";
pages[6].style.display = "none";
pages[7].style.display = "none"; 

// to show page2-pages[1] when click start button
var startButton = document.getElementById("start")
startButton.addEventListener("click", startQuiz);

function startQuiz () {
    // console.log ('start');
    pages[0].style.display = "none";
    pages[1].style.display = "block";
}

// set timer to count down for quiz
// startButton.addEventListener("click", setTime);




// to show page3-pages[2] when select the right choice
var correctAnswer1 = document.getElementById("correct1")
correctAnswer1.addEventListener("click", goPg3);

function goPg3 () {
    console.log ('CorrectAnswerQ1');
    pages[1].style.display = "none";
    pages[2].style.display = "block";
}

// to show page4-pages[3] when select the right choice
var correctAnswer2 = document.getElementById("correct2")
correctAnswer2.addEventListener("click", goPg4);

function goPg4 () {
    console.log ('CorrectAnswerQ2');
    pages[2].style.display = "none";
    pages[3].style.display = "block";
}

// to show page5-pages[4] when select the right choice
var correctAnswer3 = document.getElementById("correct3")
correctAnswer3.addEventListener("click", goPg5);

function goPg5 () {
    console.log ('CorrectAnswerQ3');
    pages[3].style.display = "none";
    pages[4].style.display = "block";
}

// to show page6-pages[5] when select the right choice
var correctAnswer4 = document.getElementById("correct4")
correctAnswer4.addEventListener("click", goPg6);

function goPg6 () {
    console.log ('CorrectAnswerQ4');
    pages[4].style.display = "none";
    pages[5].style.display = "block";
}

// to show page7-pages[6] when select the right choice
var correctAnswer5 = document.getElementById("correct5")
correctAnswer5.addEventListener("click", goPg7);

function goPg7 () {
    console.log ('CorrectAnswerQ5');
    pages[5].style.display = "none";
    pages[6].style.display = "block";
}

// to show page8-pages[7] after submit initial
var submitButton = document.getElementById("submit")
submitButton.addEventListener("click", goPg8);

function goPg8 () {
    console.log ('goToPg8');
    pages[6].style.display = "none";
    pages[7].style.display = "block";
}

// in page 8: clear highscore


//in page 8: click Go back to return to page 1
var goBackButton = document.getElementById("goBack")
goBackButton.addEventListener("click", restartQuiz);

function restartQuiz () {
    console.log ('restartQuiz');
    pages[7].style.display = "none";
    pages[0].style.display = "block";
}
