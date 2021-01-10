mapboxgl.accessToken = 'pk.eyJ1IjoiaXRpc2lhbnBldHRzIiwiYSI6ImNraWl4MjJrMjEzNmUycW1xaGdibjYwdjEifQ.4KftH9p4g4j4QOJyPhn6Sg';
        
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: post.coordinates,
    zoom: 5
});

// create a HTML element for our post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
.setLngLat(post.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
.addTo(map);

// Toggle Edit Comments Form
$('.toggle-edit-form').on('click', function(){
    // Toggle the edit button text on click
    $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
    // Toggle visibility of the edit review form
    $(this).siblings('.edit-review-form').toggle();
});

// Clear Rating
$('.clear-rating').click(function(){
    $(this).siblings('.input-no-rate').click();
});