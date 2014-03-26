$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;

		$('#content').fadeOut(500);	
		redirectPage(linkLocation);	
		$('#content').fadeIn(500);
	});
		
	function redirectPage(url) {
		
        $.ajax({
            url: url,
            success: function(data) {
                // when ajax is done, fade old content out
                $('#content').html(data); // replace contents
                    // fade new content in
            }
         
        });
    
    }

        

	
});
