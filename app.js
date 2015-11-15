$(document).ready(function() {

    //clear search text on click
    $("#searchterm").click(function() {
        $(this).val('');
    });

  var $searchTerm = $("searchterm");
  var $results = $(".results");

    //submit button click event
    $("#submit").click(function(evt) {
        
        evt.preventDefault();
        console.log ("submitted");

        //if serach bar is empty
        if ($searchTerm.val() === "") {
            alert("Please enter a tag!");
        } else {
        
        //creates variable from search bar value
        var searchTerm = $("#searchterm").val();  
        //api link
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        //data
        var flickrData = {
            tags: searchTerm,
            format: "json"    
        };
        //what to do with data
        function showPhotos(data) {
          
            var photoHTML = '<ul>';
            $.each(data.items, function(i, photo) {
                photoHTML += '<li>';
                photoHTML += '<a href="' + photo.link + '" target="_blank">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            });
            //to add to DOM
            $results.html(photoHTML);
            
            
            
            //no results
            if (photoHTML == "<ul></ul>") {
                $(".results").html("<p>Your search returned no results</p>");
            }
        }
        };
        
        //ajax
        $.getJSON(flickrAPI, flickrData, showPhotos);
        
    });
    
   //press enter to search
    $($searchTerm).keyup(function(event){
    if(event.keyCode == 13) {
      $(".submit").click();
    }

  });
    
   

 
  }); 
    



  

