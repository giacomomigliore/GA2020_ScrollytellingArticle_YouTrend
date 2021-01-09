/**
 * Text displaying the amount of dollars spent.
 *
 * The file desings a text using d3, whose dimension is responsive to the device,
 * indicating the total amount of dollars spent between November 3 and January 5
 *
 */

// Make the barchart responsive:
// Define the barchart dimensions according to its parent div
var margin = {top:10,left:0,bottom:10,right:0};
var widthFin = (document.getElementById("title_finanziamenti").clientWidth);
var heightFin = widthFin / 6 + 150;
if (widthFin < 350){
  heightFin = heightFin / 0.75;
}

// Retrieve the div where the linechiart will be inserted
// Append the svgLC obgect to the parent div
// Center the chart with CSS display and margin attributes
const svgFinanziamenti = d3.select("#title_finanziamenti")
.append("svg")
.attr("width", widthFin)
.attr("height", heightFin)
.style("display", 'block')
.style("margin", 'auto')

// Add the text
svgFinanziamenti.append("text")
  .attr("dx", 10)
  .attr("dy", heightFin / 2)
  .text("$447.000.000")
  .attr('fill', '#85bb65')
  .style('font-size', widthFin / 8 + 'px')
  .style('font-weight', '900')
  .style('stroke', 'black')
  .style('stroke-width', '1px')
  .attr("dominant-baseline", "middle")
