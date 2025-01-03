let questions = [ 
    {
        title: "What will be the output of the following JavaScript code snippet?",
        imgQuestion: "images/q1.png",
        answers: ["error", "Sanfoundry_ Javascriptmcq", "undefined", "Sanfoundry_Javascriptmcq"],
        correct: "Sanfoundry_Javascriptmcq"
    },
    {
        title: "What will be the output of the following JavaScript code?",
        imgQuestion: "images/q2.png",
        answers: ["10", "50", "5", "Error"],
        correct: "50"
    },
    {
        title: "What will be the output of the following JavaScript code?",
        imgQuestion: "images/q3.png",
        answers: ["false", "true", "compilation error", "runtime error"],
        correct: "false"
    },
    {
        title: "Will the following JavaScript code work?",
        imgQuestion: "images/q4.png",
        answers: ["Exception will be thrown", "Memory leak", "Error", "Yes perfectly"],
        correct: "Yes perfectly"
    },
    {
        title: "What will be the output of the following JavaScript code??",
        imgQuestion: "images/q5.png",
        answers: ["7,1" ,"18,1" ,"undefied" , "error"],
        correct: "18,1" 
    },
    {
        title: "What will be the output of the following JavaScript code?",
        imgQuestion: "images/q6.png",
        answers: ["1,2,3,6,7,8", "123", "1,2,3", "Error"],
        correct: "1,2,3,6,7,8"
    },
    {
        title: "What will be the output of the following JavaScript code?",
        imgQuestion: "images/q7.png",
        answers: ["runtime error", "logical error", "true", "false"],
        correct: "true"
    },
    {
        title: "What will be the firstname and surname of the following JavaScript program?",
        imgQuestion: "images/q8.png",
        answers: ["objects", "property names", "properties", "property values"],
        correct: "property names"
    },
    {
        title: "Consider the following JavaScript statement containing regular expressions and check if the pattern matches.",
        imgQuestion: "images/q9.png",
        answers: ["text.check(pattern)", "pattern.test(text)", "text==pattern", "text.equals(pattern)"],
        correct: "pattern.test(text)"
    },
    {
        title: "What will be the output of the following JavaScript code snippet?",
        imgQuestion: "images/q10.png",
        answers: ["0", "1", "compiler error", "runtime error"],
        correct: "1"
    }
];

let displayedQuestions = []; 
let score = 0;
let correctAnswers = []; 



function createNextQuestion() {
    if (displayedQuestions.length < 10) {
        let remainingQuestions = questions.filter((item, index) => displayedQuestions.indexOf(index) === -1);

        if (remainingQuestions.length === 0) {

        } else {
            let randomIndex = Math.floor(Math.random() * remainingQuestions.length);
            let displayQuestion = remainingQuestions[randomIndex];
            
            displayedQuestions.push(questions.indexOf(displayQuestion));

            let question_text = document.querySelector(".question-text");
            question_text.innerHTML = '';
            let addtext = document.createElement("p");
            addtext.innerText = displayQuestion.title;
            addtext.classList = "question-text-style";
            question_text.append(addtext);

            let question_img = document.querySelector(".question-img");
            question_img.innerHTML = ''; 
            let addimage = document.createElement("img");
            addimage.setAttribute("src", displayQuestion.imgQuestion);
            addimage.classList = "questions-style";
            question_img.append(addimage);

            let question_answer = document.querySelector(".question-answer");
            question_answer.innerHTML = ''; 

            let addChoices = document.createElement("div");
            addChoices.innerHTML = `
                <input type="radio" name="answerQ" id="opt1" value="${displayQuestion.answers[0]}"> <label  style="cursor: pointer;" for="opt1"> ${displayQuestion.answers[0]}</label> <br>
                <input type="radio" name="answerQ" id="opt2" value="${displayQuestion.answers[1]}"> <label  style="cursor: pointer;" for="opt2">${displayQuestion.answers[1]}</label> <br>
                <input type="radio" name="answerQ" id="opt3" value="${displayQuestion.answers[2]}"> <label  style="cursor: pointer;" for="opt3">${displayQuestion.answers[2]}</label> <br>
                <input type="radio" name="answerQ" id="opt4" value="${displayQuestion.answers[3]}"> <label  style="cursor: pointer;" for="opt4">${displayQuestion.answers[3]}</label> <br>
            `;
            question_answer.append(addChoices);
            addChoices.classList = "question_answer-style";

            let next = document.querySelector(".next-question button");
            next.setAttribute("disabled", "true");
            next.classList = "disabled";

            document.querySelectorAll(".question_answer-style input").forEach((radio) => {
                radio.addEventListener("change", () => {
                    next.removeAttribute("disabled");
                     next.classList = "enabled-btn";
                     next.addEventListener("click", handleNextClick);
                });
            });
            function handleNextClick() {
                let selectedAnswer = document.querySelector('input[name="answerQ"]:checked');
                if (selectedAnswer && selectedAnswer.value === displayQuestion.correct) {
                    correctAnswers.push(displayQuestion.correct); 
                    console.log("Correct answers: " + correctAnswers.length);
                }   
            }
        }
    } else {
        console.log("Correct answers:", correctAnswers); 
        window.location.href = `result.html?score=${correctAnswers.length}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let nextQ = document.querySelector(".next-question");
    nextQ.addEventListener('click', createNextQuestion);
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('examStarted') === 'true') {
    timerLefted(20, "result.html");
    createNextQuestion();
}

function timerLefted(duration_in_seconds, new_page) {
    let remainingTimer = duration_in_seconds;
    let intervalID = setInterval(() => {
        let hours = Math.floor(remainingTimer / 3600);
        let minutes = Math.floor((remainingTimer % 3600) / 60);
        let seconds = remainingTimer % 60;

        let timerView = document.querySelector("#span-timer");
        timerView.innerText = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`;

        if (remainingTimer <= 0) {
            clearInterval(intervalID);
            window.location.href = new_page+`?score=${correctAnswers.length}`;
        }
        let progress = document.querySelector(".progress") ; 
            let percentage = (remainingTimer / duration_in_seconds) * 100;
            progress.style.width = `${percentage}%`;
        remainingTimer--;
    }, 1000);
}
