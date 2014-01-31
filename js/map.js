
var map = new ol.Map({
	ol3Logo: false,

    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View2D({
    	//unsere heimkoordinaten
        center: ol.proj.transform([15.835057240295406, 47.34111911479414], 'EPSG:4326', 'EPSG:3857'),
        zoom: 15
    })

});

var view = map.getView();