// Create a variable to hold our map
let myMap;
// Create a variable to hold our canvas
let canvas;
// Create a new Mappa instance using Leaflet.
const mappa = new Mappa('Leaflet');

const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

// p5.js setup
function setup(){
  // Create a canvas 640x640
  canvas = createCanvas(640,640);


  // Create a tile map with lat 0, lng 0, zoom 4
myMap = mappa.tileMap(options);
// Overlay the canvas over the tile map
myMap.overlay(canvas);
}

// p5.js draw
function draw(){

}
