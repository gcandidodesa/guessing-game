let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
const feedbackElement = document.getElementById("feedback");
let hardcoreMode = false;
const hardcoreFeedbackElement = document.getElementById("hardcore");
const descElement = document.getElementById("desc");

function toggleHardcoreMode(){
  hardcoreFeedbackElement.style.color = "#FF6347";
  hardcoreFeedbackElement.innerHTML = "Modo Hardcore ativado!";
  descElement.innerHTML = "Adivinhe um número entre 1 e 9999999999";
  const checkbox = document.querySelector(".hardcore-checkbox");
  hardcoreMode = checkbox.checked;
  if(hardcoreMode){
    attempts = 1;
    randomNumber = Math.floor(Math.random() * 9999999999) + 1;
  } else{
    attempts = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    hardcoreFeedbackElement.innerHTML = "";
    descElement.innerHTML = "Adivinhe um número entre 1 e 100";
  }
  feedbackElement.innerHTML = "";
}

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "Parabéns!";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Muito baixo! Tente novamente. ${attempts} tentativas sobrando.`;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = `Muito alto! Tente novamente. ${attempts} tentativas sobrando.`;
      feedbackElement.style.color = "red";
      break;
    }
  }
  if(attempts == 0 && guess != randomNumber){
   feedbackElement.style.color = "red";
   feedbackElement.innerHTML = "Game over! O número correto era: " + randomNumber;
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  if(hardcoreMode){
    attempts = 1;
  }else{
    attempts = 10;
  }
  
  feedbackElement.innerHTML = "";
}
