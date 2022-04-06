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
// var currentPage = "";


// set var for wrong choices
// array for Q1
var wrong11 = document.getElementById("wrongQ11");
var wrong12 = document.getElementById("wrongQ12");
var wrong13 = document.getElementById("wrongQ13");
var wrongQ1 = [wrong11, wrong12, wrong13];
//array for Q2
var wrong21 = document.getElementById("wrongQ21");
var wrong22 = document.getElementById("wrongQ22");
var wrong23 = document.getElementById("wrongQ23");
var wrongQ2 = [wrong21, wrong22, wrong23];
//array for Q3
var wrong31 = document.getElementById("wrongQ31");
var wrong32 = document.getElementById("wrongQ32");
var wrong33 = document.getElementById("wrongQ33");
var wrongQ3 = [wrong31, wrong32, wrong33];
//array for Q4
var wrong41 = document.getElementById("wrongQ41");
var wrong42 = document.getElementById("wrongQ42");
var wrong43 = document.getElementById("wrongQ43");
var wrongQ4 = [wrong41, wrong42, wrong43];
//array for Q5
var wrong51 = document.getElementById("wrongQ51");
var wrong52 = document.getElementById("wrongQ52");
var wrong53 = document.getElementById("wrongQ53");
var wrongQ5 = [wrong51, wrong52, wrong53];
// to combine all wrong choices in array
var wrongAnswers = wrongQ1.concat(wrongQ2, wrongQ3, wrongQ4, wrongQ5);
// console.log (wrongAnswers)



// display first page-pages[0] only

pages[1].style.display = "none";
pages[2].style.display = "none";
pages[3].style.display = "none";
pages[4].style.display = "none";
pages[5].style.display = "none";
pages[6].style.display = "none";
pages[7].style.display = "none"; 

// to show page2-pages[1] when click start button
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

function startQuiz () {
    // console.log ('start');
    pages[0].style.display = "none";
    pages[1].style.display = "block";
}

// to show page3-pages[2] when select the right choice
var correctAnswer1 = document.getElementById("correct1");
correctAnswer1.addEventListener("click", goPg3);

function goPg3 () {
    // console.log ('CorrectAnswerQ1');
    pages[1].style.display = "none";
    pages[2].style.display = "block";
}

// to show page4-pages[3] when select the right choice
var correctAnswer2 = document.getElementById("correct2");
correctAnswer2.addEventListener("click", goPg4);

function goPg4 () {
    // console.log ('CorrectAnswerQ2');
    pages[2].style.display = "none";
    pages[3].style.display = "block";
}

// to show page5-pages[4] when select the right choice
var correctAnswer3 = document.getElementById("correct3");
correctAnswer3.addEventListener("click", goPg5);

function goPg5 () {
    // console.log ('CorrectAnswerQ3');
    pages[3].style.display = "none";
    pages[4].style.display = "block";
}

// to show page6-pages[5] when select the right choice
var correctAnswer4 = document.getElementById("correct4");
correctAnswer4.addEventListener("click", goPg6);

function goPg6 () {
    // console.log ('CorrectAnswerQ4');
    pages[4].style.display = "none";
    pages[5].style.display = "block";
}

// to show page7-pages[6] when select the right choice
var correctAnswer5 = document.getElementById("correct5");
correctAnswer5.addEventListener("click", goPg7);

function goPg7 () {
    // console.log ('CorrectAnswerQ5');
    pages[5].style.display = "none";
    pages[6].style.display = "block";
    // to hide all questions when time reaches 0 
    pages[1].style.display = "none";
    pages[2].style.display = "none";
    pages[3].style.display = "none";
    pages[4].style.display = "none";
    //display the final time in page7
    document.getElementById("page7").children[1].textContent = "You final score is " + secondsLeft + "."
}

// set timer to count down for quiz
startButton.addEventListener("click", setTime);
var secondsLeft = 20;
var timeEl = document.getElementById("timer");

//to subtract time for wrong answer
//loop through wrongAnswers array: for each wrongAnswer, add event listener to decrease timer
for (let i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", subtractTime);
    function subtractTime () {
        secondsLeft = secondsLeft - 3;
        alert("The answer is not correct.");
    }  
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);

        if(secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            secondsLeft = 0;

            // Calls function to stop quiz to page 7
            goPg7();
        } 

        timeEl.textContent = "Time left: " + secondsLeft;

        //when quzi completed-in page7-pages[6]/, timer stop
        correctAnswer5.addEventListener("click", stopTimer);
        function stopTimer () {
            clearInterval(timerInterval);
        }


    }, 1000);

    
}

var submitButton = document.getElementById("submit");
// set var to display message if no inital is entered
var msgDiv = document.querySelector("#msg");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

//------------------------ for local storage ------------------------


var listEl = document.querySelector("#list");

function renderList () {

    // get initial and score from local storage
    var items = JSON.parse(localStorage.getItem("items")) || [];
    // console.log(typeof items);
    // to display the Highscores list in blank
    listEl.innerHTML = "";

    // console.log(items.length);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemEl = document.createElement("li");
        itemEl.textContent = item.inputInitial + " - " + item.score;
        listEl.append(itemEl);
    }

}


submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    
    // set object for var of input initial and score
    var newItem = {
        inputInitial: document.getElementById("initial").value.trim(),
        score: secondsLeft,
    };


    if (newItem.inputInitial === "") {
        displayMessage("error", "Initial cannot be blank");
      } else {
        displayMessage("success", "Initial has been saved");

        

        // to get the initial and score from local storage, and add new initial and score to it
        var items = JSON.parse(localStorage.getItem("items")) || [];
        items.push(newItem);
        


        // sorting object from stack overflow https://stackoverflow.com/a/1129270/3105371
        function compare(a, b) {
            if (a.score > b.score) {
               return -1; 
            }
            if (a.score < b.score) {
                return 1;
            }
            return 0;
        }

        items.sort(compare);


        // use setItem(key, value) to store the object of score and initial in localStorage so that it can be used next time the user returns to the page
        localStorage.setItem("items", JSON.stringify(items));
        

        // to show page8-pages[7] after submit initial - go to page 8
        goPg8 ();
        // run the function to display the score and initial
        renderList();

        // to clear the initial input field
        document.getElementById("initial").value = "";

      }

});


// var submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", goPg8);

function goPg8 () {
    // console.log ('goToPg8');
    pages[6].style.display = "none";
    pages[7].style.display = "block";
}

//---------------------------------------------------------------------

// in page 8: clear highscore
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighscores);

function clearHighscores () {
    localStorage.clear();
    listEl.innerHTML = "";
}


//in page 8: click Go back to return to page 1
var goBackButton = document.getElementById("goBack");
goBackButton.addEventListener("click", restartQuiz);

function restartQuiz () {
    // console.log ('restartQuiz');
    pages[7].style.display = "none";
    pages[0].style.display = "block";
    secondsLeft = 20;
}
