
var timerEl = document.querySelector('#timer');
var timeDis = document.querySelector('#str-btn');
const quizContainer = document.getElementById('quiz')
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function timer(totalTime){
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if(timeLeft > 1){
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;    
        }else if(timeLeft == 1){
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        }else{
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
        }
    }, 1000);
          

}

function quizBuilder(){
    const output=[];

    quizQuestions.forEach( (currentQuestion, questionNumber)=>{
        const answers = [];

        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type = "radio" onclick = "finalResults()" name="questions${questionNumber}" value="${letter}">
               ${letter} : ${currentQuestion.answers[letter]}
                </label>
                <button id = "previous">Previous Question</button>  
                <button id = "next">Next Question</button>`
                +console.log('#userChoice')
            )
        }//I initially had the class = slides in order to try and transition the slides but i couldn't get it to work
        output.push(
            `<div>
            <div class = "questions">${currentQuestion.question}</div>
            <div class = "answers">${answers.join('')}</div>
            </div>
            <script id = "buttons">previousButton.addEventListener("click", showPrevousSlide);
            nextButton.addEventListener("click", showNextSlide);</script>`
        )
        
    })
    quizContainer.innerHTML = output.join('');
    
}


const quizQuestions = [
    {
    question:"Who created Javascript?",
    answers:{
        a:"Brendan Eich",
        b:"Elon Musk",
        c:"Jesus",
        d:"Alfred Pennyworth",

    },
    correctAnswer: "a"
    },

    {question: "What method would you use to add HTML with JS?",
        answers:{
            a:"add.HTML",
            b:"push.HTML",
            c:"get.HTML",
            d:".innerHTML"
        },
        correctAnswer: "d"
    
    }
];

function finalResults(){
  var answerContainers = quizContainer.querySelectorAll('.answers');
  var userAnswer = '';
  var numCorrect = 0;

console.log(userAnswer);
}
function showSlide(n){
    $(slides[currentSlide]).remove('active-slide');
    $(slides[n]).add('active-slide');
    currentSlide = n;
    if(currentSlide ===0){
        previousButton.style.display = 'none';
    }else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
    }
}

function showNextSlide(){
    showSlide(currentSlide + 1);
}
function showPrevousSlide(){
    showSlide(currentSlide -1);
}

timeDis.addEventListener('click',function(){
    timer();
    $('.title').remove();
    $('.hero').remove();
    quizBuilder();
    
});





