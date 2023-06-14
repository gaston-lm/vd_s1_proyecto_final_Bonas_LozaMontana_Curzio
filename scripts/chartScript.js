d3.json("data/categorizadas.json", d3.autoType).then((data)=>{
  const canciones = data.canciones
  console.log(canciones)
  let chart = Plot.plot({
    
    marks: [
      Plot.dot(canciones, {
        x: "popularity",
        y: "danceability",
      }),
    ],
    x: { label: "Popularity" },
    y: { label: "Danceability" },
    width: 500,
    height: 400, 
  });

  d3.select("#chart").append(()=> chart);
})