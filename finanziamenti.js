var margin = {top:10,left:0,bottom:10,right:0};
var widthFin = (document.getElementById("title_finanziamenti").clientWidth);
var heightFin = widthFin / 6 + 150;
if (widthFin < 350){
  heightFin = heightFin / 0.75;
}

console.log(widthFin);
console.log(heightFin);
console.log(d3.select("#title_finanziamenti"));
const svgFinanziamenti = d3.select("#title_finanziamenti")
.append("svg")
.attr("width", widthFin)
.attr("height", heightFin)
.style("display", 'block')
.style("margin", 'auto')

svgFinanziamenti.append("text")
  .attr("dx", 10)
  .attr("dy", heightFin / 2)
  .text("$447.000.000")
  .attr('fill', '#85bb65')
  // .attr('stroke-dasharray', '2,2')
  // .attr('stroke-linejoin', 'round')
  .style('font-size', widthFin / 8 + 'px')
  .style('font-weight', '900')
  .style('stroke', 'black')
  .style('stroke-width', '1px')
  .attr("dominant-baseline", "middle")
