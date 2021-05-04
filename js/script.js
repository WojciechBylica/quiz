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

    const showNextQuestion = () => {
        switch (questionIndex) {
            case 1:
                questionFirst.classList.add("form__element--hidden");
                questionSecond.classList.remove("form__element--hidden");
                break;
            case 2:
                questionSecond.classList.add("form__element--hidden");
                questionThird.classList.remove("form__element--hidden");
                break;
            case 3:
                questionThird.classList.add("form__element--hidden");
                questionFourth.classList.remove("form__element--hidden");
                break;
            case 4:
                questionFourth.classList.add("form__element--hidden");
                questionFifth.classList.remove("form__element--hidden");
                break;
            case 5:
                questionFifth.classList.add("form__element--hidden");
                questionSixth.classList.remove("form__element--hidden");
                break;
            case 6:
                questionSixth.classList.add("form__element--hidden");
                questionSeventh.classList.remove("form__element--hidden");
                break;
            case 7:
                questionSeventh.classList.add("form__element--hidden");
                questionEightth.classList.remove("form__element--hidden");
                break;
            case 8:
                questionEightth.classList.add("form__element--hidden");
                questionNineth.classList.remove("form__element--hidden");
                break;
            case 9:
                questionNineth.classList.add("form__element--hidden");
                questionTenth.classList.remove("form__element--hidden");
                sendButton.classList.remove("form__element--hidden");
                nextButton.classList.add("form__element--hidden");
                break;
        }
        questionIndex++;
    };

    const showSendButton = () => {
        sendButton.classList.add("form__element--hidden");
        nextButton.classList.add("form__element--hidden");
        answerButton.classList.remove("form__element--hidden");
    }

    const correctAnswerToQuestion1 = document.querySelector(".js-q1__true");
    const correctAnswerToQuestion2 = document.querySelector(".js-q2__true");
    const correctAnswerToQuestion3 = document.querySelector(".js-q3__true");
    const correctAnswerToQuestion4 = document.querySelector(".js-q4__true");
    const correctAnswerToQuestion5 = document.querySelector(".js-q5__true");
    const correctAnswerToQuestion6 = document.querySelector(".js-q6__true");
    const correctAnswerToQuestion7 = document.querySelector(".js-q7__true");
    const correctAnswerToQuestion8 = document.querySelector(".js-q8__true");
    const correctAnswerToQuestion9 = document.querySelector(".js-q9__true");
    const correctAnswerToQuestion10 = document.querySelector(".js-q10__true");

    const result = document.querySelector(".js-result");

    const countResults = () => {
        return correctAnswerToQuestion1.checked +
            correctAnswerToQuestion2.checked +
            correctAnswerToQuestion3.checked +
            correctAnswerToQuestion4.checked +
            correctAnswerToQuestion5.checked +
            correctAnswerToQuestion6.checked +
            correctAnswerToQuestion7.checked +
            correctAnswerToQuestion8.checked +
            correctAnswerToQuestion9.checked +
            correctAnswerToQuestion10.checked;
    }

    const showResults = (event) => {
        event.preventDefault();

        const sum = countResults();
        result.innerText = `${sum}/10 pkt.`;
    }

    const goodAnswerToQuestion = document.querySelector(".form__input--true");
    const goodAnswerToQuestion2 = document.querySelector(".form__input--true2");
    const goodAnswerToQuestion3 = document.querySelector(".form__input--true3");
    const goodAnswerToQuestion4 = document.querySelector(".form__input--true4");
    const goodAnswerToQuestion5 = document.querySelector(".form__input--true5");
    const goodAnswerToQuestion6 = document.querySelector(".form__input--true6");
    const goodAnswerToQuestion7 = document.querySelector(".form__input--true7");
    const goodAnswerToQuestion8 = document.querySelector(".form__input--true8");
    const goodAnswerToQuestion9 = document.querySelector(".form__input--true9");
    const goodAnswerToQuestion10 = document.querySelector(".form__input--true10");

    const serveTheSummary = () => {
        goodAnswerToQuestion.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion2.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion3.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion4.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion5.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion6.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion7.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion8.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion9.classList.toggle("form__input--showTrue");
        goodAnswerToQuestion10.classList.toggle("form__input--showTrue");

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

        answerButton.innerText = goodAnswerToQuestion.classList.contains("form__input--showTrue") ? "Ukryj podświetlenia" : "Podświetl prawidłowe odpowiedzi";
    }

    const resetList = () => {
        result.innerText = "";
        goodAnswerToQuestion.classList.remove("form__input--showTrue");
        goodAnswerToQuestion2.classList.remove("form__input--showTrue");
        goodAnswerToQuestion3.classList.remove("form__input--showTrue");
        goodAnswerToQuestion4.classList.remove("form__input--showTrue");
        goodAnswerToQuestion5.classList.remove("form__input--showTrue");
        goodAnswerToQuestion6.classList.remove("form__input--showTrue");
        goodAnswerToQuestion7.classList.remove("form__input--showTrue");
        goodAnswerToQuestion8.classList.remove("form__input--showTrue");
        goodAnswerToQuestion9.classList.remove("form__input--showTrue");
        goodAnswerToQuestion10.classList.remove("form__input--showTrue");

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

        nextButton.addEventListener("click", showNextQuestion);

        sendButton.addEventListener("click", showSendButton);

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", showResults);

        answerButton.addEventListener("click", serveTheSummary);

        const resetButton = document.querySelector(".js-reset__button")
        resetButton.addEventListener("click", resetList);
    }

    init();
}