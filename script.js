$(function(){

  var markers = [];
  var array = [];
  var mtRainierOverlay;
  var latlng;
  var map;
  var imageBounds;
  var heatmap;
  var landTypeLayer;
  var marker;

  window.initMap = function() {

    mapCenter();
    eventHandlers();
    image();
    heatmapA();
  }

    function eventHandlers() {
      $('form').on('click', function() {
        if ($("input[name='datalayer']").is(':checked')) {
          heatmap.setMap(map);
        } else {
          heatmap.setMap(null);
        }

        if ($("input[name='datalayer2']").is(':checked')) {
          landTypeLayer.setMap(map);
        } else {
          landTypeLayer.setMap(null);
        }
      $('#button').submit()
          resetMap();

      });
      map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);

      });
    }

    function resetMap() {
      for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
      }
    }

    function mapCenter() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.8428, lng: -120.0214},
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      });
    }

    function placeMarkerAndPanTo(latlng, map) {
      marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      markers.push(marker);
      array.push(marker.position);

        function distanceCount() {
        var distance = google.maps.geometry.spherical.computeDistanceBetween(array[0], array[1]) * .00062;
        var distanceContent = 'the distance is ' + (Math.round(distance*100)/100) + ' miles'
        var infowindow = new google.maps.InfoWindow({
            content: distanceContent
        });
        infowindow.open(map, marker)
        }
      if (array.length < 2) {
        marker += marker;
      } else if (array.length == 2) {
        distanceCount();
      } else {
        marker.setMap(null);
        array = [];
        //markers = [];
      }
    }

    function image() {
      imageBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(46.706970, -121.520916), //this must be SW corner
        new google.maps.LatLng(46.968130, -121.163860)); //this is NE corner
      mtRainierOverlay =new google.maps.GroundOverlay(
        'http://joannefriday.com/wordpress/wp-content/uploads/2012/03/joanne-friday-mt-rainier-from-above-02-24-12.jpg',
       imageBounds);

      mtRainierOverlay.setMap(map);
    }

    function heatmapA() {
      var heatMapData = [];

      fireData.forEach(function(item) {
        heatMapData.push(new google.maps.LatLng(item.lat, item.lng));
      });

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
      });

        landTypeLayer = new google.maps.KmlLayer({
          url: 'http://bluedot.mobi/tl/strangeloop/strangeloop.kml',
          preserveViewport: true
        });
    }
});