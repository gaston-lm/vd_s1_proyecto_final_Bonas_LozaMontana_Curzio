// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Parse the query parameters into an object
const answerCounts = Object.fromEntries(urlParams.entries());

function displayAnswerPercentages(answerCounts) {

  let answerPercentages = {};

  let percentageValen
  let percentageGaston;
  let percentageTomi;
  let playlist;
  // Calculate the percentages for each answer option
  if (answerCounts[1] >= 5) {
    percentageValen = (5 / 10) * 100;
    percentageGaston = (3 / 10) * 100;
    percentageTomi = (2 / 10) * 100;
    playlist = "valen";
  } else if (answerCounts[2] >= 5) {
    percentageValen = (3 / 10) * 100;
    percentageGaston = (6 / 10) * 100;
    percentageTomi = (1 / 10) * 100;
    playlist = "gaston";
  } else if (answerCounts[3] >= 5) {
    percentageValen = (2 / 10) * 100;
    percentageGaston = (2 / 10) * 100;
    percentageTomi = (6 / 10) * 100;
    playlist = "tomi";
  } else {
    percentageValen = (3 / 10) * 100;
    percentageGaston = (4 / 10) * 100;
    percentageTomi = (3 / 10) * 100;
    playlist = "empate";
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

  if (playlist == "valen") {
    document.querySelector('#display_valen').src = "media/resultados/valen_1.svg"
    document.querySelector('#display_gaston').src = "media/resultados/valen_2.svg"
    document.querySelector('#display_tomi').src = "media/resultados/valen_3.svg"
  }

  if (playlist == "gaston") {
    document.querySelector('#display_valen').src = "media/resultados/gaston_1.svg"
    document.querySelector('#display_gaston').src = "media/resultados/gaston_2.svg"
    document.querySelector('#display_tomi').src = "media/resultados/gaston_3.svg"
  }

  if (playlist == "tomi") {
    document.querySelector('#display_valen').src = "media/resultados/tomi_1.svg"
    document.querySelector('#display_gaston').src = "media/resultados/tomi_2.svg"
    document.querySelector('#display_tomi').src = "media/resultados/tomi_3.svg"
  }

  if (playlist == "empate") {
    document.querySelector('#display_valen').src = "media/resultados/empate_1.svg"
    document.querySelector('#display_gaston').src = "media/resultados/empate_2.svg"
    document.querySelector('#display_tomi').src = "media/resultados/empate_3.svg"
  }

  return playlist;
}

let playlist = displayAnswerPercentages(answerCounts);
let playlistPath;
if (playlist == "valen") {
  playlistPath = "data/playlist/playlist_valen.json";
} else if (playlist == "gaston") {
  playlistPath = "data/playlist/playlist_tonga.json";
} else if (playlist == "tomi") {
  playlistPath = "data/playlist/playlist_tomi.json";
} else {
  playlistPath = "data/playlist/playlist_empate.json";
}

// Plots

d3.json(playlistPath, d3.autoType).then((data)=>{
  const canciones = data.songs
  // console.log(canciones)
  let chart = Plot.plot({

    marks: [
      Plot.image(canciones,
        Plot.dodgeX({
          y: "explicit",
          padding: 15,
          r: 60,
          src: "blob",
          title:  d => `${d.name}\n${d.artist}`
        })
      ),
      Plot.axisY(
        {
          tickSize: 0,
          fontSize: 0,
        }
      )
    ],
    y: {
      label: '',
      ticks: 0,
    },
    width: 1000,
    height: 450,
    insetTop: 40,
    insetBottom: 40,
    style: {
      background: '#262323'
    }
  });

  d3.select("#chart_explicit").append(()=> chart);
  
  d3.selectAll("#chart_explicit image")
    .attr("clip-path", function(d) {
      return 0;
    }
  );

  d3.selectAll("#chart_explicit image")
  .each(function (d) {
    const image = d3.select(this);
    const titleText = image.select("title").text().split("\n")[0];
    console.log(titleText)
    const song = canciones.find((s) => s.name === titleText);
    image.attr("id", song.id);
    const danceability = song.danceability

    // clasificación de danceability 
    if (danceability < 0.33) {
      image.attr("class", "vibrate-animationL");
    } else if (danceability < 0.66) {
      image.attr("class", "vibrate-animationM");
    } else {
      image.attr("class", "vibrate-animationR");
    }
    
    image.attr("data-preview-url", song.preview_url);
    image
      .on("mouseover", function () {
        const previewUrl = d3.select(this).attr("data-preview-url");
        document.getElementById('audioPlayer').src = previewUrl;
        document.getElementById('audioPlayer').play();
      })
      .on("mouseout", function () {
        document.getElementById('audioPlayer').pause();
      });
    }
  );

})

d3.json(playlistPath, d3.autoType).then((data)=>{
  const canciones = data.songs
  // console.log(canciones)
  let chart = Plot.plot({

    marks: [
      Plot.image(canciones,
        Plot.dodgeY({
          x: "popularity",
          padding: 15,
          r: 40,
          src: "blob",
          title:  d => `${d.name}\n${d.artist}`
        })
      ),
      Plot.crosshairX(canciones, {x: "popularity", textFill: "#E6E6E6", textStroke: "#262323"})
    ],
    x: {
      tickRotate: 0,
      label: "Popularidad",
      domain: [0,100],
      tickSize: 0
    },
    width: 1200,
    height: 450,
    inset: 80,
    insetBottom: 100,
    style: {
      background: '#262323'
    }
  });

  d3.select("#chart_popularity").append(()=> chart);
  
  d3.selectAll("#chart_popularity image")
    .attr("clip-path", function(d) {
      return 0;
    }
  );
  
  d3.selectAll("#chart_popularity image")
  .each(function (d) {
    const image = d3.select(this);
    const titleText = image.select("title").text().split("\n")[0];
    console.log(titleText)
    const song = canciones.find((s) => s.name === titleText);
    image.attr("id", song.id);
    const danceability = song.danceability

    // clasificación de danceability 
    if (danceability < 0.33) {
      image.attr("class", "vibrate-animationL");
    } else if (danceability < 0.66) {
      image.attr("class", "vibrate-animationM");
    } else {
      image.attr("class", "vibrate-animationR");
    }
    
    image.attr("data-preview-url", song.preview_url);
    image
      .on("mouseover", function () {
        const previewUrl = d3.select(this).attr("data-preview-url");
        document.getElementById('audioPlayer').src = previewUrl;
        document.getElementById('audioPlayer').play();
      })
      .on("mouseout", function () {
        document.getElementById('audioPlayer').pause();
      });
    }
  );
})

d3.json(playlistPath, d3.autoType).then((data)=>{
  const canciones = data.songs
  // console.log(canciones)
  
  let chart = Plot.plot({
    marks: [
      Plot.image(canciones,
        Plot.dodgeY({
          x: "tempo",
          padding: 15,
          r: 40,
          src: "blob",
          title:  d => `${d.name}\n${d.artist}`
        })
      ),
      Plot.crosshairX(canciones, {x: "tempo", textFill: "#E6E6E6", textStroke: "#262323"})
    ],
    x: {
      tickRotate: 0,
      label: "Beats per minute",
      tickSize: 0
    },
    width: 1200,
    height: 450,
    inset: 80,
    insetBottom: 100,
    style: {
      background: '#262323'
    }
  });
  
  d3.select("#chart_tempo").append(()=> chart);
  
  d3.selectAll("#chart_tempo image")
    .attr("clip-path", function(d) {
      return 0;
    }
  );

  d3.selectAll("#chart_tempo image")
    .each(function (d) {
      const image = d3.select(this);
      const titleText = image.select("title").text().split("\n")[0];
      console.log(titleText)
      const song = canciones.find((s) => s.name === titleText);
      image.attr("id", song.id);
      const danceability = song.danceability

      // clasificación de danceability 
      if (danceability < 0.33) {
        image.attr("class", "vibrate-animationL");
      } else if (danceability < 0.66) {
        image.attr("class", "vibrate-animationM");
      } else {
        image.attr("class", "vibrate-animationR");
      }
      
      image.attr("data-preview-url", song.preview_url);
      image
        .on("mouseover", function () {
          const previewUrl = d3.select(this).attr("data-preview-url");
          document.getElementById('audioPlayer').src = previewUrl;
          document.getElementById('audioPlayer').play();
        })
        .on("mouseout", function () {
          document.getElementById('audioPlayer').pause();
        });
    }
  );
})