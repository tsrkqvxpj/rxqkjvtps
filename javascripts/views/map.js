/*
*	views/map.js
*	
*	View for the map view portion of the application.
*
*
*
*
*/

var MapView = Backbone.View.extend({
	id: 'map',
	initialize: function(){

	},
	render: function(city){

		console.log(city);

		var mapOptions = {
			center: new google.maps.LatLng(
				city.get('mapCoordinates').latitude, city.get('mapCoordinates').longtitude),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
		};

		var map = new google.maps.Map(this.el, mapOptions);

		var template = _.template($('#template_map').html());
		$('#main').html(template);

		$('#map').replaceWith(this.el);
		google.maps.event.trigger(map, 'resize');
		$('#map').height("400px");

		map.panTo(mapOptions.center);
	}
});