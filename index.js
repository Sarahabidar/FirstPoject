const answerButton = document.querySelector('[data-js="answer-button"]');
const answerOrButton = document.querySelector('[data-js="card_answer"]');
answerButton.addEventListener("click", function () {
  answerOrButton.classList.toggle("card_answer_active");
});
