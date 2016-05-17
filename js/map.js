
var demoMap = L.map('map').setView([40.453191, -3.509236], 6);
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
    minZoom: 5,
    maxZoom: 16,
    attribution: osmAttrib
});
osm.addTo(demoMap);

var markerCluster = L.markerClusterGroup();

for (var i = 0; i < locations.length; i++) {
    var marker = L.marker(locations[i])
    marker.bindPopup('<p>Latitud:'+locations[i][0]+'</p><p>Longitud:'+locations[i][1]+'</p>');
    markerCluster.addLayer(marker);
}

demoMap.addLayer(markerCluster);
