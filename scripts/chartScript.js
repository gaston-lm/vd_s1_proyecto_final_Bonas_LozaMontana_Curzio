d3.json("data/playlist/playlist_valen.json", d3.autoType).then((data)=>{
  const canciones = data.songs
  console.log(canciones)
  let chart = Plot.plot({

    marks: [
      Plot.image(canciones,
        Plot.dodgeX({
          y: "explicit",
          padding: 15,
          r: 60,
          src: "blob",
          title: "name"
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

  d3.select("#chart").append(()=> chart);
  
  d3.selectAll("#chart image")
  .attr("clip-path", function(d) {
    return 0;
  }
);
})