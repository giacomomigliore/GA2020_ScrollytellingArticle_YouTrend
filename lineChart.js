var margin = {top:30, right: 30, bottom: 30, left: 60};

var widthLC = document.getElementById('linechart').clientWidth;
var heightLC = widthLC*2/5;
var plotWidthLC = widthLC - (margin.left + margin.right);

// set the ranges
var xLC = d3.scaleLinear().range([0, plotWidthLC]);
var yLC = d3.scaleLinear().range([heightLC, 0]);

// define the 1st line
var valueline = d3.line()
  .curve(d3.curveCatmullRomOpen)
  .x(function(d) { return xLC(d.dayToElection); })
  .y(function(d) { return yLC(d.ev2020); });

//console.log(xLC(d.ev2020));
// define the 2nd line
var valueline2 = d3.line()
  .curve(d3.curveMonotoneX)
  .x(function(d) { return xLC(d.dayToElection); })
  .y(function(d) {  return yLC(d.ev2021); });

// append the svgLC obgect to the body of the page
// appends a 'group' element to 'svgLC'
// moves the 'group' element to the top left margin
var svgLC = d3.select("#linechart").append("svg")
  .attr("width", plotWidthLC + margin.left + margin.right)
  .attr("height", heightLC + margin.top + margin.bottom)
  .attr("viewBox", "-30 +15 " + (plotWidthLC + margin.left + margin.right + 20) + " " + (heightLC + margin.top + margin.bottom - 10))
  .style("display", 'block')
  .style("margin", 'auto')
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Get the dataLC
d3.csv("https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/earlyVoting%20-%20Copy.csv").then( function( data) {
// if (error) throw error;

// format the dataLC
data.forEach(function(d) {
    d.dayToElection = +d.dayToElection;
    d.ev2020 = +d.ev2020;
    d.ev2021 = +d.ev2021;
});

    console.log("ci sono");
// Scale the range of the dataLC
xLC.domain([1, d3.max(data, function(d) {
   return d.dayToElection; })]);
yLC.domain([0, d3.max(data, function(d) {
  return Math.max(d.ev2020, d.ev2021); })]);


// Add the valueline path.
svgLC.append("path")
    .data([data])
    .attr("class", "line")
    .style("stroke", "purple")
    .style("stroke-dasharray", "5,3")
    .attr("d", valueline);

// Add the valueline2 path.
svgLC.append("path")
    .data([data])
    .attr("class", "line")
    .style("stroke", "black")
    .style("stroke-width", "3px")
    .attr("d", valueline2);


svgLC.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", plotWidthLC)
    .attr("y", heightLC + 40)
    .style("font-size","12px")
    .text("Giorni dall'apertura del voto anticipato");


// Add the xLC Axis
svgLC.append("g")
    .style("font-size","12px")
    .attr("transform", "translate(0," + heightLC + ")")
    .call(d3.axisBottom(xLC).ticks(8));

// Add the yLC Axis
svgLC.append("g")
    .call(d3.axisLeft(yLC).ticks(4));//..style("font-size","12px");

d3.selectAll(".tick")
.classed("axis", true);

});
