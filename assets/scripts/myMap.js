 var map, layer;
$(document).ready(function() {
	console.log("mymap.js is here!!!!");

	map = new OpenLayers.Map( 'map' );
	layer = new OpenLayers.Layer.WMS( "ortho",
		"http://gis.lebensministerium.at/wmsgw/?key=0b097c0c9300783633bea4d06b39c3c3&", {
			layers: 'Orthophoto',
			maxExtent: new OpenLayers.Bounds(110000,250000,690000,590000),
			projection: new OpenLayers.Projection('EPSG:31287'),
			displayProjection: new OpenLayers.Projection('EPSG:4326')
		} );
	map.addLayer(layer);
	// map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);
	map.addControl( new OpenLayers.Control.LayerSwitcher() ); 



});