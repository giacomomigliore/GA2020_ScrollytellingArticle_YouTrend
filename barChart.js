function barChart(divID, RepArg, DemArg, CandidateR, CandidateD, colour) {
  var margin = {top:10,left:0,bottom:10,right:0};
  var width = (document.getElementById(divID).clientWidth) * 2 / 3;
  var height = 40;
  if (width < 350){
    width = width / 2 * 3;
    var height = height / 0.75;
  }
  var plotHeight = 40 + margin.top + margin.bottom;
  var plotWidth = width - (margin.left + margin.right);
  var data = [
      {Dem: DemArg, Oth: 100 - DemArg - RepArg, Rep: RepArg }
      ];

  var stackGen = d3.stack()
    .keys(["Dem", "Oth", "Rep"]);

  var stackedSeries = stackGen(data);

  var xScale = d3.scaleLinear()
    .domain([0,100])
    .range([plotWidth,0]);

  var colorScale = d3.scaleOrdinal()
    .domain(["Rep", "Oth", "Dem"])
    .range(["#a32121", "#CCC", "#253278"]);

  const svg = d3.select("#" + divID)
  .append("svg")
  .attr("width", plotWidth)
  .attr("height", plotHeight)
  .style("display", 'block')
  .style("margin", 'auto')

  var sel = svg
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
    .attr('height', height);

  svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("height", height)
    .attr("width", width)
    .style("stroke", "#000")
    .style("fill", "none")
    .style("stroke-width", "1px");



  var text = [CandidateD + " " + DemArg.toString() + "%", RepArg.toString() + "% " + CandidateR];
  svg.append("text").selectAll("tspan")
    .data(text)
    .enter().append("tspan")
    .attr("y", ((height + margin.top) / 2) + 5 )
    .attr('x',function(d,i){ if (i==1) return 15 + margin.left ; else return width - margin.right - 15; })
    .attr("text-anchor",function(d,i){ if (i==1) return 'start'; else return 'end';})
    .attr("dominant-baseline", "central")
    .attr('fill', 'white')
    .style('font-size', 16 + 'px')
  	.style('font-weight', '700')
  	.style('stroke', 'black')
  	.style('stroke-width', '0.5px')
    .text(function(d){ return d; });
}

barChart("bar_Per_Oss", 49.7, 47.9, "Perdue", "Ossoff", 'black');
barChart("bar_Loe_war", 25.9, 32.9, "Loeffler", "Warnock", 'black');
