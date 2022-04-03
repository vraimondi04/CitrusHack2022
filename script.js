function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.97340039276367, lng: -117.32842702670901},
    //
    zoom: 17,
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
      180,
      0,
      0,
      0,
      32
    ],
    [
      "Student Recreational Center",
      33.978694998089786,
      -117.32827947115652,
      "Rec_It.png",
      115,
      115,
      0,
      0,
      0,
      32
      // anchor: new google.maps.Point(0, 49) // anchor
    ],
    [
      "Donkey",
      33.973628871051204,
      -117.3303691213571,
      "Donkey.png",
      50,
      50,
      0,
      0,
      0,
      32
      //33.973628871051204, -117.3303691213571
    ],
    [
      "Donkey",
      33.979140455557314,
      -117.32655920829566,
      "Donkey.png",
      50,
      50,
      0,
      0,
      0,
      32
      //33.979140455557314, -117.32655920829566
    ],
        [
      "Donkey",
      33.973494230113694,
      -117.32606822408006,
      "Donkey.png",
      50,
      50,
      0,
      0,
      0,
      32
      //33.973494230113694, -117.32606822408006
    ],
        [
      "Donkey",
      33.97511733713916,
      -117.32211298605574,
      "Donkey.png",
      50,
      50,
      0,
      0,
      0,
      32
      //33.97511733713916, -117.32211298605574
    ],
    [
      "C",
      33.97127132880733,
      -117.30232883259895,
      "C.png",
      180,
      180,
      0,
      0,
      0,
      32
      //33.97127132880733, -117.30232883259895
    ],
    [
      "HUB",
      33.97446402223828,
      -117.3286846581703,
      "HUB.png",
      250,
      150,
      0,
      0,
      0,
      32
      // 33.97446402223828, -117.3286846581703
    ],
    [
      "Things Change, Change Things",
      33.975013182223925,
      -117.33182395563996,
      "Things_Change.png",
      115,
      115,
      0,
      0,
      0,
      32
      // 33.975013182223925, -117.33182395563996
    ],
    [
      "Scotty the Bear",
      33.97454885700453,
      -117.32695317668647,
      "Scotty.png",
      115,
      115,
      0,
      0,
      0,
      32
      // 33.97454885700453, -117.32695317668647
    ],
    [
      "Norm the Navel",
      33.97196966313176,
      -117.32938189678585,
      "Norm.png",
      100,
      100,
      0,
      0,
      0,
      32
      // 33.97196966313176, -117.32938189678585
    ]
    
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
      origin: new google.maps.Point(currMarker[6],
                                    currMarker[7]), // origin
     // anchor: new google.maps.Point(currMarker[8], 
     //                               currMarker[9]) // anchor
    }, 
      animation: google.maps.Animation.DROP
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
  
    // marker.addListener("click", () =>{
    //   infowindow.open(map, marker);
    // });
      marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
  });
  
  // assuming you also want to hide the infowindow when user mouses-out
  marker.addListener('mouseout', function() {
      infowindow.close();
  });
  }
}

//33.973345705203826, -117.32818406220579
