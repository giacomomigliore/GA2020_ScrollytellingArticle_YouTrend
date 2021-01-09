/**
 * Barchart as legends illustrating election result.
 *
 * The file desings two baarcharts using d3 in a parent div already present into the webpage.
 * November 3 election results are illustrated.
 * Barcharts are created through a function because there are two such illustrations.
 * This function is called twice at the end of this file.
 *
 */

/**
 * @param {string}   divID                ID of the parent div.
 * @param {float}    RepArg               Result of republican candidate.
 * @param {float}    DemArg               Result of democratic candidate.
 * @param {string}   CandidateR           Republican candidate name.
 * @param {string}   CandidateD           Democratica candidate name.
 *
 */
function barChart(divID, RepArg, DemArg, CandidateR, CandidateD) {

  // Make the barchart responsive:
  // Define the barchart dimensions according to its parent div
  var margin = {top:10,left:0,bottom:10,right:0};
  var width = (document.getElementById(divID).clientWidth) * 2 / 3;
  var height = 40;
  // If mobile, reduce the width more
  if (width < 350){
    width = width / 2 * 3;
    var height = height / 0.75;
  }
  var plotHeight = 40 + margin.top + margin.bottom;
  var plotWidth = width - (margin.left + margin.right);

  // Format the data
  var data = [
      {Dem: DemArg, Oth: 100 - DemArg - RepArg, Rep: RepArg }
      ];

  // The barchart uses the stacked chart methods of d3
  var stackGen = d3.stack()
    .keys(["Dem", "Oth", "Rep"]);
  var stackedSeries = stackGen(data);

  // Set the ranges.
  // Ranges are used to interpolate the values to plot on the x and y axis within the dimension of the area of the chart (in pixels).
  var xScale = d3.scaleLinear()
    .domain([0,100])
    .range([plotWidth,0]);

  // Bind colors to domains
  var colorScale = d3.scaleOrdinal()
    .domain(["Rep", "Oth", "Dem"])
    .range(["#a32121", "#CCC", "#253278"]);

  // Retrieve the div where the linechiart will be inserted
  // Append the svgLC obgect to the body of the page
  // Corrects to viewBox to correctly show the y axis lables
  // Center the chart with CSS display and margin attributes
  // Move to the top left margin
  const svg = d3.select("#" + divID)
  .append("svg")
  .attr("width", plotWidth)
  .attr("height", plotHeight)
  .style("display", 'block')
  .style("margin", 'auto')

  // Set the colors
  var sel = svg
    .selectAll('g.series')
    .data(stackedSeries)
    .enter().append('g')
    .classed('series', true)
    .style('fill', (d) => colorScale(d.key));

  // Plot the stacked rectangles
  sel.selectAll('rect')
    .data((d) => d)
    .enter().append('rect')
    .attr('y', margin.top)
    .attr('x', (d) => xScale(d[1]))
    .attr('width', (d) => xScale(d[0]) -  xScale(d[1]))
    .attr('height', height);

  // Add a border
  svg.append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("height", height)
    .attr("width", width)
    .style("stroke", "#000")
    .style("fill", "none")
    .style("stroke-width", "1px");


  // Add the names of the candidates and their results in the rectangles
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

// Create the two barcharts in the already existing divs
barChart("bar_Per_Oss", 49.7, 47.9, "Perdue", "Ossoff");
barChart("bar_Loe_war", 25.9, 32.9, "Loeffler", "Warnock");
