// getting all required elements
const startBtn     = document.querySelector('.start-btn button');
const infoBox      = document.querySelector('.info-box');
const exitBtn      = document.querySelector('.buttons .quit');
const continueBtn  = document.querySelector('.buttons .continue');
const quizBox      = document.querySelector('.quiz-box');
const optionList   = document.querySelector('.quiz-box section .option-list');
const timeCount    = document.querySelector('.quiz-box header .timer .timer-sec');
const timeLine     = document.querySelector('.quiz-box header .time-line');
const timeOff      = document.querySelector('.quiz-box header .timer .timer-text');

console.log(startBtn, infoBox, exitBtn, continueBtn, quizBox);

// Start Quiz
startBtn.onclick = () => {
    infoBox.classList.add("active-info");
};

// Exit Button
exitBtn.onclick = () => {
    infoBox.classList.remove("active-info");
};

// Continue Button
continueBtn.onclick = () => {
    infoBox.classList.remove("active-info");
    quizBox.classList.add("active-quiz");
    showQuestions(0);
    quesCounter(1);
    startTimer(30);        // ⏳ start from 30 seconds
    startTimerLine(0);
};

let queCount = 0;
let queNumb = 1;
let counter;
let counterLine;
let timeValue = 30;
let widthValue = 0;
let userScore = 0;

const nextBtn   = document.querySelector('.quiz-box footer .next-btn');
const resultBox = document.querySelector('.result-box');
const quitBtn   = document.querySelector('.result-box .buttons .quit');

quitBtn.onclick = () => {
    window.location.reload();
};

// Next Question
nextBtn.onclick = () => {
    if (queCount < questions.length - 1) {
        queCount++;
        queNumb++;
        showQuestions(queCount);
        quesCounter(queNumb);

        clearInterval(counter);
        startTimer(30);            // reset timer 30 sec

        clearInterval(counterLine);
        startTimerLine(0);

        nextBtn.style.display = "none";
        timeOff.textContent = "Time Left";

    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResultBox();
    }
};

// Show Questions
const showQuestions = (index) => {
    const queText = document.querySelector('.quiz-box section .que-text');

    let queTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionTag = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>
    `;

    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;

    const option = optionList.querySelectorAll('.option');
    option.forEach(opt => {
        opt.setAttribute("onclick", "optionSelected(this)");
    });
};

let tickIcon  = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Option Selected
const optionSelected = (answer) => {
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;

    if (userAns == correctAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].classList.add("correct");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }

    nextBtn.style.display = "block";
};

// Result Box
const showResultBox = () => {
    infoBox.classList.remove("active-info");
    quizBox.classList.remove("active-quiz");
    resultBox.classList.add("active-result");

    const scoreText = document.querySelector(".result-box .score-text");
    scoreText.innerHTML = `<span>You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
};

// Timer 30 Seconds
const startTimer = (time) => {
    counter = setInterval(() => {
        timeCount.textContent = time;
        time--;

        if (time < 10) {
            timeCount.textContent = "0" + time;
        }

        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[queCount].answer;
            let allOptions = optionList.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent == correctAns) {
                    optionList.children[i].classList.add("correct");
                    optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }

            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled");
            }

            nextBtn.style.display = "block";
        }
    }, 1000);
};

// Timeline
const startTimerLine = (time) => {
    counterLine = setInterval(() => {
        time += 1;
        timeLine.style.width = time + "px";

        if (time > 560) {
            clearInterval(counterLine);
        }
    }, 29);
};

// Footer Question Counter
const quesCounter = (index) => {
    const bottomQuesCounter = document.querySelector('.total-que');
    bottomQuesCounter.innerHTML = `<span><p>${index}</p> of <p>${questions.length}</p> questions</span>`;
};
