/* globals ellipse fill clear createCanvas print collidePointCircle mouseX mouseY */

/* Final Project: Katie's World Map
 * by Katie Uszakiewicz <uszakiewiczk@emmanuel.edu>
 * 7 May 2020
 */

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
let places = { RI: {}, ME: {}, BOS: {}, CT: {}, LA: {}, FL: {}, RW: {}, MX: {}, HK: {}, TH: {}, GUA: {}, PARIS: {}, LON: {} };

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

  // associate each image w name & text
  places.RI.image = 'Image-1.jpeg';
  places.RI.text = 'Growing up, I spent the summers camping in Rhode Island with my family and all of my cousins. Some of my best childhood memories were made on the beach in RI.';
  places.ME.image = 'Image-2.jpeg';
  places.ME.text = 'My families winter home, which was built the year I was borrn, is about 90 miles from the Canadian border. I have countless memories there ranging from Christmas morning, to muddy summers, to ski-filled days. I have grown to appreciate the peace and quiet as I have gotten older.';
  places.BOS.image = 'Image-3.jpeg';
  places.BOS.text = 'Since studying at Emmanuel, Boston has become the city I call home for the majority of the year. I love being able to study, live, and explore the city of Boston!';
  places.CT.image = 'Image-4.jpeg';
  places.CT.text = 'I grew up in the small town of Prospect, CT & no matter how far I go, there is no place like home.';
  places.LA.image = 'Image-5.jpeg';
  places.LA.text = 'My brother lived in California for about 4 years. About one or two times per year, I would visit and was able to explore many different areas of California and its beautiful sights.';
  places.FL.image = 'Image-7.jpeg';
  places.FL.text = 'The most magical place on Earth! My mom is Disney Worlds number one fan and brought my siblings and I nearly each year while we were growing up! Many embarassing photos, like this, were the result!';
  places.RW.image = 'Image-8.jpeg';
  places.RW.text = 'At the end of my sophomore year of high school, I travelled to our sister school in Rwanda. This trip was one of my most memorable and influential experiences of my high school years.';
  places.MX.image = 'Image-9.jpeg';
  places.MX.text = 'Mexico is one of my favorite places to visit! Last summer, my entire extended family vacationed in Riviera Maya. Making memories with all of my cousins and grandmother was very special.';
  places.HK.image = 'Image-10.jpeg';
  places.HK.text = 'First time travelling alone. Amazing culture and even better memories!';
  places.TH.image = 'Image-11.JPEG';
  places.TH.text = 'Thailand is the most beautiful place I have ever been. The experiences I had with my sister while in Thailand are unforgettable.';
  places.GUA.image = 'Image-12.jpeg';
  places.GUA.text = 'My family hosted an international student from Guatemala for a summer. Nicole became my unofficial Guatemalan summer sister! I would love to visit eventually.';
  places.PARIS.image = 'Image-13.jpeg';
  places.PARIS.text = 'I visited Paris with my mom and my sister. Between the art, the architecture, the amazing crepes, and culture, I had an amazing time.';
  places.LON.image = 'Image-14.jpeg';
  places.LON.text = 'One of my favorite cities, behind Boston of course! I was supposed to spend my summer studying in London - thanks COVID-19!';

  fill(200, 100, 100);

  myMap.onChange(drawPoint);
}

function mouseClicked () {
  print(mouseX + ' ' + mouseY);
  const placeNames = Object.keys(places);
  let clickedPlace = '';
  for (let i = 0; i < placeNames.length; i++) {
    const name = placeNames[i];
    const hit = collidePointCircle(mouseX, mouseY, places[name].coords.x, places[name].coords.y, 10);

    if (hit === true) {
      clickedPlace = name;
    }
  }

  if (clickedPlace !== '') {
    print(clickedPlace);
    updateImage(places[clickedPlace].image);
    updateText(places[clickedPlace].text);
  }
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

function updateText (text) {
  document.getElementById('LocationText').innerHTML = text;
}
