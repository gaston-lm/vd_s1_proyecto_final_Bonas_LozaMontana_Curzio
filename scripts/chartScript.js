d3.json("data/pruebas.json", d3.autoType).then((data)=>{
  const canciones = data.canciones
  console.log(canciones)
  let chart = Plot.plot({

    marks: [
      // Plot.dot(canciones, {
      //   x: "popularity",
      //   y: "danceability",
      //   title: d => d.name,
      //   fill: "integrante",
      //   r: 4
      // }),
      Plot.image(canciones,
        Plot.dodgeY({
          x: "integrante",
          padding: 15,
          r: 40,
          src: "blob",
          anchor: "middle",
          title: "name"
        })
      ),
    ],
    // x: { label: "tempo" },
    // y: { label: "Danceability" },
    width: 1200,
    height: 500,
    inset: 80,
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