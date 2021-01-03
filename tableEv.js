var dataEv = [
 {
   "Etnia": "Non-Hispanic White",
   "Voti anticipati": "1676517",
   "Elettori registrati": "4078114",
   "Tasso di affluenza": "41.1"
 },
 {
   "Etnia": "Non-Hispanic Black",
   "Voti anticipati": "923993",
   "Elettori registrati": "2321975",
   "Tasso di affluenza": "39.8"
 },
 {
   "Etnia": "Hispanic",
   "Voti anticipati": "67282",
   "Elettori registrati": "281955",
   "Tasso di affluenza": "23.9"
 },
 {
   "Etnia": "Non-Hispanic Asian American",
   "Voti anticipati": "73199",
   "Elettori registrati": "200808",
   "Tasso di affluenza": "36.5"
 },
 {
   "Etnia": "Non-Hispanic Native American",
   "Voti anticipati": "3998",
   "Elettori registrati": "16132",
   "Tasso di affluenza": "24.8"
 },
 {
   "Etnia": "Other/Multiple/Unknown",
   "Voti anticipati": "255996",
   "Elettori registrati": "839600",
   "Tasso di affluenza": "30.5"
 },
 {
   "Etnia": "TOTAL",
   "Voti anticipati": "3002100",
   "Elettori registrati": "7738584",
   "Tasso di affluenza": "38.8"
 }
]

	var table = d3.select('#tabellaEv').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(['Etnia', 'Voti anticipati', 'Elettori registrati', 'Tasso di affluenza']).enter()
	  .append('th')
	    .text(function (column) { return column; })
      .style( 'font-weight', 'bold' );

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(dataEv)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return ['Etnia', 'Voti anticipati', 'Elettori registrati', 'Tasso di affluenza'].map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });
