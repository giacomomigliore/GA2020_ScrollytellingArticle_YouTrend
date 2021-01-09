/**
 * Senate visualization.
 *
 * The file desings 100 dots, one for each senator, with the colout of its party.
 * Senators in a race on November 3 have bigger dots, and races that needed a runoff to
 * determine a winner were coloured in light grey.
 *
 * This code is an adaptation from: http://bl.ocks.org/tomgp/59b5d482551ca14a4063
 *
 */

// Used to order the dots
var order = [
	'R',
	'YesR',
	'YesB',
	'YesD',
	'D',
	'I' ]


// Make the barchart responsive:
// Define the barchart dimensions according to its parent div
var widthS = document.getElementById('senate-example').clientWidth;
var heightS = widthS*3/7;
if(mobileDisplay){heightS = heightS + 50};
var marginS = {top:80,left:20,bottom:20,right:20};
var plotWidthS = widthS - (marginS.left + marginS.right);
var circleRadiusElection = 5;
var circleRadius = 2;

// Retrieve the div where the linechiart will be inserted
// Append the svgLC obgect to the parent div
// Takes the full sizw of its parent
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

// Get the data from the csv and then sort them
d3.csv("https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/data-senate-2020.csv")
	.then(function (dataS) {
	var sorted = dataS.sort(function(a,b){
	return order.indexOf(a['order']) - order.indexOf(b['order']);
});

// Create a layout (see d3_iconarray.js)
// widthfirst(false) puts republicans on the left side and democrats on the right side
var layout = d3_iconarray.layout().height(5).widthFirst(false);
var grid = layout(sorted);

// Set the ranges
var scale = d3_iconarray.scale()
	.domain([0, layout.maxDimension(sorted.length)])
	.range([0, plotWidthS])
	.gapInterval(10)
	.gapSize(1);

// Add the dots
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

// Add a line in between the Reps and the Dems
svg.append('line')
	.style("stroke", "#a7a59b")
	.style("stroke-width", 1)
	.attr("x1", chartWidth/2)
	.attr("y1", -50)
	.attr("x2", chartWidth/2)
	.attr("y2", chartHeight);

// Add a description
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

// Add a legend
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
