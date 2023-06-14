const selectedAnswers = {}; // Data structure to store selected answers

// Fetch data for Question 1
fetch('songs.json')
  .then(response => response.json())
  .then(data => {
    const options = document.querySelectorAll('#question_1 svg');

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = index + 1;

        selectedAnswers['question_1'] = answerNumber;
        console.log(selectedAnswers); // Display the selected answers in the console

        // Example decision-making based on selected answers for Question 1
        if (answerNumber === 1) {
          // Handle decision for Question 1, Answer 1
        } else if (answerNumber === 2) {
          // Handle decision for Question 1, Answer 2
        }
        // Add more conditions as needed

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

    options.forEach((option, index) => {
      option.addEventListener('click', () => {
        const answerNumber = index + 1;

        selectedAnswers['question_2'] = answerNumber;
        console.log(selectedAnswers); // Display the selected answers in the console

        // Example decision-making based on selected answers for Question 2
        if (answerNumber === 1) {
          // Handle decision for Question 2, Answer 1
        } else if (answerNumber === 2) {
          // Handle decision for Question 2, Answer 2
        }
        // Add more conditions as needed

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




