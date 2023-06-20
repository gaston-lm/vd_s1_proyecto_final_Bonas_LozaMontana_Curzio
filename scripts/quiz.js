const selectedAnswers = {}; // Data structure to store selected answers
let answerCounts = {};

// Fetch data para pregunta 1
fetch('data/quiz_songs/songs_1.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_1 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = parseInt(option.id.split('_')[2]);

        selectedAnswers['question_1'] = answerNumber;
        console.log(selectedAnswers);
        document.getElementById('audioPlayer').pause();
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

// pregunta 2
const options_2 = document.querySelectorAll('#question_2 svg');

options_2.forEach((option) => {
  option.addEventListener('click', () => {
    const answerNumber = parseInt(option.id.split('_')[2]);

    selectedAnswers['question_2'] = answerNumber;
    console.log(selectedAnswers);
    disableOptions('question_2');
  });
});

// Fetch data para pregunta 3
fetch('data/quiz_songs/songs_2.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_3 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = parseInt(option.id.split('_')[2]);

        selectedAnswers['question_3'] = answerNumber;
        console.log(selectedAnswers);
        document.getElementById('audioPlayer').pause();
        disableOptions('question_3');
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

// pregunta 4
const options_4 = document.querySelectorAll('#question_4 svg');

options_4.forEach((option) => {
  option.addEventListener('click', () => {
    const answerNumber = parseInt(option.id.split('_')[2]);

    selectedAnswers['question_4'] = answerNumber;
    console.log(selectedAnswers);
    disableOptions('question_4');
  });
});

// Fetch data para pregunta 5
fetch('data/quiz_songs/songs_3.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_5 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = parseInt(option.id.split('_')[2]);

        selectedAnswers['question_5'] = answerNumber;
        console.log(selectedAnswers);
        document.getElementById('audioPlayer').pause();
        disableOptions('question_5');
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

// pregunta 6
const options_6 = document.querySelectorAll('#question_6 svg');

options_6.forEach((option) => {
  option.addEventListener('click', () => {
    const answerNumber = parseInt(option.id.split('_')[2]);

    selectedAnswers['question_6'] = answerNumber;
    console.log(selectedAnswers);
    disableOptions('question_6');
  });
});

// Fetch data para pregunta 7
fetch('data/quiz_songs/songs_4.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_7 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = parseInt(option.id.split('_')[2]);

        selectedAnswers['question_7'] = answerNumber;
        console.log(selectedAnswers);
        document.getElementById('audioPlayer').pause();
        disableOptions('question_7');
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

// pregunta 8
const options_8 = document.querySelectorAll('#question_8 svg');

options_8.forEach((option) => {
  option.addEventListener('click', () => {
    const answerNumber = parseInt(option.id.split('_')[2]);

    selectedAnswers['question_8'] = answerNumber;
    console.log(selectedAnswers);
    disableOptions('question_8');
  });
});

// Fetch data para pregunta 9
fetch('data/quiz_songs/songs_5.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_9 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = parseInt(option.id.split('_')[2]);

        selectedAnswers['question_9'] = answerNumber;
        console.log(selectedAnswers);
        document.getElementById('audioPlayer').pause();
        disableOptions('question_9');
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

// pregunta 10
const options_10 = document.querySelectorAll('#question_10 svg');

options_10.forEach((option) => {
  option.addEventListener('click', () => {
    const answerNumber = parseInt(option.id.split('_')[2]);

    selectedAnswers['question_10'] = answerNumber;
    console.log(selectedAnswers);
    disableOptions('question_10');

    answerCounts = countAnswers(selectedAnswers);
    showLoadingOverlay();
    console.log(answerCounts);
  });
});

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

// contar cantidad de respuestas de cada integrante
function countAnswers(selectedAnswers) {
  const counts = {
    1: 0,
    2: 0,
    3: 0
  };

  for (const answer of Object.values(selectedAnswers)) {
    counts[answer]++;
  }

  return counts;
}

// Function to show the loading overlay
function showLoadingOverlay() {
  // Display the loading overlay
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'flex';

  // Wait for a few seconds (adjust the duration as needed)
  const duration = 3000; // 3 seconds
  setTimeout(navigateToNextPage, duration);
}

// Function to navigate to the next page
function navigateToNextPage() {
  const queryString = new URLSearchParams(answerCounts).toString();
  const nextPageURL = 'results.html' + '?' + queryString;
  window.location.href = nextPageURL;
}
