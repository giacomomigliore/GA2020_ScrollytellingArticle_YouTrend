# GA2020_ScrollytellingArticle_YouTrend
 In this repo is the code to extract, transform, load and visualize the data and the code to design the scrollytelling article I wrote together with Gianluca Lo Nostro for [YouTrend](https://www.youtrend.it "YouTrend's Homepage"). The article was published at [this page](https://www.youtrend.it/2021/01/04/usa-2020-dalla-georgia-passa-il-controllo-del-senato/ "USA 2020: dalla Georgia passa il controllo del Senato").


 ## Table of contents
 * [General info](#general-info)
 * [Final result](#final-result)
 * [Visualizations](#visualizations)
 * [Built with](#built-with)
 * [Prerequisites](#prerequisites)
 * [License](#license)

 ## General info
 This is a scrollytelling article created for YouTrend. The content presents what people need to know before the 2021 Senate Goergia runoffs. The article is entirely created with html and javascript. The data displayed on the mapx and charts has been downloaded either manually or scratched with python, it has been cleant with python and uploaded in csv filed on github.

 ## Final result
  ![alt text](./GIF/GIFDesktop.gif)

 ## Visualizations
 * Senate members before Georgia runoff
   <img src="https://github.com/giacomomigliore/GA2020_ScrollytellingArticle_YouTrend/tree/main/images/senate_viz.PNG" width="700">
 * November 3 results
   ![alt text](https://github.com/giacomomigliore/GA2020_ScrollytellingArticle_YouTrend/tree/main/images/bar_result.PNG)
 * Legend to map comparing number of votes received by Biden and by Ossoff on November 3
   ![alt text](./images/bar_legend.PNG)
 * Dollars spent between November 3 and January 5
   ![alt text](./images/dollars_spent.PNG)
 * Comparison between November 3 early votes (dashed line) and January 5 early votes (black line)
   ![alt text](./images/early_vote.PNG)

 ## Built with
 Project is created with:
 * Python
   * Pandas
   * urllib.request
   * bs4
   * selenium.webdriver
 * Javascript
   * Mapbox-gl.js
   * d3.js

 ## Prerequisites
To run this page locally, you need to create a Mapbox access token by creating an account on Mapbox.com.
To run the Python code to download and clean the necessary data, be sure to use the correct full paths when writing or reading files.

 ## License
This project is licensed under the [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/).
