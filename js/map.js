var projection = ol.proj.configureProj4jsProjection({
    code: 'EPSG:31287',
    extent: [1, 1, 1000000, 700000]
});


var projectionExtent = projection.getExtent();
// var size = ol.extent.getWidth(projectionExtent) / 256;
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.WMTS({
        url: 'http://192.168.1.112:8080/service',
        layer: 'ortho',
        // matrixSet: 'EPSG:900913',
        format: 'image/jpeg',
        projection: projection,
        // tileGrid: new ol.tilegrid.WMTS({
        //   origin: ol.extent.getTopLeft(projectionExtent),
        //   resolutions: resolutions,
        //   matrixIds: matrixIds
        // }),
        // style: '_null',
        extent: [1, 1, 1000000, 700000]
      })
    })
  ],
  // renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    // center: [-13677832, 5213272],
    zoom: 5
  })
});

// var map = new ol.Map({
//     ol3Logo: false,
//     renderers: ol.RendererHints.createFromQueryData(),
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.WMTS({
//                 url: "http://192.168.1.112:8080/service",
//                 // crossOrigin: 'anonymous',
//                 params: {
//                     layers: 'ortho'
//                 }
//             })
//         })
//     ],
//     view: new ol.View2D({
//         projection: projection,
//         // extent: [1, 1, 1000000, 700000],
//         //unsere heimkoordinaten
//         // center: ol.proj.transform([15.835057240295406, 47.34111911479414], 'EPSG:4326', 'EPSG:31287'),
//         zoom: 8
//     })

// });
// var view = map.getView();
// var wmsLayer = new OpenLayers.Layer.WMS("ortho", "http://gis.lebensministerium.at/wmsgw/", {
//     layers: 'Orthophoto',
//     key: 'f4b35fcfaf22e69bf13c8c7dcae3da75',
//     eventListeners: {
//         tileloaded: updateStatus,
//         loadend: detect
//     }
// }, {
//     maxExtent: new OpenLayers.Bounds(110000, 250000, 690000, 590000),
//     projection: new OpenLayers.Projection('EPSG:31287'),
//     displayProjection: new OpenLayers.Projection('EPSG:4326'),
//     format: "image/jpeg",
//     singleTile: false,
//     units: 'meters',
//     buffer: 0,
//     ratio: 2
// });
