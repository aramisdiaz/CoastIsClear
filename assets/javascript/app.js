  // This is our API key
  var mapAPIKey = "AIzaSyCAgC_4Ah49trBRbFVc3emcuZ-vzz8yEcA";
  var wtrAPIKey = "cd080552-9bd7-11ea-b3e2-0242ac130002-cd080606-9bd7-11ea-b3e2-0242ac130002"


  // Here we are building the URL we need to query the database

  //Add variables for location, etc.
  var MAPqueryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=beach&keyword=cruise&key=" + mapAPIKey;
  var WTRqueryURL = "https://api.stormglass.io/v2/tide/extremes/point"


  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: MAPqueryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(MAPqueryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML IMPORTANT
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });

    const lat = 43.38; // make variables for lat and long
    const lng = -3.01;

    fetch(`https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-25`, {
      headers: {
        'Authorization': wtrAPIKey
      }
    }).then((response) => response.json()).then((jsonData) => {
      // Do something with response data
      console.log(jsonData)
    });