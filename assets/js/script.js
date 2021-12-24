
var timerEl = document.querySelector('#timer');
var timeDis = document.querySelector('#str-btn');

function timer(totalTime){
    var timeLeft = 5;
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




timeDis.addEventListener('click',function(){
    timer();
    $('.title').remove();
    $('.hero').remove();
});


