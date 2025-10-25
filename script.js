// getting all required elements

const startBtn     =     document.querySelector('.start-btn button');
const infoBox      =     document.querySelector('.info-box');
const exitBtn      =     document.querySelector('.buttons .quit');
const continueBtn  =     document.querySelector('.buttons .continue');
const quizBox      =     document.querySelector('.quiz-box');
const optionList   =     document.querySelector('.quiz-box section .option-list');
const timeCount    =     document.querySelector('.quiz-box header .timer .timer-sec');
const timeLine     =     document.querySelector('.quiz-box header .time-line');
const timeOff      =     document.querySelector('.quiz-box header .timer .time-text');  

console.log(startBtn,infoBox,exitBtn,continueBtn,quizBox);

// If start quiz btn is clicked
startBtn.onclick = ()=>{
    infoBox.classList.add("active-info"); //show the info box
}

// If Exit btn is clicked
exitBtn.onclick = ()=>{
    infoBox.classList.remove("active-info");//hide the info box 
}
 
// If Continue btn is clicked
continueBtn.onclick = ()=>{
    infoBox.classList.remove("active-info");//hide the info box 
    quizBox.classList.add("active-quiz");//show the quiz box
    showQuestions(0);
    quesCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let queCount = 0;
let queNumb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

//If next btn is clicked
const nextBtn = document.querySelector('.quiz-box footer .next-btn');
const resultBox = document.querySelector('.result-box');
const quitBtn = document.querySelector('.result-box .buttons .quit');

quitBtn.onclick = () =>{
    window.location.reload();
}

nextBtn.onclick = ()=>{
    if(queCount < questions.length -1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        quesCounter(queNumb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextBtn.style.display ="none";
        timeOff.textContent="Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("questions completed");
        showResultBox();
    }
}

// getting question and option from array

const showQuestions =(index)=>{
    const queText = document.querySelector('.quiz-box section .que-text');
    let queTag = '<span>'+ questions[index].numb +"."+questions[index].question +'</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0]+'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1]+'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2]+'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3]+'</span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML= optionTag;
    const option = optionList.querySelectorAll('.option');
    for (let i =0;i< option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = ' <div class="icon cross"><i class="fas fa-times"></i></div>';
 
const optionSelected = (answer) =>{
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions= optionList.children.length;
    if(userAns == correctAns){
        userScore +=1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("ans is correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("ans is wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);
        

        //if answers is incorrect then automatically select the correct answer
        for(let i =0; i <allOptions;i++){
            if(optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class","option correct");
                optionList.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i =0;i < allOptions; i++){
        optionList.children[i].classList.add("disabled");
    }
    nextBtn.style.display= "block";
}

const showResultBox = () => {
    infoBox.classList.remove("active-info");//hide the info box 
    quizBox.classList.remove("active-quiz");//hide the quiz box
    resultBox.classList.add("active-result");//show the result box
    const scoreText = document.querySelector(".result-box .score-text")
    let scoreTag = "<span>You Got <p>"+userScore+"</p>out of <p>"+questions.length+"</p></span>";
    scoreText.innerHTML = scoreTag;
}

const startTimer = (time) =>{
    const timer = ()=>{
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent="0" + addZero;
        }
        if(time<0){
            clearInterval(counter);
            timeCount.textContent="00";
            timeOff.textContent="Time Off";

            let correctAns = questions[queCount].answer;
            let allOptions= optionList.children.length;

            for(let i =0; i <allOptions;i++){
                if(optionList.children[i].textContent == correctAns){
                    optionList.children[i].setAttribute("class","option correct");
                    optionList.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }
            }
            for(let i =0;i < allOptions; i++){
                optionList.children[i].classList.add("disabled");
            }
            nextBtn.style.display= "block";
        }
    }
    counter = setInterval(timer,1000);
}

const startTimerLine = (time) =>{
    
    const timer = ()=>{
        time +=1;
        timeLine.style.width = time + "px";
        if(time > 560){
            clearInterval(counterLine);
        }
    }
    counterLine = setInterval(timer,29);

}


// footer question changes

const quesCounter = (index) =>{
    const bottomQuesCounter = document.querySelector('.total-que');
    let totalQuesCountTag = '<span><p>'+ index+'</p>of<p>'+ questions.length +'</p>questions</span>';
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}
