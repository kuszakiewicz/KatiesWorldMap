/* globals ellipse fill clear createCanvas */

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
let places = { RI: {}, ME: {}, BOS: {}, CT: {}, LA: {}, NYC: {}, FL: {}, RW: {}, MX: {}, HK: {}, TH: {}, GUA: {}, PARIS: {}, LON: {} };

const options = {
  lat: 39,
  lng: -98,
  zoom: 3,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
};

function setup () {
  canvas = createCanvas(600, 600);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // associate each image w name
  places.RI.image = 'Image-2.jpeg';


  fill(200, 100, 100);

  myMap.onChange(drawPoint);
}

function draw () {
  if (mouseIsPressed) {
    updateImage(places.RI.image);
  }

//  AM I PUTTING THE IF STATEMENTS HERE TO CONNECT TO THE HTML
}
function drawPoint () {
  clear();

  places.RI.coords = myMap.latLngToPixel(41.4382, -71.5016);
  fill('red');
  ellipse(places.RI.coords.x, places.RI.coords.y, 10, 10);

  places.ME.coords = myMap.latLngToPixel(45.0714, -69.8911);
  ellipse(places.ME.coords.x, places.ME.coords.y, 10, 10);

  places.BOS.coords = myMap.latLngToPixel(42.3601, -71.0589);
  ellipse(places.BOS.coords.x, places.BOS.coords.y, 10, 10);

  places.CT.coords = myMap.latLngToPixel(41.51766, -72.95439);
  ellipse(places.CT.coords.x, places.CT.coords.y, 10, 10);

  places.LA.coords = myMap.latLngToPixel(33.8847, -118.4109);
  ellipse(places.LA.coords.x, places.LA.coords.y, 10, 10);

  places.NYC.coords = myMap.latLngToPixel(40.7128, -74.0060);
  ellipse(places.NYC.coords.x, places.NYC.coords.y, 10, 10);

  places.FL.coords = myMap.latLngToPixel(28.385233, -81.563873);
  ellipse(places.FL.coords.x, places.FL.coords.y, 10, 10);

  places.RW.coords = myMap.latLngToPixel(-1.9441, 30.0619);
  ellipse(places.RW.coords.x, places.RW.coords.y, 10, 10);

  places.MX.coords = myMap.latLngToPixel(20.5536, -87.1760);
  ellipse(places.MX.coords.x, places.MX.coords.y, 10, 10);

  places.HK.coords = myMap.latLngToPixel(22.3193, 114.1694);
  ellipse(places.HK.coords.x, places.HK.coords.y, 10, 10);

  places.TH.coords = myMap.latLngToPixel(7.9519, 98.3381);
  ellipse(places.TH.coords.x, places.TH.coords.y, 10, 10);

  places.GUA.coords = myMap.latLngToPixel(15.7835, -90.2308);
  ellipse(places.GUA.coords.x, places.GUA.coords.y, 10, 10);

  places.PARIS.coords = myMap.latLngToPixel(48.8566, 2.3522);
  ellipse(places.PARIS.coords.x, places.PARIS.coords.y, 10, 10);

  places.LON.coords = myMap.latLngToPixel(51.5074, 0.1278);
  ellipse(places.LON.coords.x, places.LON.coords.y, 10, 10);
}

function updateImage (imageName) {
  document.getElementById('LocationImage').src = imageName;
}
