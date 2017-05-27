(function($){
$(window).load(function(){
	var $mapDiv = $('#map')[0];
	var $coordinates = {lat: 49.568626, lng: 34.584673};
	var $map = new google.maps.Map($mapDiv, {
		center: $coordinates,
		zoom: 16,
		disableDefaultUI: true,
		scrollWheel: false
	});

	var $marker = new google.maps.Marker({
		position: $coordinates,
		map: $map,
	});


	google.maps.event.addDomListener(window, "resize", function(){
		var center = $map.getCenter();
		google.maps.event.trigger(map, "resize");
		$map.setCenter(center);
	});

});	

})(jQuery);

