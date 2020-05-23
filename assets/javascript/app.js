  // This is our API key
  var mapAPIKey = "AIzaSyCAgC_4Ah49trBRbFVc3emcuZ-vzz8yEcA";
  var wtrAPIKey = "cd080552-9bd7-11ea-b3e2-0242ac130002-cd080606-9bd7-11ea-b3e2-0242ac130002";


  // Here we are building the URL we need to query the database

  var inputPlace;


  //Add variables for location, etc.
  var WTRqueryURL = "https://api.stormglass.io/v2/tide/extremes/point";


  
  var latitude = 0;
  var longitude = 0;
  var params = ""
  var place = ""

  
  

  $("#place-submit").on("click", function() {
    
    place = $("#place-input").val().trim();
    
    


  // Here we run our AJAX call to the Google Places API

  var MAPqueryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=beaches+in+" + place + "&key=" + mapAPIKey;


  $.ajax({
    url: MAPqueryURL,
    method: "GET",
  })
    // We store all of the retrieved data inside of an object called "response"
    .then( function(response) {
    

      // Log the queryURL
      console.log(MAPqueryURL);

      // Log the resulting object
      console.log(response);
    
      
  
      
      latitude = response.results[0].geometry.location.lat;
      longitude = response.results[0].geometry.location.lng;
      params = "waterTemperature"
      // Transfer content to HTML IMPORTANT
    
     console.log(latitude);
     console.log(longitude);

     
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`, {
      headers: {
        'Authorization': wtrAPIKey
      }
    }).then((response) => response.json()).then((jsonData) => {
      // Do something with response data
      console.log(jsonData)

      $("#temp").html("<h1>The water temperature is " + (((jsonData.hours[0].waterTemperature.meto) * 9/5) + 32) + " degrees Fahrenheit!</h1>");
    });


    });

  

    });


