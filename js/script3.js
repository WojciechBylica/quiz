let questionIndex = 1;
let nextButton = document.querySelector(".js-nextButton");
let sendButton = document.querySelector(".js-button__send");
let answerButton = document.querySelector(".js-button__answer");

let questionFirst = document.querySelector(".js-question__first");
let questionSecond = document.querySelector(".js-question__second");
let questionThird = document.querySelector(".js-question__third");
let questionFourth = document.querySelector(".js-question__fourth");
let questionFifth = document.querySelector(".js-question__fifth");
let questionSixth = document.querySelector(".js-question__sixth");
let questionSeventh = document.querySelector(".js-question__seventh");
let questionEightth = document.querySelector(".js-question__eightth");
let questionNineth = document.querySelector(".js-question__nineth");
let questionTenth = document.querySelector(".js-question__tenth");

nextButton.addEventListener("click", () => {

    switch (questionIndex) {
        case 1:
            questionFirst.classList.add("form__element--hidden");
            questionSecond.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 2:
            questionSecond.classList.add("form__element--hidden");
            questionThird.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 3:
            questionThird.classList.add("form__element--hidden");
            questionFourth.classList.remove("form__element--hidden");
            questionIndex = questionIndex + 1;
            break;
        case 4:
            questionFourth.classList.add("form__element--hidden");
            questionFifth.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 5:
            questionFifth.classList.add("form__element--hidden");
            questionSixth.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 6:
            questionSixth.classList.add("form__element--hidden");
            questionSeventh.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 7:
            questionSeventh.classList.add("form__element--hidden");
            questionEightth.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 8:
            questionEightth.classList.add("form__element--hidden");
            questionNineth.classList.remove("form__element--hidden");
            questionIndex++;
            break;
        case 9:
            questionNineth.classList.add("form__element--hidden");
            questionTenth.classList.remove("form__element--hidden");
            sendButton.classList.remove("form__element--hidden");
            nextButton.classList.add("form__element--hidden");
            questionIndex++;
            break;
    }
});

sendButton.addEventListener("click", () => {
    sendButton.classList.add("form__element--hidden");
    nextButton.classList.add("form__element--hidden");
    answerButton.classList.remove("form__element--hidden");
});

let q1True = document.querySelector(".js-q1__true");
let q2True = document.querySelector(".js-q2__true");
let q3True = document.querySelector(".js-q3__true");
let q4True = document.querySelector(".js-q4__true");
let q5True = document.querySelector(".js-q5__true");
let q6True = document.querySelector(".js-q6__true");
let q7True = document.querySelector(".js-q7__true");
let q8True = document.querySelector(".js-q8__true");
let q9True = document.querySelector(".js-q9__true");
let q10True = document.querySelector(".js-q10__true");

let result = document.querySelector(".js-result");
let form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = (
        q1True.checked +
        q2True.checked +
        q3True.checked +
        q4True.checked +
        q5True.checked +
        q6True.checked +
        q7True.checked +
        q8True.checked +
        q9True.checked +
        q10True.checked
    );
    result.innerText = `${sum}/10 pkt.`;
});

let formInputTrue = document.querySelector(".form__input--true");
let formInputTrue2 = document.querySelector(".form__input--true2");
let formInputTrue3 = document.querySelector(".form__input--true3");
let formInputTrue4 = document.querySelector(".form__input--true4");
let formInputTrue5 = document.querySelector(".form__input--true5");
let formInputTrue6 = document.querySelector(".form__input--true6");
let formInputTrue7 = document.querySelector(".form__input--true7");
let formInputTrue8 = document.querySelector(".form__input--true8");
let formInputTrue9 = document.querySelector(".form__input--true9");
let formInputTrue10 = document.querySelector(".form__input--true10");

answerButton.addEventListener("click", () => {
    formInputTrue.classList.toggle("form__input--showTrue");
    formInputTrue2.classList.toggle("form__input--showTrue");
    formInputTrue3.classList.toggle("form__input--showTrue");
    formInputTrue4.classList.toggle("form__input--showTrue");
    formInputTrue5.classList.toggle("form__input--showTrue");
    formInputTrue6.classList.toggle("form__input--showTrue");
    formInputTrue7.classList.toggle("form__input--showTrue");
    formInputTrue8.classList.toggle("form__input--showTrue");
    formInputTrue9.classList.toggle("form__input--showTrue");
    formInputTrue10.classList.toggle("form__input--showTrue");

    questionFirst.classList.remove("form__element--hidden");
    questionSecond.classList.remove("form__element--hidden");
    questionThird.classList.remove("form__element--hidden");
    questionFourth.classList.remove("form__element--hidden");
    questionFifth.classList.remove("form__element--hidden");
    questionSixth.classList.remove("form__element--hidden");
    questionSeventh.classList.remove("form__element--hidden");
    questionEightth.classList.remove("form__element--hidden");
    questionNineth.classList.remove("form__element--hidden");
    questionTenth.classList.remove("form__element--hidden");

    answerButton.innerText = answerButton.innerText === "Podświetl prawidłowe odpowiedzi" ? "Ukryj podświetlenia" : "Podświetl prawidłowe odpowiedzi";
});

let resetButton = document.querySelector(".js-reset__button")

resetButton.addEventListener("click", () => {
    result.innerText = "";
    formInputTrue.classList.remove("form__input--showTrue");
    formInputTrue2.classList.remove("form__input--showTrue");
    formInputTrue3.classList.remove("form__input--showTrue");
    formInputTrue4.classList.remove("form__input--showTrue");
    formInputTrue5.classList.remove("form__input--showTrue");
    formInputTrue6.classList.remove("form__input--showTrue");
    formInputTrue7.classList.remove("form__input--showTrue");
    formInputTrue8.classList.remove("form__input--showTrue");
    formInputTrue9.classList.remove("form__input--showTrue");
    formInputTrue10.classList.remove("form__input--showTrue");

    questionFirst.classList.remove("form__element--hidden");
    questionSecond.classList.add("form__element--hidden");
    questionThird.classList.add("form__element--hidden");
    questionFourth.classList.add("form__element--hidden");
    questionFifth.classList.add("form__element--hidden");
    questionSixth.classList.add("form__element--hidden");
    questionSeventh.classList.add("form__element--hidden");
    questionEightth.classList.add("form__element--hidden");
    questionNineth.classList.add("form__element--hidden");
    questionTenth.classList.add("form__element--hidden");

    nextButton.classList.remove("form__element--hidden");
    sendButton.classList.add("form__element--hidden");
    answerButton.classList.add("form__element--hidden");
    answerButton.innerText = "Podświetl prawidłowe odpowiedzi";
    questionIndex = 1;
});