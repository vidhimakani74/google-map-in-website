// Initialize and add the map
var bound1=0;
var bound2=15;
var bound3=25;

function initMap() {
    // The locations
    const india = { lat: 20.5937, lng: 78.9629 };
    const Amreli = { lat: 21.6015, lng: 71.2204 };
    const Dwarka = { lat: 22.1232, lng: 69.3831 };

    // The map, centered at locations
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: india,
    });
    // The marker, positioned at locations
    const marker1 = new google.maps.Marker({
      position: india,
      // label: bound1,
      title:"vidhi",
      // position: gujrat,
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: Dwarka,
      
      // position: gujrat,
      map: map,
    });
    const marker = new google.maps.Marker({
      // position: india,
      position: Amreli,
      map: map,
    });
    if(bound1===0){
      marker1.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }
    if(bound2>0 && bound2<=20){
      marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }
    if(bound3>20){
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    }

  }
  
  window.initMap = initMap;