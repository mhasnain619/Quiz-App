let quizContainer = document.getElementById("quizContainer")
let Question = document.getElementById("question")
var option1 = document.getElementById("option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var option1p = document.getElementById("option1p");
var option2p = document.getElementById("option2p");
var option3p = document.getElementById("option3p");
var option4p = document.getElementById("option4p");
let nextQuestion = document.getElementById("nextButton")
let backButton = document.getElementById("backButton")
let qy = document.getElementById("startQuiz");
let ls = document.getElementById("letsStart");



qy.addEventListener("click", function (event) {
    event.preventDefault();
    ls.style.display = "none"
    quizContainer.style.display = "block"
    renderQuestion()
})


var selectedOptions;
var indexValue = 0;
var Marks = 0;
let quizQuestions = [
    {
        question: "Q1 : What does CSS stand for..?",
        correctOption: "Casecading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Casecading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ]
    },
    {
        question: "Q2 : Which HTML tag is used to define an internal style sheet.?",
        correctOption: "<Style>",
        options: [
            "<Script>",
            "<Css>",
            "<Style>",
            "<Tag>"
        ]
    },
    {
        question: "Q3 : Which HTML attribute is used to define inline styles.?",
        correctOption: "Style",
        options: [
            "Class",
            "Font",
            "Style",
            "Styles"
        ]
    },
    {
        question: "Q4 : Which CSS property is used to change the margin top of an element?",
        correctOption: "margin top",
        options: [
            "text-color",
            "color",
            "fgcolor",
            "margin top",
        ]

    },
    {
        question: "Q5 : Which CSS property controls the text size?",
        correctOption: "font-size",
        options: [
            "text-size",
            "font-size",
            "text-style",
            "font-style"
        ]
    },
    {
        question: "Q6 : Which property is used to change the font of an element?",
        correctOption: "font-family",
        options: [
            "font-family",
            "font-weight",
            "font-size",
            "font-color"]
    },
    {
        question: "Q7 : Which property is used to change the left margin of an element?",
        correctOption: "margin-left",
        options: [
            "indent",
            "margin-left",
            "padding-left",
            "padding-right"
        ]
    },
    {
        question: "Q8 : How do you change the text color an element ?",
        correctOption: "color",
        options: [
            "text-color",
            "color",
            "fgcolor",
            "bgcolor"
        ]
    }
]
var Questions;
function renderQuestion() {
    Question.innerText = quizQuestions[indexValue].question;
    option1p.innerText = quizQuestions[indexValue].options[0];
    option2p.innerText = quizQuestions[indexValue].options[1];
    option3p.innerText = quizQuestions[indexValue].options[2];
    option4p.innerText = quizQuestions[indexValue].options[3];
    option1.style.backgroundColor = "#61677A";
    option1.style.color = "white";

    option2.style.backgroundColor = "#61677A";
    option2.style.color = "white";

    option3.style.backgroundColor = "#61677A";
    option3.style.color = "white";

    option4.style.backgroundColor = "#61677A";
    option4.style.color = "white";
}
option1.addEventListener("click", function () {
    selectedOptions = option1p.innerText;
    option1.style.border = "2px solid #61677A";
    option1.style.backgroundColor = "transparent";
    option1.style.color = "black";

    option4.style.border = "none";
    option4.style.backgroundColor = "#61677A";
    option4.style.color = "white";

    option3.style.border = "none";
    option3.style.backgroundColor = "#61677A";
    option3.style.color = "white";


    option2.style.border = "none";
    option2.style.backgroundColor = "#61677A";
    option2.style.color = "white";
})
option2.addEventListener("click", function () {
    selectedOptions = option2p.innerText
    option2.style.border = "2px solid #61677A";
    option2.style.backgroundColor = "transparent";
    option2.style.color = "black";

    option1.style.border = "none";
    option1.style.backgroundColor = "#61677A";
    option1.style.color = "white";

    option3.style.border = "none";
    option3.style.backgroundColor = "#61677A";
    option3.style.color = "white";


    option4.style.border = "none";
    option4.style.backgroundColor = "#61677A";
    option4.style.color = "white";

})
option3.addEventListener("click", function () {
    selectedOptions = option3p.innerText
    option3.style.border = "2px solid #61677A";
    option3.style.backgroundColor = "transparent";
    option3.style.color = "black";

    option1.style.border = "none";
    option1.style.backgroundColor = "#61677A";
    option1.style.color = "white";

    option4.style.border = "none";
    option4.style.backgroundColor = "#61677A";
    option4.style.color = "white";

    option2.style.border = "none";
    option2.style.backgroundColor = "#61677A";
    option2.style.color = "white";

})
option4.addEventListener("click", function () {
    selectedOptions = option4p.innerText
    option4.style.border = "2px solid #61677A";
    option4.style.backgroundColor = "transparent";
    option4.style.color = "black";

    option1.style.border = "none";
    option1.style.backgroundColor = "#61677A";
    option1.style.color = "white";

    option3.style.border = "none";
    option3.style.backgroundColor = "#61677A";
    option3.style.color = "white";


    option2.style.border = "none";
    option2.style.backgroundColor = "#61677A";
    option2.style.color = "white";

})

nextQuestion.addEventListener("click", function (event) {

    if (selectedOptions === undefined) {
        alert("please select atleasT one Option")
    } else {
        if (selectedOptions == quizQuestions[indexValue].correctOption) {
            Marks += 5;
            localStorage.setItem("Marks", Marks)
            console.log("True Your Mark is ", Marks)
            indexValue += 1;
            selectedOptions = undefined
            event.preventDefault();
        } else {
            console.log("false")
            indexValue += 1;
            selectedOptions = undefined
            event.preventDefault();

        }
        if (indexValue == quizQuestions.length) {
            alert("this is last Questiomn")
            window.location.href = "result.html"
        } else {
            renderQuestion();
        }
    }

})
backButton.addEventListener("click", function () {
    indexValue -= 1;
    renderQuestion();
})
