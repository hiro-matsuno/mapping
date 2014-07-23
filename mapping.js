/**
 * 
 */

$(document).ready(function(){
	map = new GMaps({
	   div: '#map',
	   zoom: 16,
	   lat: 35.400116,
	   lng:136.730087,
	});
	map.addMarker({
	    lat:35.400116,
	    lng:136.730087,
	    title:"岐阜県図書館",
	    infoWindow: {
		      content: '<p>岐阜県図書館</p>'
		    }
	});
	GMaps.geolocate({
		  success: function(position) {
		    map.setCenter(position.coords.latitude, position.coords.longitude);
		  },
		  error: function(error) {
		    alert('Geolocation failed: '+error.message);
		  },
		  not_supported: function() {
		    alert("Your browser does not support geolocation");
		  },
		  always: function() {
		    alert("Done!");
		  }
	});
});

function address_search(){
	GMaps.geocode({
		  address: $('#address').val(),
		  callback: function(results, status) {
		    if (status == 'OK') {
		      var latlng = results[0].geometry.location;
		      map.setCenter(latlng.lat(), latlng.lng());
		      map.addMarker({
		        lat: latlng.lat(),
		        lng: latlng.lng()
		      });
		    }
		  }
	});
}

