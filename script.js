function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.97340039276367, lng: -117.32842702670901},
    zoom: 16,
    mapId: '5710fdbd76ee3a9c', 
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
    });
  
  const markers = [
    [
      "Bell Tower",
      33.973345705203826,
      -117.32818406220579,
      "Bell_Tower.png",
      180,
      180
    ],
  ];
  
  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
    position: { lat: currMarker[1], lng: currMarker[2] },
    map,
    title: currMarker[0],
    icon: {
      url: currMarker[3],
      scaledSize: new google.maps.Size(currMarker[4], currMarker[5]), 
      // origin: new google.maps.Point(0,0), // origin
      // anchor: new google.maps.Point(0, 0) // anchor
    }, 
      animation: google.maps.Animation.DROP
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
  
    marker.addListener("click", () =>{
      infowindow.open(map, marker);
    });
  }
}

