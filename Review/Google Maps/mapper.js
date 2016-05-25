// // array to store the markers the user creates
// var markers = [];
//
// function initialize() {
//
//   var mapOptions = {
//
//     center: { lat: 39.1950, lng: -106.8370},
//     zoom: 15,
//     mapTypeId: google.maps.MapTypeId.HYBRID
//
//   };
//
//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//   google.maps.event.addListener(map, 'click', function(e) {
//
//   // create a new marker where the user clicked
//
//     marker = new google.maps.Marker({
//
//       position: e.latLng,
//       map: map,
//
//       draggable: true,
//       animation: google.maps.Animation.DROP
//
//     });
//
//     console.log(marker);
//     markers.push(marker);
//     // markers[id] = marker.__gm_id;
//     // markers[id] = marker;
//     google.maps.event.addListener(marker, 'click', function(e) {
//       marker.setMap(null);
//         // Opens the InfoWindow when marker is clicked.
//         marker.addListener('click', function() {
//           infoWindow.open(map, marker);
//         });
//     });
//   });
// }
//google.maps.event.addDomListener(window, 'load', initialize);

// =========NG-MAP=========

angular.module('ngMap').run(function($rootScope) {
     $rootScope.mouseover = function() {
       console.log('mouseover', this);
       this.style.backgroundColor = 'grey';
     };
     $rootScope.mouseout = function() {
       this.style.backgroundColor = 'white';
     };
     $rootScope.click = function() {console.log('click')};
     $rootScope.customMarkers = [
       {address: "1600 pennsylvania ave, washington DC", "class": "my1"},
       {address: "600 pennsylvania ave, washington DC",  "class": "my2"},
     ];
     $rootScope.world = "World";
   });
