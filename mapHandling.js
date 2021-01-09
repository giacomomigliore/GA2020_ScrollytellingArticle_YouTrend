/**
 * Maabox map settings.
 *
 * In this file the lazers of the map are created through mapbox-gl.js.
 * This step could also be performed in Mapbox Studio, but I found it easier to do it here.
 *
 */

// handle resize
var locationMobile = null;
var locationBounds = null;
var chapterFly = null;
var chapterEase = null;

// If the windows resizes, center the map again on the right location
window.addEventListener('resize', function(event){
    if (mobileDisplay) if(chapterFly) map.easeTo(locationMobile); else map.jumpTo(locationMobile);
    else if(chapterFly) map.fitBounds(locationBounds); else map.fitBounds(locationBounds, {linear: true, duration: 0});
});

// This map uses two styles, one for the title page (with cities in the backgroun)
// and one for the rest of the article (which grey background). This variable
// keeps track of which style is used
var stileNeutro = false;

// If screen size < 750 px, it is treated as mobile
var mobileDisplay = null;
if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)<750) mobileDisplay = true; else mobileDisplay = false;

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    console.log(layer);
    var layerType = map.getLayer(layer).type;
    // console.log("successo");
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

// Function to add alla data layers. It is called once at the beginning and when the style is changed.
function addDataLayer() {
  // counties
  map.addSource('cb_2019_us_county_500k-cyaqxi', {
      type: 'vector',
      url: 'mapbox://migliogiaco.aarr0skf',
      promoteId: 'GEOID'
  });

  // GA precinct
  map.addSource('Georgia_Shapefile_2-6moses', {
      type: 'vector',
      url: 'mapbox://youtrend.5d4j9bu7',
      promoteId: 'loc_prec'
  });

  // atlanta
  map.addSource('atlanta-3w53hk', {
      type: 'vector',
      url: 'mapbox://migliogiaco.as1udtkq'
  });

  // savannah
  map.addSource('Savannah-br8i08', {
      type: 'vector',
      url: 'mapbox://migliogiaco.1jokcnyk'
  });

  // Get the data to join to the map and parse them
  // Precinct level
  const csvUrlGAPrecinct = 'https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/GA_by_precinct.csv';
  Papa.parse(csvUrlGAPrecinct, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
          map.once('idle', () => {
            results.data.forEach(row => {
                map.setFeatureState({
                  source: 'Georgia_Shapefile_2-6moses',
                  sourceLayer: 'Georgia_Shapefile_2-6moses',
                  // This is the field of the CSV that makes the join on the PromoteID value of the map
                  id: row.UniqueID
                },{
                  // Fields of the CSV file that will be used
                  County: row.County,
                  Precinct: row.Precinct,
                  Oss_Per: row.Oss_Per,
                  Pur_Per: row.Pur_Per,
                  Loe_Per: row.Loe_Per,
                  War_Per: row.War_Per,
                  Oss_MOV_precinct: row.Oss_MOV,
                  War_MOV_precinct: row.War_MOV
                });
              }
            );

            // precinct-fill_Oss_MOV
            map.addLayer({
                'id': 'precinct-fill_Oss_MOV',
                'type': 'fill',
                'source': 'Georgia_Shapefile_2-6moses',
                'source-layer': 'Georgia_Shapefile_2-6moses',
                'layout': {},
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["to-number", ["feature-state", "Oss_MOV_precinct"]],
                    20,'#a32121',40, '#b03c34',50, '#bc5348',60, '#c7695d',70, '#d27e72',
                    80,'#dc9388',85, '#e4a99f',90, '#ecbeb6',95, '#f4d3ce',100, '#fae9e6',
                    105,'#e9e8f1',110, '#d4d2e3',115, '#bebcd6',120, '#a9a6c8',130, '#9491ba',
                    140,'#7f7dad',150, '#6a69a0',160, '#555692',180, '#3f4485',200, '#253278'
                  ],
                  'fill-opacity': 0,
                  'fill-outline-color': '#ffffff'
                }
              }
            );

            // precinct-fill_War_MOV
            map.addLayer({
                'id': 'precinct-fill_War_MOV',
                'type': 'fill',
                'source': 'Georgia_Shapefile_2-6moses',
                'source-layer': 'Georgia_Shapefile_2-6moses',
                'layout': {},
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["to-number", ["feature-state", "War_MOV_precinct"]],
                        20,'#a32121',40, '#b03c34',50, '#bc5348',60, '#c7695d',70, '#d27e72',
                        80,'#dc9388',85, '#e4a99f',90, '#ecbeb6',95, '#f4d3ce',100, '#fae9e6',
                        105,'#e9e8f1',110, '#d4d2e3',115, '#bebcd6',120, '#a9a6c8',130, '#9491ba',
                        140,'#7f7dad',150, '#6a69a0',160, '#555692',180, '#3f4485',200, '#253278'
                  ],
                  'fill-opacity': 0.2,
                  'fill-outline-color': '#ffffff'
                }
              }
            );

            // precinct-fill_DEK_GW
            map.addLayer({
                'id': 'precinct-fill_DEK_GW',
                'type': 'fill',
                'source': 'Georgia_Shapefile_2-6moses',
                'source-layer': 'Georgia_Shapefile_2-6moses',
                'layout': {},
                'filter': ["match", ["get", "locality"],["Gwinnett"],true,false],
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["to-number", ["feature-state", "War_MOV_precinct"]],
                        20,'#a32121',40, '#b03c34',50, '#bc5348',60, '#c7695d',70, '#d27e72',
                        80,'#dc9388',85, '#e4a99f',90, '#ecbeb6',95, '#f4d3ce',100, '#fae9e6',
                        105,'#e9e8f1',110, '#d4d2e3',115, '#bebcd6',120, '#a9a6c8',130, '#9491ba',
                        140,'#7f7dad',150, '#6a69a0',160, '#555692',180, '#3f4485',200, '#253278'
                  ],
                  'fill-opacity': 0,
                  'fill-outline-color': '#ffffff'
                }
              }
            );

            // atl-line
            map.addLayer({
                  'id': 'atl-line',
                  'type': 'line',
                  'source': 'atlanta-3w53hk',
                  'source-layer': 'atlanta-3w53hk',
                  'layout': {
                      'line-join': 'round',
                      'line-cap': 'round'
                  },
                  'paint': {
                      'line-color': '#000',
                      'line-width': 2,
                      'line-opacity': 0
                  }
              }
            );

            // sav-line
            map.addLayer({
                  'id': 'sav-line',
                  'type': 'line',
                  'source': 'Savannah-br8i08',
                  'source-layer': 'Savannah-br8i08',
                  'filter': ["match", ["get", "NAME"],["SAVANNAH"],true,false],
                  'layout': {
                      'line-join': 'round',
                      'line-cap': 'round'
                  },
                  'paint': {
                      'line-color': '#000',
                      'line-width': 2,
                      'line-opacity': 0
                  }
              }
            );

          }
        )
      }
  });

  // Get the data to join to the map and parse them
  // County level
  const csvUrlGACounty = 'https://raw.githubusercontent.com/giacomomigliore/USA2020Elections/master/GA_by_county_2020.csv';
  Papa.parse(csvUrlGACounty, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
          map.once('idle', () => {
            results.data.forEach(row => {
                map.setFeatureState({
                  source: 'cb_2019_us_county_500k-cyaqxi',
                  sourceLayer: 'cb_2019_us_county_500k-cyaqxi',
                  id: row.GEOID
                },{
                  County: row.County,
                  Precinct: row.Precinct,
                  Joe_Per_county: row.Joe_Per,
                  Oss_Per_county: row.Oss_Per,
                  Pur_Per_county: row.Pur_Per,
                  Loe_Per_county: row.Loe_Per,
                  War_Per_county: row.War_Per,
                  Oss_MOV_county: row.Oss_MOV,
                  War_MOV_county: row.War_MOV
                });
              }
            );

            // county-fill_Oss_MOV
            map.addLayer({
                'id': 'county-fill_Oss_MOV',
                'type': 'fill',
                'source': 'cb_2019_us_county_500k-cyaqxi',
                'source-layer': 'cb_2019_us_county_500k-cyaqxi',
                'layout': {},
                'filter': ["match", ["get", "STATEFP"],["13"],true,false],
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["to-number", ["feature-state", "Oss_MOV_county"]],
                        20,'#a32121',40, '#b03c34',50, '#bc5348',60, '#c7695d',70, '#d27e72',
                        80,'#dc9388',85, '#e4a99f',90, '#ecbeb6',95, '#f4d3ce',100, '#fae9e6',
                        105,'#e9e8f1',110, '#d4d2e3',115, '#bebcd6',120, '#a9a6c8',130, '#9491ba',
                        140,'#7f7dad',150, '#6a69a0',160, '#555692',180, '#3f4485',200, '#253278'
                  ],
                  'fill-opacity': 0,
                  'fill-outline-color': '#ffffff'
                }
              }
            );

            // county-fill_War_MOV
            map.addLayer({
                'id': 'county-fill_War_MOV',
                'type': 'fill',
                'source': 'cb_2019_us_county_500k-cyaqxi',
                'source-layer': 'cb_2019_us_county_500k-cyaqxi',
                'layout': {},
                'filter': ["match", ["get", "STATEFP"],["13"],true,false],
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["to-number", ["feature-state", "War_MOV_county"]],
                        20,'#a32121',40, '#b03c34',50, '#bc5348',60, '#c7695d',70, '#d27e72',
                        80,'#dc9388',85, '#e4a99f',90, '#ecbeb6',95, '#f4d3ce',100, '#fae9e6',
                        105,'#e9e8f1',110, '#d4d2e3',115, '#bebcd6',120, '#a9a6c8',130, '#9491ba',
                        140,'#7f7dad',150, '#6a69a0',160, '#555692',180, '#3f4485',200, '#253278'
                  ],
                  'fill-opacity': 0,
                  'fill-outline-color': '#ffffff'
                }
              }
            );

            // county-Diff_Biden_Oss
            map.addLayer({
                'id': 'Diff_Biden_Oss',
                'type': 'fill',
                'source': 'cb_2019_us_county_500k-cyaqxi',
                'source-layer': 'cb_2019_us_county_500k-cyaqxi',
                'layout': {},
                'filter': ["match", ["get", "STATEFP"],["13"],true,false],
                'paint': {
                  'fill-color':
                  [
                    "interpolate",
                    ["linear"],
                    ["-", ["to-number", ["feature-state", "Joe_Per_county"]], ["to-number", ["feature-state", "Oss_Per_county"]]],
                        -0.8, '#ffbc30', -0.6, '#f8b438', -0.5, '#f2ad3f',-0.4, '#eba545',-0.3, '#e49d4b',
                        -0.2,'#de9650',-0.15, '#d78e54',-0.1, '#d08758',-0.05, '#c9805c',1, '#c2785f',
                        1.05,'#bb7162',1.10, '#b46a66',1.15, '#ad6268',1.20, '#a65b6b',1.30, '#9f546e',
                        1.40,'#974d70',1.50, '#8f4673',1.60, '#883f75',1.80, '#7f3877',2.00, '#773079'
                  ],
                  'fill-opacity': 0,
                  'fill-outline-color': '#ffffff'
                }
              }
            );
          }
        )
      }
  });
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

// Create the Mapbox map
var map = new mapboxgl.Map({
    container: 'map',
    style: config.mapbox_style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest
});

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiate the scroller
var scroller = scrollama();

map.on("load", function() {

  // Load all layers
  addDataLayer();

    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512
        });

        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // Set up the scroller
    scroller
    .setup({
        // Trigger scroller function when an element with calsse step reaches the 70% of the visible part of the viewport
        // In other words, trigger the function when the element is 30% from the bottom.
        step: '.step',
        offset: 0.7,
        progress: true
    })
    // When entering a new 'step' element, perform this
    .onStepEnter(response => {
        // Identify the chapter
        // Chapters are defined in the file contenuto.js
        var chapter = config.chapters.find(chap => chap.id === response.element.id);

        response.element.classList.add('active');
        locationMobile = chapter.locationMobile;
        locationBounds = chapter.bounds;
        chapterFly = chapter.fly;
        chapterEase = chapter.ease;

        // If chapter is titolo, set style with backgruond map
        if (chapter.id == 'titolo'){
          if (stileNeutro){
            map.setStyle(config.mapbox_style);
            map.on('style.load', function () {
              // When changing style, all layers are deleted. They must be loaded again
              addDataLayer();
            });
            stileNeutro = false;
          }
        }
        // If the chapter is not title, and if the style is still
        // the one with the background map, change it to the neutral style
        else{
          if (!stileNeutro){
            map.setStyle(config.style);
            map.on('style.load', function () {
              addDataLayer();
            });
            stileNeutro = true;
          }
        }
        // Manage the change of location on maps
        if (mobileDisplay) if(chapterEase || chapterFly) map.easeTo(locationMobile); else map.jumpTo(locationMobile);
        else if(chapterFly) map.fitBounds(locationBounds);
        else if (chapterEase) map.fitBounds(locationBounds, {linear: true, duration: 2000});
        else map.fitBounds(locationBounds, {linear: true, duration: 0});
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        // Change opacity of layers as defined in contenuto.js chapters
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', function() {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 90, {
                    duration: 24000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});
