![alt text](./GIF/GIFDesktop.gif)

# GA2020_ScrollytellingArticle_YouTrend

 ## Table of contents
 * [General info](#general-info)
 * [Built with](#built-with)
 * [Project files](#project-files)
 * [Prerequisites](#prerequisites)
 * [Acknowledgments](#acknowledgments)
 * [d3 Visualizations](#d3-visualizations)
 * [Mobile Support](#mobile-support)
 * [License](#license)

 ## General info
 This is a scrollytelling article created for [YouTrend](https://www.youtrend.it "YouTrend's Homepage"). The content presents what people need to know before the 2021 Senate Goergia runoffs. The article is entirely created with html and javascript. The data displayed on the maps and charts has been either downloaded  manually or scratched with python, it has then been cleant with python and uploaded in a csv file on github, to be finally connected with the webpage.The article was published at [this link](https://www.youtrend.it/2021/01/04/usa-2020-dalla-georgia-passa-il-controllo-del-senato/ "USA 2020: dalla Georgia passa il controllo del Senato").


 ## Built with
 Project is created with:
 * Python
   * [Pandas](https://pandas.pydata.org/)
   * urllib.request
   * bs4
   * [selenium.webdriver](https://selenium-python.readthedocs.io/)
 * Javascript
   * [Mapbox-gl.js](https://www.mapbox.com/mapbox-gljs)
   * [d3.js](https://d3js.org/)

 ## Project files
 ### Python
 Python has been used to scrap data online and clean them. The resulting .csv files are joined with the geodata (maps) or are used to create d3 visualization.
 | File name                             |Description                                                                            |
 | ------------------------------------- |--------------------------------------------------------------------------------------|
 | Download_Data_Precinct.ipynb         | Scrap the precinct level results from each county webpage with selenium |
 | Data_transformation_Precinct.ipynb       | Clean precinct level data and save them in csv format |
 | Data_transformation_Counties.ipynb      | Clean county level data and save them in csv format |
 | Data_transformation_Early_voting.ipynb        | Clean data from vote registers (4 mio records) and save in csv the number of votes casted each day before elecyion day |

 ### Javascript
 The map, visualizations and article body are created with Javascript and html.
 | File name                             |Description                                                                            |
 | ------------------------------------- |--------------------------------------------------------------------------------------|
 | Index.html         | The main file. The body is made up by 3 divs and the javascript code to create the rest of the article |
 | contenuto.js       | In this file there is the article text and the settings of all chapters (paragraphs) |
 | mapHandling.js     | In this file the map and its layers are created |
 | senate_viz.js      | The visualization of the senate before the runoff |
 | barChart.js        | The barcharts of the two results of the November 3 elections |
 | barChartLegenda.js | The barchart that works as a legend for the map comparing results of Biden and Ossoff |
 | finanziamenti.js   | The amount of dollars spent written in a big, green text |
 | lineChart.js       | The linechart comparing early votes before November 3, 2020 and January 5, 2021 |

 ## Prerequisites
 * To run this page locally, you need to create a Mapbox access token by creating an account on [Mapbox.com](https://www.mapbox.com/).
 * To run the Python code to download and clean the necessary data, be sure to use the correct full paths when writing or reading files.

 ## Acknowledgments
 * The scrollytelling approach was created using the guide: ["How to build a “scrollytelling” map"](https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b);
 * Joining electoral results and geographical areas has been done following the ["Data Joins"](https://labs.mapbox.com/education/impact-tools/data-joins/) guide;
 * The senate visualization in the introduction was inspired from Tom Pearson's [2014 US senate election](http://bl.ocks.org/tomgp/59b5d482551ca14a4063) visualization for the Financial Times

 ## d3 Visualizations
 The following visualization are included in the article:
* Senate members before Georgia runoff
  ![alt text](./images/senate_viz.PNG)
* November 3 results </br>
  ![alt text](./images/bar_result.PNG)
* Legend to map comparing number of votes received by Biden and by Ossoff on November 3
  ![alt text](./images/bar_legend.PNG)
* Dollars spent between November 3 and January 5
  ![alt text](./images/dollars_spent.PNG)
* Comparison between November 3 early votes (dashed line) and January 5 early votes (black line)
  ![alt text](./images/early_vote.PNG)

 ## Mobile Support
 All maps and visualization are responsive. User experience on mobile is comparable with user experience on Desktop.
 ![alt text](./GIF/GIFMobile.gif)

 ## License
This project is licensed under the [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/).
