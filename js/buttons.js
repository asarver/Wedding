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
		  var iframe = document.getElementById("baughman_iframe");
      iframe.src = iframe.src;
		}
		
		if (id == "#reception") {
		  var iframe = document.getElementById("hipp_iframe");
      iframe.src = iframe.src;
		}
	});
});