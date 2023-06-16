const selectedAnswers = {}; // Data structure to store selected answers

// Fetch data for Question 1
fetch('songs.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_1 svg');
    const nextQuestionContainer = document.querySelector('#pregunta_2');
    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = index + 1;

        selectedAnswers['question_1'] = answerNumber;
        console.log(selectedAnswers); // Display the selected answers in the console
        disableOptions('question_1');
      });

      option.addEventListener('mouseenter', () => {
        const previewUrl = data.songs[index].preview_url;
        document.getElementById('audioPlayer').src = previewUrl;
        document.getElementById('audioPlayer').play();
      });

      option.addEventListener('mouseout', () => {
        document.getElementById('audioPlayer').pause();
      });
    });
  })
  .catch(error => console.error(error));

// Fetch data for Question 2
fetch('songs.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_2 svg');
    const nextQuestionContainer = document.querySelector('#pregunta_3');
    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = index + 1;

        selectedAnswers['question_2'] = answerNumber;
        console.log(selectedAnswers); // Display the selected answers in the console
        disableOptions('question_2');
      });

      option.addEventListener('mouseenter', () => {
        const previewUrl = data.songs[index].preview_url;
        document.getElementById('audioPlayer').src = previewUrl;
        document.getElementById('audioPlayer').play();
      });

      option.addEventListener('mouseout', () => {
        document.getElementById('audioPlayer').pause();
      });
    });
  })
  .catch(error => console.error(error));

// Function to disable options after selection
function disableOptions(questionId) {
  const optionsForQuestion = document.querySelectorAll(`#${questionId} .opciones svg`);
  optionsForQuestion.forEach(option => {
    option.removeEventListener('click', null);
    option.style.pointerEvents = 'none';
  });
}


// scroll a siguiente pregunta

var preguntas = document.getElementsByClassName('preguntas');

for (var i = 0; i < preguntas.length; i++) {
  var options = preguntas[i].querySelectorAll('.opciones svg');
  for (var j = 0; j < options.length; j++) {
    options[j].addEventListener('click', scrollToNextQuestion);
  }
}

function scrollToNextQuestion() {
  // Find the index of the current question
  var currentQuestionIndex = Array.from(preguntas).findIndex(function (question) {
    return question.contains(this);
  }, this.closest('.preguntas'));

  // Scroll to the next question if available
  if (currentQuestionIndex < preguntas.length - 1) {
    preguntas[currentQuestionIndex + 1].scrollIntoView({ behavior: 'smooth' });
  }
}
