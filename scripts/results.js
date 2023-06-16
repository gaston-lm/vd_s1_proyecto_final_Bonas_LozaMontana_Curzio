// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Parse the query parameters into an object
const answerCounts = Object.fromEntries(urlParams.entries());
console.log(answerCounts[3]);



function displayAnswerPercentages(answerCounts) {

  let answerPercentages = {};
  // Calculate the percentages for each answer option
  const percentageValen = (answerCounts[1] / 10) * 100;
  answerPercentages['Valen'] = percentageValen;

  const percentageGaston = (answerCounts[2] / 10) * 100;
  answerPercentages['Gaston'] = percentageGaston;

  const percentageTomi = (answerCounts[3] / 10) * 100;
  answerPercentages['Tomi'] = percentageTomi;


  // Display the percentages in the HTML
  const options = document.querySelectorAll('.answer-option');
  options.forEach(option => {
    const optionId = option.id;
    const percentage = answerPercentages[optionId] || '0.00'; // Default to 0 if no count is available
    const percentageText = `${percentage}%`;
    option.querySelector('.percentage').textContent = percentageText;
  });
}

displayAnswerPercentages(answerCounts);

