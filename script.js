const buttonOne = document.querySelector(".myButtonOne");
const buttonTwo = document.querySelector(".myButtonTwo");
const buttonThree = document.querySelector(".myButtonThree");

const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");

buttonOne.addEventListener("click", function() {
    document.querySelector(".playerOne").play();
    document.querySelector(".myVideoOne").play();
    
    buttonOne.style.display = "none";
    btnOne.style.display = "block";

    const timerOne = 10;
    let amountTimeOne = timerOne * 60;

    function calculateTimeOne() {
        const countdownOne = document.querySelector('.countdownOne');
        countdownOne.style.display = "block";
        
        let minutesOne = Math.floor(amountTimeOne/60);
        let secondsOne = amountTimeOne%60;

        if (minutesOne < 10) {
            minutesOne = "0" + minutesOne;
        }
        if (secondsOne < 10) {
            secondsOne = "0" + secondsOne;
        }
        countdownOne.textContent = `${minutesOne} : ${secondsOne}`;
        amountTimeOne--;

        if (amountTimeOne < 0) {
            stopTimerOne();
            amountTimeOne = 0;
        }
        function stopTimerOne() {
            clearInterval(timerIdOne);
        }
    }
    let timerIdOne = setInterval(calculateTimeOne, 1000);
    
    buttonTwo.setAttribute('disabled', '');
    buttonThree.setAttribute('disabled', '');
    // document.body.append(buttonTwo);
})
btnOne.addEventListener("click", function() {
        location.reload();
        
    
})
// // button.addEventListener("click", function() {
//     document.querySelector("#player").play();
//     document.querySelector("#myVideo").play();
// })








buttonTwo.addEventListener("click", function() {
    
    document.querySelector(".playerTwo").play();
    document.querySelector(".myVideoTwo").play();
    
    buttonTwo.style.display = "none";
    btnTwo.style.display = "block";

    const timerTwo = 1;
    let amountTimeTwo = timerTwo * 60;

    function calculateTimeTwo() {
        const countdownTwo = document.querySelector('.countdownTwo');
        countdownTwo.style.display = "block";

        let minutesTwo = Math.floor(amountTimeTwo/60);
        let secondsTwo = amountTimeTwo%60;

        if (minutesTwo < 10) {
            minutesTwo = "0" + minutesTwo;
        }
        if (secondsTwo < 10) {
            secondsTwo = "0" + secondsTwo;
        }
        countdownTwo.textContent = `${minutesTwo} : ${secondsTwo}`;
        amountTimeTwo--;

        if (amountTimeTwo < 0) {
            stopTimerTwo();
            amountTimeTwo = 0;
        }
        function stopTimerTwo() {
            clearInterval(timerIdTwo);
        }
    }
    let timerIdTwo = setInterval(calculateTimeTwo, 1000);
    buttonOne.setAttribute('disabled', '');
    buttonThree.setAttribute('disabled', '');
})

btnTwo.addEventListener("click", function() {
    location.reload();
})

buttonThree.addEventListener("click", function() {
    document.querySelector(".playerThree").play();
    document.querySelector(".myVideoThree").play();

    buttonThree.style.display = "none";
    btnThree.style.display = "block";
    
    let timer = 1;
    let timerThree = timer * 60;
    let amountTimeThree = timerThree * 60;

    function calculateTimeThree() {
        const countdownThree = document.querySelector('.countdownThree');
        countdownThree.style.display = "block";
        console.log(countdownThree);

        let hoursThree = Math.floor((amountTimeThree/60)/60);
        let minutesThree = Math.floor((amountTimeThree/60)%60);
        let secondsThree = amountTimeThree%60;

        if (minutesThree === 60) {
            minutesThree = "0";
        }
        if (minutesThree < 10) {
            minutesThree = "0" + minutesThree;
        }

        if (secondsThree < 10) {
            secondsThree = "0" + secondsThree;
        }

        
        countdownThree.textContent = `${hoursThree} : ${minutesThree} : ${secondsThree}`;
        amountTimeThree--;

        if (amountTimeThree < 0) {
            stopTimerThree();
            amountTimeThree = 0;
        }
        function stopTimerThree() {
            clearInterval(timerIdThree);
        }
    }
    let timerIdThree = setInterval(calculateTimeThree, 1000);
    buttonTwo.setAttribute('disabled', '');
    buttonOne.setAttribute('disabled', '');
})

btnThree.addEventListener("click", function() {
    location.reload();
})