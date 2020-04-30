
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
let RI, ME, BOS, CT, LA, NYC, FL, RW, MX, HK, TH, GUA, PARIS, LON;

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

  RI.image = 'Image-2.jpeg';
  // associate each image w name

  fill(200, 100, 100);

  myMap.onChange(drawPoint);
}

function draw () {
  if (mouseIsPressed) {
    updateImage(RI.image);
  }

//  AM I PUTTING THE IF STATEMENTS HERE TO CONNECT TO THE HTML
}
function drawPoint () {
  clear();

  RI = myMap.latLngToPixel(41.4382, -71.5016);
  fill('red');
  ellipse(RI.x, RI.y, 10, 10);

  ME = myMap.latLngToPixel(45.0714, -69.8911);
  ellipse(ME.x, ME.y, 10, 10);

  BOS = myMap.latLngToPixel(42.3601, -71.0589);
  ellipse(BOS.x, BOS.y, 10, 10);

  CT = myMap.latLngToPixel(41.51766, -72.95439);
  ellipse(CT.x, CT.y, 10, 10);

  LA = myMap.latLngToPixel(33.8847, -118.4109);
  ellipse(LA.x, LA.y, 10, 10);

  NYC = myMap.latLngToPixel(40.7128, -74.0060);
  ellipse(NYC.x, NYC.y, 10, 10);

  FL = myMap.latLngToPixel(28.385233, -81.563873);
  ellipse(FL.x, FL.y, 10, 10);

  RW = myMap.latLngToPixel(-1.9441, 30.0619);
  ellipse(RW.x, RW.y, 10, 10);

  MX = myMap.latLngToPixel(20.5536, -87.1760);
  ellipse(MX.x, MX.y, 10, 10);

  HK = myMap.latLngToPixel(22.3193, 114.1694);
  ellipse(HK.x, HK.y, 10, 10);

  TH = myMap.latLngToPixel(7.9519, 98.3381);
  ellipse(TH.x, TH.y, 10, 10);

  GUA = myMap.latLngToPixel(15.7835, -90.2308);
  ellipse(GUA.x, GUA.y, 10, 10);

  PARIS = myMap.latLngToPixel(48.8566, 2.3522);
  ellipse(PARIS.x, PARIS.y, 10, 10);

  LON = myMap.latLngToPixel(51.5074, 0.1278);
  ellipse(LON.x, LON.y, 10, 10);
}

function updateImage (imageName) {
  document.getElementById('LocationImage').src = imageName;
}
