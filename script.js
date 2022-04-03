function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.97442877563345, lng: -117.32799232807902},
    //33.97442877563345, -117.32799232807902
    zoom: 17,
    mapId: '5710fdbd76ee3a9c', 
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
    });

  const markers = [
    [
      "Bell Tower - the heart of the campus",
      33.973345705203826,
      -117.32818406220579,
      "Bell_Tower1.png",
      200,
      180,
      0,
      0,
    ],
    [
      "Student Recreational Center - UCR’s gym offers students state of the art facilities to exercise and grow in other activities",
      33.978694998089786,
      -117.32827947115652,
      "Rec_It1.png",
      115,
      115,
      0,
      0,
  //    0,
  //    32
      // anchor: new google.maps.Point(0, 49) // anchor
    ],
    [
      "Donkey - UCR’s newest animal has captured the hearts of all highlanders.",
      33.973628871051204,
      -117.3303691213571,
      "Donkey1.png",
      55,
      55,
      0,
      0,
  //    0,
  //    32
      //33.973628871051204, -117.3303691213571
    ],
    [
      "Donkey - UCR’s newest animal has captured the hearts of all highlanders.",
      33.979140455557314,
      -117.32655920829566,
      "Donkey1.png",
      55,
      55,
      0,
      0,
  //    0,
  //    32
      //33.979140455557314, -117.32655920829566
    ],
    // 33.978048583241176, -117.32662596825523
    [
      "Donkey - UCR’s newest animal has captured the hearts of all highlanders.",
      33.978048583241176,
      -117.32662596825523,
      "Donkey1.png",
      55,
      55,
      0,
      0,
  //    0,
  //    32
      //33.979140455557314, -117.32655920829566
    ],
        [
      "Donkey - UCR’s newest animal has captured the hearts of all highlanders.",
      33.973494230113694,
      -117.32606822408006,
      "Donkey1.png",
      55,
      55,
      0,
      0,
   //   0,
   //   32
      //33.973494230113694, -117.32606822408006
    ],
        [
      "Donkey - UCR’s newest animal has captured the hearts of all highlanders.",
      33.97511733713916,
      -117.32211298605574,
      "Donkey1.png",
      55,
      55,
      0,
      0,
   //   0,
   //   32
      //33.97511733713916, -117.32211298605574
    ],
    [
      "C - Riverside's most famous hike",
      33.97127132880733,
      -117.30232883259895,
      "C1.png",
      180,
      180,
      0,
      0,
  //    0,
  //    32
      //33.97127132880733, -117.30232883259895
    ],
    [
      "HUB - The best place to grab a bite to eat and take a break in between classes with friends!",
      33.97446402223828,
      -117.3286846581703,
      "HUB1.png",
      290,
      150,
      0,
      0,
  //    0,
 //     32
      // 33.97446402223828, -117.3286846581703
    ],
    [
      "Things Change, Change Things - UCR’s Art building asks highlanders to rise above the status quo",
      33.975013182223925,
      -117.33182395563996,
      "Things_Change1.png",
      115,
      90,
      0,
      0,
   //   0,
  //    32
      // 33.975013182223925, -117.33182395563996
    ],
    [
      "Scotty the Bear - UCR’s mascot makes sure to rock the scottish quilt",
      33.973869368875185,
      -117.32788584071471,
      "Scotty1.png",
      90,
      90,
      0,
      0,
  //    0,
  //    32
      // 33.973869368875185, -117.32788584071471
    ],
    [
      "Norm the Navel - great dancer, greater fruit. Scotty's best friend",
      33.97196966313176,
      -117.32938189678585,
      "Norm.png",
      100,
      100,
      0,
      0,
  //    0,
  //    32
      // 33.97196966313176, -117.32938189678585
    ],

    [
      "Student Success Center - UCR’s newest building provides the best place for students to succeed, as the name suggests",
      33.97415479489205,
      -117.32998544890951,
      "SCC1.png",
      150,
      130,
      0,
      0,
  //    0,
  //    32
      // 33.97415479489205, -117.32998544890951
    ],

        [
      "Eaton Collection of Science Fiction and Fantasy - UCR’s Rivera Library has one of the largest science-fiction and fantasy collections in the world",
      33.972371493139335,
      -117.32744331776003,
      "Dragon.png",
      100,
      100,
      0,
      0,
  //    0,
  //    32
      // 33.972371493139335, -117.32744331776003
    ],

    [
      "Botanical Gardens - The Rose Garden inside UCR’s Botanical Garden has beautiful flowers and overlooks the rest of campus",
      33.96939574349043,
      -117.31878071359701,
      "Rose.png",
      100,
      100,
      0,
      0,
  //    0,
  //    32
      // 33.96939574349043, -117.31878071359701
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
