{
    const welcome = () => {
        console.log("Hello");
    }
    let questionIndex = 1;
    const nextButton = document.querySelector(".js-nextButton");
    const sendButton = document.querySelector(".js-button__send");
    const answerButton = document.querySelector(".js-button__answer");

    const questionFirst = document.querySelector(".js-question__first");
    const questionSecond = document.querySelector(".js-question__second");
    const questionThird = document.querySelector(".js-question__third");
    const questionFourth = document.querySelector(".js-question__fourth");
    const questionFifth = document.querySelector(".js-question__fifth");
    const questionSixth = document.querySelector(".js-question__sixth");
    const questionSeventh = document.querySelector(".js-question__seventh");
    const questionEightth = document.querySelector(".js-question__eightth");
    const questionNineth = document.querySelector(".js-question__nineth");
    const questionTenth = document.querySelector(".js-question__tenth");

    const questionNumber = () => {
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
                questionIndex++;
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
    };

    const showSendButton = () => {
        sendButton.classList.add("form__element--hidden");
        nextButton.classList.add("form__element--hidden");
        answerButton.classList.remove("form__element--hidden");
    }

    const q1True = document.querySelector(".js-q1__true");
    const q2True = document.querySelector(".js-q2__true");
    const q3True = document.querySelector(".js-q3__true");
    const q4True = document.querySelector(".js-q4__true");
    const q5True = document.querySelector(".js-q5__true");
    const q6True = document.querySelector(".js-q6__true");
    const q7True = document.querySelector(".js-q7__true");
    const q8True = document.querySelector(".js-q8__true");
    const q9True = document.querySelector(".js-q9__true");
    const q10True = document.querySelector(".js-q10__true");

    const result = document.querySelector(".js-result");


    const countGoodAnswers = (event) => {
        event.preventDefault();

        const sum = (
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
    }

    const formInputTrue = document.querySelector(".form__input--true");
    const formInputTrue2 = document.querySelector(".form__input--true2");
    const formInputTrue3 = document.querySelector(".form__input--true3");
    const formInputTrue4 = document.querySelector(".form__input--true4");
    const formInputTrue5 = document.querySelector(".form__input--true5");
    const formInputTrue6 = document.querySelector(".form__input--true6");
    const formInputTrue7 = document.querySelector(".form__input--true7");
    const formInputTrue8 = document.querySelector(".form__input--true8");
    const formInputTrue9 = document.querySelector(".form__input--true9");
    const formInputTrue10 = document.querySelector(".form__input--true10");

    const showGoodAnswers = () => {
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
    }

    const resetList = () => {
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
    }



    const init = () => {
        welcome();

        nextButton.addEventListener("click", questionNumber);

        sendButton.addEventListener("click", showSendButton);

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", countGoodAnswers);

        answerButton.addEventListener("click", showGoodAnswers);

        const resetButton = document.querySelector(".js-reset__button")
        resetButton.addEventListener("click", resetList);
    }

    init();
}