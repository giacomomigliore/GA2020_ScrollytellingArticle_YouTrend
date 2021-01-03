var order = [
	'R',
	'YesR',
	'YesB',
	'YesD',
	'D',
	'I' ]

var widthS = document.getElementById('senate-example').clientWidth;
var heightS = widthS*3/7;
if(mobileDisplay){heightS = heightS + 50};
var marginS = {top:80,left:20,bottom:20,right:20};
var plotWidthS = widthS - (marginS.left + marginS.right);
var circleRadiusElection = 5;
var circleRadius = 2;

var svg = d3.select('#senate-example')
	.append('svg')
		.attr('width',widthS)
		.attr('height', heightS)
		.attr('style','margin:auto;')
		.attr('viewBox', '0 0 ' + widthS + ' ' + heightS)
		.attr('preserveAspectRatio', 'xMidYMid Meet')
	.append('g')
		.attr('id','chart')
		.attr('style','margin:auto;')
		.attr('transform','translate('+marginS.left+','+marginS.top+')')

d3.csv("https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/data-senate-2020.csv")
	.then(function (dataS) {
	var sorted = dataS.sort(function(a,b){
	return order.indexOf(a['order']) - order.indexOf(b['order']);
});

var layout = d3_iconarray.layout().height(5).widthFirst(false);

var grid = layout(sorted);

var scale = d3_iconarray.scale()
	.domain([0, layout.maxDimension(sorted.length)])
	.range([0, plotWidthS])
	.gapInterval(10)
	.gapSize(1);

svg.selectAll('circle')
	.data(grid, function(d){ return d.data.seatid; })
		.enter()
	.append('circle')
		.attr('r',function(d){
			if(d.data.election){
				return circleRadiusElection
			}
			return circleRadius
		})
		.attr('cx',function(d){
			return scale(d.position.x);
		})
		.attr('cy',function(d){
			return scale(d.position.y);
		})
		.attr('class',function(d){
			return d.data["result.winner"].replace(/\s/g,'-')
		});

var chartWidth = d3.select('g#chart').node().getBBox().width;
var chartHeight = d3.select('g#chart').node().getBBox().height;

svg.append('line')
	.style("stroke", "#a7a59b")
	.style("stroke-width", 1)
	.attr("x1", chartWidth/2)
	.attr("y1", -50)
	.attr("x2", chartWidth/2)
	.attr("y2", chartHeight);

var textRepDem = ['Repubblicani','Democratici'];
svg.append("text").selectAll("tspan")
  .data(textRepDem)
  .enter().append("tspan")
  .attr("y",-15)
  .attr("text-anchor",function(d,i){ if (i==0) return 'start'; else return 'end';})
	.attr('x',function(d,i){ return -1 + (i*chartWidth); })
	.attr('fill','#74736c')
	.style('font-size', 25 * (chartWidth / 600) + 'px')
	.text(function(d){ return d; });

var textNum = ['50','48'];
svg.append("text").selectAll("tspan")
  .data(textNum)
  .enter().append("tspan")
  .attr("y",-15)
  .attr("text-anchor",function(d,i){ if (i==1) return 'start'; else return 'end';})
	.attr('x',function(d,i){ if (i==1) return chartWidth/2+10; else return chartWidth/2-10 })
	.attr('fill',function(d,i){ if (i==1) return '#253278'; else return '#a32121'})
	.style('font-size', 45 * (chartWidth / 600) + 'px')
	.text(function(d){ return d; });


var columns = [
	['Repubblicano'],
	['Ballottaggio'],
	['Democratico']
];

d3.select('svg').selectAll('g.key-column')
	.data(columns).enter()
	.append('g')
		.attr('class','key-column')
		.attr('transform',function(d,i){
			return 'translate('+(marginS.left + (i*plotWidthS/columns.length))+','+ (marginS.top*1.2 + scale(layout.height())) +')';
		})
		.each(function(columnData){
			d3.select(this)
					.selectAll('g.key-element')
				.data(columnData)
					.enter()
				.append('g')
					.attr('class','key-element')
					.attr('transform',function(d,i){
						return 'translate(0,'+scale(i)+')';
					})
				.call(function(parent){
					parent.append('circle')
						.attr('cy',-5)
						.attr('r',function(d){
							if(d==='D'||d==='R'){
								return circleRadius
							}
							return circleRadiusElection
						})
						.attr('class',function(d){
							return d.replace(/\s/g,'-')
						});

					parent.append('text')
						.attr('dx', marginS.left)
						.style('font-size', 20 * (chartWidth / 600) + 'px')
						.text(function(d){
							if(d==='R') return 'Rep (no election)'
							if(d==='D') return 'Dem (no election)'
							if(d==='B') return 'Ballottaggio' //added the shrugging guy to make the key look abalanced ¯\_(ツ)_/¯
							return d;
						})
				});
		});
});

// var svgBar = d3.select("#results-bar"),
// 		margin = {top: 35, left: 35, bottom: 0, right: 15},
// 		width = +svgBar.attr("width") - margin.left - margin.right,
// 		height = +svgBar.attr("height") - margin.top - margin.bottom;
//
// var bars = svgBar.selectAll("g.layer").selectAll("rect")
// 			.data([20,60,20]);
//
// bars.exit().remove()
//
// barsselectAll("rect")
// 	.data([20,30,60])
// 	.enter().append("rect")
// 	.attr("height", y.bandwidth())
// 	.merge(bars)
// 	.transition().duration(speed)
// 	.attr("y", d => y(["b","e","c"]))
// 	.attr("x", d => x(d[0]))
// 	.attr("width", d => x(d[1]) - x(d[0]))
//
// 	// data.sort(function(a, b) { return b.total - a.total; });
//  // y.domain(data.map(function(d) { return d.State; }));					// x.domain...
//  // x.domain([0, d3.max(data, function(d) { return d.total; })]).nice();	// y.domain...
//  // z.domain(keys);
//
//  g.append("g")
// 	 .selectAll("g")
// 	 .data(d3.stack().keys(keys)(data))
// 	 .enter().append("g")
// 		 .attr("fill", function(d) { return z(d.key); })
// 	 .selectAll("rect")
// 	 .data(function(d) { return d; })
// 	 .enter().append("rect")
// 		 .attr("y", function(d) { return y(d.data.State); })	    //.attr("x", function(d) { return x(d.data.State); })
// 		 .attr("x", function(d) { return x(d[0]); })			    //.attr("y", function(d) { return y(d[1]); })
// 		 .attr("width", function(d) { return x(d[1]) - x(d[0]); })	//.attr("height", function(d) { return y(d[0]) - y(d[1]); })
// 		 .attr("height", y.bandwidth());


var widthBar = 960 - marginS.left - marginS.right,
    heightBar = 500 - marginS.top - marginS.bottom;

var svgBar = d3.select("body")
  .append("svg")
  .attr("width", widthBar + marginS.left + marginS.right)
  .attr("height", heightBar + marginS.top + marginS.bottom)
  .append("g")
  .attr("transform", "translate(" + marginS.left + "," + marginS.top + ")");


/* Data in strings like it would be if imported from a csv */

var data = [
  { year: "2006", redDelicious: "10", mcintosh: "15", oranges: "9", pears: "6" },
];


// Transpose the data into layers
// var dataset = d3.layout.stack()(["redDelicious", "mcintosh", "oranges", "pears"].map(function(fruit) {
//   return data.map(function(d) {
//     return {x: parse(d.year), y: +d[fruit]};
//   });
// }));

//
// // Set x, y and colors
// var x = d3.scale.ordinal()
//   .domain(dataset[0].map(function(d) { return d.x; }))
//   .rangeRoundBands([10, widthBar-10], 0.02);
//
// var y = d3.scale.linear()
//   .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
//   .range([heightBar, 0]);
//
// var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];
//
// // Create groups for each series, rects for each segment
// var groups = svgBar.selectAll("g.cost")
//   .data(dataset)
//   .enter().append("g")
//   .attr("class", "cost")
//   .style("fill", function(d, i) { return colors[i]; });
//
// var rect = groups.selectAll("rect")
//   .data(function(d) { return d; })
//   .enter()
//   .append("rect")
//   .attr("x", function(d) { return x(d.x); })
//   .attr("y", function(d) { return y(d.y0 + d.y); })
//   .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//   .attr("width", x.rangeBand());
