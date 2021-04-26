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

    let True1 = 0;
    q1True.checked = q1True.checked === true ? True1 = 1 : True1 = 0;

    let True2 = 0;
    q2True.checked = q2True.checked === true ? True2 = 1 : True2 = 0;

    let True3 = 0;
    q3True.checked = q3True.checked === true ? True3 = 1 : True3 = 0;

    let True4 = 0;
    q4True.checked = q4True.checked == true ? True4 = 1 : True4 = 0;

    let True5 = 0;
    q5True.checked = q5True.checked == true ? True5 = 1 : True5 = 0;

    let True6 = 0;
    q6True.checked = q6True.checked == true ? True6 = 1 : True6 = 0;

    let True7 = 0;
    q7True.checked = q7True.checked == true ? True7 = 1 : True7 = 0;

    let True8 = 0;
    q8True.checked = q8True.checked == true ? True8 = 1 : True8 = 0;

    let True9 = 0;
    q9True.checked = q9True.checked == true ? True9 = 1 : True9 = 0;

    let True10 = 0;
    q10True.checked = q10True.checked == true ? True10 = 1 : True10 = 0;

    result.innerText = `${True1 + True2 + True3 + True4 + True5 + True6 + True7 + True8 + True9 + True10} /10 pkt.`;
});



let button__answer = document.querySelector(".js-button__answer");
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

button__answer.addEventListener("click", () => {
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

    button__answer.innerText = button__answer.innerText === "Podświetl prawidłowe odpowiedzi" ? "Ukryj podświetlenia" : "Podświetl prawidłowe odpowiedzi";
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

    button__answer.innerText = "Podświetl prawidłowe odpowiedzi";
});
