window.addEventListener('scroll', function () {
    var articles = document.querySelectorAll('section');
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var rect = article.getBoundingClientRect();
      var isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        article.classList.add('inviewport');
      } else {
        article.classList.remove('inviewport');
      }
    }
  });

  // ----------------------------------------the_appearance_and_disappearance_of_sections--------------------------------------------------------------------------------
  mapboxgl.accessToken = 'pk.eyJ1IjoidG9raW9ib3kiLCJhIjoiY2w1ODIxMjV2MWRkeTNrcGJtbTdtdnhzciJ9.pPOEquxCJnl4OihAYBsBeQ';

  let loc = [14.433853676035787 , 50.087012541675264];
  let map = new mapboxgl.Map({
      container: 'location_map',
      center: loc,
      zoom: 14,
      style: 'mapbox://styles/mapbox/dark-v11'
  });
  
  map.scrollZoom.disable();   
  map.addControl(new mapboxgl.NavigationControl());
  
  let marker = document.createElement('div');
  marker.id = 'marker';
  
  let popup = new mapboxgl.Popup({offset: 70})
  .setHTML('Prague City University<br>City Centre Campus<br>Hybernská 24, Praha 1 Czech Republic')
  .addClassName('popup');

  new mapboxgl.Marker(marker, {anchor: 'bottom'})
  .setLngLat(loc)
  .addTo(map)
  .setPopup(popup);
  // ----------------------------------------------------MAP--------------------------------------------------------------------------------------
  const speakers = document.querySelectorAll('.speaker');

  speakers.forEach((speaker) => {
  speaker.addEventListener('click', () => {
    speaker.classList.toggle('active');
  });
});
  // ----------------------------------------------------Interaction_with_speakers--------------------------------------------------------------------------------------
