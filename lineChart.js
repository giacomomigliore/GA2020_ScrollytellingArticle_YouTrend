/**
 * Linechart plotting early votes.
 *
 * The file desings a linechart using d3 in a parent div already present into the webpage.
 * Early votes refer to votes caste before Novembre 3 2020 and before January 5 2021.
 *
 */

// Make the linechart responsive:
// Define the linechart dimensions according to its parent div
var widthLC = document.getElementById('linechart').clientWidth;
var margin = {top:30, right: 30, bottom: 30, left: 60};
var heightLC = widthLC*2/5;
var plotWidthLC = widthLC - (margin.left + margin.right);

// Set the ranges.
// Ranges are used to interpolate the values to plot on the x and y axis within the dimension of the area of the chart (in pixels).
var xLC = d3.scaleLinear().range([0, plotWidthLC]);
var yLC = d3.scaleLinear().range([heightLC, 0]);

// Define the path of the line plotting the early votes of November 3 election.
var valueline = d3.line()
  .curve(d3.curveCatmullRomOpen)
  .x(function(d) { return xLC(d.dayToElection); })
  .y(function(d) { return yLC(d.ev2020); });

// Define the path of the line plotting the earlz votes of November 3.
var valueline2 = d3.line()
  .curve(d3.curveMonotoneX)
  .x(function(d) { return xLC(d.dayToElection); })
  .y(function(d) {  return yLC(d.ev2021); });


// Retrieve the div where the linechiart will be inserted
// Append the svgLC obgect to the body of the page
// Corrects to viewBox to correctly show the y axis lables
// Center the chart with CSS display and margin attributes
// Move to the top left margin
var svgLC = d3.select("#linechart").append("svg")
  .attr("width", plotWidthLC + margin.left + margin.right)
  .attr("height", heightLC + margin.top + margin.bottom)
  .attr("viewBox", "-30 +15 " + (plotWidthLC + margin.left + margin.right + 20) + " " + (heightLC + margin.top + margin.bottom - 10))
  .style("display", 'block')
  .style("margin", 'auto')
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Get the data from the online file and afterwards (then) plot them
d3.csv("https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/earlyVoting%20-%20Copy.csv").then( function( data) {

// Format the data
data.forEach(function(d) {
    d.dayToElection = +d.dayToElection;
    d.ev2020 = +d.ev2020;
    d.ev2021 = +d.ev2021;
});

// Scale the data to the range defined above
xLC.domain([1, d3.max(data, function(d) {
   return d.dayToElection; })]);
yLC.domain([0, d3.max(data, function(d) {
  return Math.max(d.ev2020, d.ev2021); })]);

// Add the November 3 line
svgLC.append("path")
    .data([data])
    .attr("class", "line")
    .style("stroke", "purple")
    .style("stroke-dasharray", "5,3")
    .attr("d", valueline);

// Add the January 5 line
svgLC.append("path")
    .data([data])
    .attr("class", "line")
    .style("stroke", "black")
    .style("stroke-width", "3px")
    .attr("d", valueline2);

// Add a lable to clarify the x axisLeft
svgLC.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", plotWidthLC)
    .attr("y", heightLC + 40)
    .style("font-size","12px")
    .text("Giorni dall'apertura del voto anticipato");


// Add the x axis
svgLC.append("g")
    .style("font-size","12px")
    .attr("transform", "translate(0," + heightLC + ")")
    .call(d3.axisBottom(xLC).ticks(8));

// Add the y axis
svgLC.append("g")
    .call(d3.axisLeft(yLC).ticks(4));//..style("font-size","12px");

// Add the ticks
d3.selectAll(".tick")
.classed("axis", true);

});
