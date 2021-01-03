  var margin = {top:25,left:5,bottom:10,right:5};
  var widthBidOss = (document.getElementById("bar_Bid_Oss").clientWidth) * 2 / 3;
  var heightBidOss = 40;
  if (widthBidOss < 350){
    widthBidOss = widthBidOss / 2 * 3;
    var heightBidOss = heightBidOss / 0.75;
  }
  var plotheightBidOss = 40 + margin.top + margin.bottom;
  var plotwidthBidOss = widthBidOss - (margin.left + margin.right);
  var data = [{ a: 5, b: 5, c: 5, d: 5, e: 5, f: 5, g: 5, h: 5, i: 5, j: 5, k: 5, l: 5, m: 5, n: 5, o: 5, p: 5, q: 5, r: 5, s: 5, t: 5}];

  var stackGen = d3.stack()
    .keys(["a", "b", "c","d", "e", "f","g", "h", "i","j","k", "l","m", "n", "o","p", "q", "r","s", "t"]);

  var stackedSeries = stackGen(data);

  var xScale = d3.scaleLinear()
    .domain([0,100])
    .range([plotwidthBidOss,0]);

  var colorScale = d3.scaleOrdinal()
    .domain(["a", "b", "c","d", "e", "f","g", "h", "i","j",
    "k", "l","m", "n", "o","p", "q", "r","s", "t"])
    .range(['#ffbc30','#f8b438','#f2ad3f','#eba545','#e49d4b',
          '#de9650','#d78e54','#d08758','#c9805c','#c2785f',
          '#bb7162','#b46a66','#ad6268','#a65b6b','#9f546e',
          '#974d70','#8f4673','#883f75','#7f3877','#773079']);

  console.log(d3.select("#bar_Bid_Oss"));

  const svgBidOss = d3.select("#bar_Bid_Oss")
  .append("svg")
  .attr("width", plotwidthBidOss)
  .attr("height", plotheightBidOss)
  .style("display", 'block')
  .style("margin", 'auto')

  var sel = svgBidOss
    .selectAll('g.series')
    .data(stackedSeries)
    .enter().append('g')
    .classed('series', true)
    .style('fill', (d) => colorScale(d.key));

  sel.selectAll('rect')
    .data((d) => d)
    .enter().append('rect')
    .attr('y', margin.top)
    .attr('x', (d) => xScale(d[1]))
    .attr('width', (d) => xScale(d[0]) -  xScale(d[1]))
    .attr('height', heightBidOss);

  var text = ["Ossoff","Biden"];
  svgBidOss.append("text").selectAll("tspan")
    .data(text)
    .enter().append("tspan")
    .attr("y", 15)
    .attr('x',function(d,i){ if (i==1) return margin.left -5; else return widthBidOss - margin.right - 5; })
    .attr("text-anchor",function(d,i){ if (i==1) return 'start'; else return 'end';})
    .attr("dominant-baseline", "central")
    .attr('fill', "black")
    .style('font-size', 16 + 'px')
    .text(function(d){ return d; });
