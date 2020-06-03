/* eslint-disable */
console.log('hello from client side');
// const locations = JSON.parse(document.getElementById('map').dataset.locations);
// console.log(locations)

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY29vbGlzdXoiLCJhIjoiY2s3azQwbGI1MDFkMDNub2RxY2x3YXB2aCJ9.8o0dDEbuF-3jZ62DX-_WDg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/coolisuz/ck7k4bkhl1owa1io75fpo59yr',
    scrollZoom: false
    //   center:[-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      elements: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 100,
      left: 100,
      right: 100
    }
  });
}

