/**
 * 
 */
var map , layer;
$(function() {
	var map = new OpenLayers.Map("map_canvas");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
     
    var lonLat = new OpenLayers.LonLat(136.730087,35.400116)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), 
            new OpenLayers.Projection("EPSG:900913")
        );
    map.setCenter(lonLat, 17);
    //マーカーの追加
    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);
    var marker = new OpenLayers.Marker(
        new OpenLayers.LonLat(136.730087,35.400116)
            .transform(
                new OpenLayers.Projection("EPSG:4326"), 
                new OpenLayers.Projection("EPSG:900913")
            )
    );
    markers.addMarker(marker);
});