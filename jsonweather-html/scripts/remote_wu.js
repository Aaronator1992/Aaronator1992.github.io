// Current Location Scripts
$(function  weather() {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
    function getData(lat, long){
        $.ajax({
            url : "https://api.wunderground.com/api/5313bf6e3094fdf4/geolookup/conditions/forecast/q/" + lat + "," + long + ".json",
            dataType : "jsonp",
            success : function(data) {
                var location = data['location']['city'];
                var temp_f = data['current_observation']['temp_f'];
              $("#image-left").text(data.forecast.simpleforecast.forecastday.high);
                $("#image-right").text(data.forecast.simpleforecast.forecastday.low);
              $("").text();  $("#cityDisplay").text(data.current_observation.display_location.full);
                $("#currentTemp").text(data.current_observation.temp_f);
                $("#Summary").text(data.current_observation.weather);
                console.log(data);
                //alert("Current temperature in " + location + " is: " + temp_f);
            }
        });





      $("#cover").fadeOut(250);



}

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
