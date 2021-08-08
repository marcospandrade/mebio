function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-25.7030507, -53.0978886),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}