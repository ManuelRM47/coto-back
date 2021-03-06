var x = [];
for(var i = 0 ; i < 1000; i++){
  x.push((Math.random()*4100));
}
//promedio
var mean = 0;
for (var i = 0; i < x.length; i++) {
  mean += x[i];
}
mean /= x.length;

//console.log(mean);
var trace1 = {
  x:x,
  name: "Mean: " + mean.toFixed(2),
  type:'histogram',
  showlegend: true,
  //legendgroup: "Gg",
  opacity: 1,
  text: "Frecuency",
  hoverinfo: "x+y",
  histfunc:"count",
  histnorm: "",
  //nbinsx: x.length,
  //autobin: x.length
  xbins: {
    size: 100
  },
  marker:{
    line:{
      width: 1,
      color: 	"black"
    },
    color: "blue",
    hoverlabel: {
      bgcolor: "blue"
      //font:{
      //family,size,color
    //}
    },
  },
}
var sigma = {
  x:y,
  name: "Sgma: ",
  type:'histogram',
  showlegend: true,
}

var vc = {
  x:y,
  name: "VcPK: ",
  type:'histogram',
  showlegend: true,
}

var lc = {
  x:y,
  name: "LcPK: ",
  type:'histogram',
  showlegend: true,
}

var data = [trace1,sigma,vc,lc];
var layout = {
  title: "Operate Time",
  //showlegend: false
  dragmode: "pan",
  xaxis:{
    title: "Usecs",
    autorange: false,
    range: [-300,6000],
    zeroline:false
  },
  yaxis:{
    title: "Frecuency",
    autorange: true
  },
  barmode:"overlay",
  //annotations[]
  //barmode: "overlay"
  //bargap: 0
  shapes:[
      {
        type:'line',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 55,
        line:{
          color: "red",
          width: 3,
          dash: 'dot'
        }
      },
    {
      type:'line',
      x0: 4000,
      y0: 0,
      x1: 4000,
      y1: 55,
      line:{
        color: "red",
        width: 3,
        dash: 'dot'
      }
    }
  ],
  annotations: [
    {
      x: 0,
      y: 55,
      xref: 'x',
      yref: 'y',
      text: 'Test Limit',
      showarrow: true,
      arrowhead: 7,
      ax: 0,
    },
    {
      x: 4000,
      y: 55,
      xref: 'x',
      yref: 'y',
      text: 'Test Limit',
      showarrow: true,
      arrowhead: 7,
      ax: 0,
    },
    {
      x: mean,
      y: 55,
      xref: 'x',
      yref: 'y',
      text: 'Mean',
      showarrow: true,
      arrowhead: 7,
      ax: 0,
    }
  ]
};
Plotly.newPlot('OT',data,layout,{responsive: true});
