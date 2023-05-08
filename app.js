window.addEventListener("scroll", function () {
    var articles = document.querySelectorAll("section");
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var rect = article.getBoundingClientRect();
      var isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        article.classList.add("inviewport");
      } else {
        article.classList.remove("inviewport");
      }
    }
  });
  // ------------------------------------------------------------------------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    const scroll_to_about = document.querySelector('#scroll_to_about');
    const scroll_to_timetable = document.querySelector('#scroll_to_timetable');
    const scroll_to_location = document.querySelector('#scroll_to_location');
    const scroll_to_contact = document.querySelector('#scroll_to_contact');
    const scroll_to_registration = document.querySelector('#scroll_to_registration');
    const about = document.querySelector('#about');
    const timetable = document.querySelector('#timetable');
    const location = document.querySelector('#location');
    const contact = document.querySelector('#contact');
    const registration = document.querySelector('#registration');

    scroll_to_about.addEventListener('click', event => {
      about.scrollIntoView({ 
        behavior: 'smooth'
      });
    });
    scroll_to_timetable.addEventListener('click', event => {
      timetable.scrollIntoView({ 
        behavior: 'smooth'
      });
    });
    scroll_to_location.addEventListener('click', event => {
      location.scrollIntoView({ 
        behavior: 'smooth'
      });
    });
    scroll_to_contact.addEventListener('click', event => {
      contact.scrollIntoView({ 
        behavior: 'smooth'
      });
    });
    scroll_to_registration.addEventListener('click', event => {
      registration.scrollIntoView({ 
        behavior: 'smooth'
      });
    });
  });
  // ----------------------------------------------------------------------------------------------------------------------------------
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
  .setText('div');
  
  new mapboxgl.Marker(marker, {anchor: 'bottom'})
  .setLngLat(loc)
  .addTo(map)
  .setPopup(popup);
  // ------------------------------------------------------------------------------------------------------------------------------------

  