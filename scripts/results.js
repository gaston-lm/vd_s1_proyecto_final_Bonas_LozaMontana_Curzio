// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Parse the query parameters into an object
const answerCounts = Object.fromEntries(urlParams.entries());
console.log(answerCounts[3]);

function displayAnswerPercentages(answerCounts) {

  let answerPercentages = {};

  let percentageValen
  let percentageGaston;
  let percentageTomi;
  // Calculate the percentages for each answer option
  if (answerCounts[1] >= 5) {
    percentageValen = (5 / 10) * 100;
    percentageGaston = (3 / 10) * 100;
    percentageTomi = (2 / 10) * 100;
  } else if (answerCounts[2] >= 5) {
    percentageValen = (3 / 10) * 100;
    percentageGaston = (6 / 10) * 100;
    percentageTomi = (1 / 10) * 100;
  } else if (answerCounts[3] >= 5) {
    percentageValen = (2 / 10) * 100;
    percentageGaston = (2 / 10) * 100;
    percentageTomi = (6 / 10) * 100;
  } else {
    percentageValen = (3 / 10) * 100;
    percentageGaston = (4 / 10) * 100;
    percentageTomi = (3 / 10) * 100;
  }

  answerPercentages['Valen'] = percentageValen;
  answerPercentages['Gaston'] = percentageGaston;
  answerPercentages['Tomi'] = percentageTomi;

  // Display the percentages in the HTML
  const options = document.querySelectorAll('.result_int');
  options.forEach(option => {
    const optionId = option.id;
    const percentage = answerPercentages[optionId] || '0.00'; // Default to 0 if no count is available
    const percentageText = `${percentage}%`;
    option.querySelector('.percentage').textContent = percentageText;
  });
}

displayAnswerPercentages(answerCounts);


// ---------------------------------------------------------------------------------------

// using d3 for convenience
let main = d3.select("main");
let scrolly = main.select("#scrolly");
let $figure = scrolly.select("figure");
let wChart = 1200
let hChart = wChart * 0.5;
let dataChart = [];
let $step;

// initialize the scrollama
let scroller = scrollama();

// fetch data
d3.csv("./data/JugadoresArgentina2022.csv", d3.autoType).then(function (data) {
  dataChart = data;
  // kick things off
  init();
});

function handleStepExit(response) {
  // if ($step) {
  console.count("classed");
  d3.select(response.element).classed("is-active", false);
  // }
}

// scrollama event handlers
function handleStepEnter(response) {
  // console.log(response);
  $step = d3.select(response.element);

  // add color to current step only
  // if ($step) {
  $step.classed("is-active", true);
  console.count("classed");
  // }

  $step.style("background", "#ff00002e");

  // create new chart
  const key = $step.attr("data-step");

  // console.log("response.element", response.element);
  // console.log("$step", $step);
  // console.log("key", key);
  console.log(key)
  createChart(key);
}

function handleStepProgress(response) {
  // console.log(response);
  // $figure.style("opacity", response.progress);
  // $step = d3.select(response.element);
  // console.log($step.attr("data-step"));
  $step.select(".progress").text(d3.format(".1%")(response.progress));
}

function init() {
  // 1. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 2. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false,
      progress: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit)
    .onStepProgress(handleStepProgress);
}

/* DataViz */
function createChart(key) {
  let chart = Plot.plot({
    width: wChart,
    height: hChart,
    grid: true,
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 50,
    marginRight: 50,
    x: {
      ticks: 10,
      label: key,
      axis: "top",
    },
    marks: [
      Plot.dot(
        dataChart,
        Plot.dodgeY({
          x: key,
          padding: 10,
          r: 15,
          anchor: "middle",
          fill: "puesto",
        })
      ),
      Plot.image(
        dataChart,
        Plot.dodgeY({
          x: key,
          padding: 10,
          r: 15,
          anchor: "middle",
          src: "carita",
          width: 30,
          title: (d) => `${d.nombre}\n${d.edad} años`,
        })
      ),
      Plot.text(
        dataChart,
        Plot.dodgeY({
          x: key,
          padding: 10,
          r: 15,
          dy: 20,
          anchor: "middle",
          text: "apellido",
          width: 30,
        })
      ),
    ],
  });


  d3.select("#scrolly figure svg").remove();
  d3.select("#scrolly figure").append(() => chart);
}