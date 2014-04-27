$(function() { 
	$(".tab").hide();
	
	//Show default tab
	$(".default").show();
	$(".default").toggleClass("current-tab");
	
	$("#links a").click(function(e) {
		//Hide current tab
		$(".current-tab").toggle();
		$(".current-tab").toggleClass("current-tab");
		
		//Show clicked tab
		var id = $(this).attr('href');	
			
		$(id).toggle();
		$(id).toggleClass("current-tab");
		
		if (id == "#ceremony") {
		  var lat = 29.6416124;
			var lon = -82.3638806;
			set_map(lat, lon, 'Baughman Center', 'baughman_map');
		}
		
		if (id == "#reception") {
		  var lat = 29.6495629;
			var lon = -82.3239809;
			set_map(lat, lon, 'The Hippodrome', 'hipp_map');
		}
		
		
	});
	
	function set_map(lat, lon, loc_name, id) {
	  var map_canvas = document.getElementById(id);
		var map_options = {
			center: new google.maps.LatLng(lat,lon),
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options)
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat,lon),
			map: map,
			title: loc_name
		});
	}
	
	
      
});