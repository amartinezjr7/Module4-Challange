
var timerEl = document.querySelector('#timer');
var timeDis = document.querySelector('#str-btn');
const quizContainer = document.getElementById('quiz')
const resultContainer = document.getElementById('results')

function timer(totalTime){
    var timeLeft = 60;
    console.log("it gets to here");
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
                <input type = "radio" onclick = "finalResults('b')" name="questions${questionNumber}" value="${letter}" id = "submit">
                ${currentQuestion.answers[letter]}
               
                </label>`
            )
        }
        output.push(
            `<div class = "questions">${currentQuestion.question}</div>
            <div class = "answers">${answers.join('')}</div>`
        )
        
    })
    quizContainer.innerHTML = output.join('');
}


const quizQuestions = [
    {
    question:"asdjhfasdjhfaslNEW ONE",
    answers:{
        a:"asdfasdf",
        b:"sdfasdfa",
        c:"asdfasdf",
        d:"sdfasdfas",

    },
    correctAnswer: "a"
    }
];

function finalResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber)=>{
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name = question${questionNumber}] : checked`;
        const userAnswer = (answerContainer.querySelector(selector)|| {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            console.log("this is correct");
            answerContainers[questionNumber].style.color = 'green';
        }
        else{
            console.log("this is incorrect");
            answerContainers[questionNumber].style.color = 'red'
        }
    })

    resultContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

timeDis.addEventListener('click',function(){
    timer();
    $('.title').remove();
    $('.hero').remove();
    quizBuilder();
});


