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

      url : "http://api.wunderground.com/api/5313bf6e3094fdf4/geolookup/q/" + lat + "," + long + ".json",
          dataType : "jsonp",
              success : function(data){
                  console.log(data);
                  var location = data[''][''];
                  var temp_f = data[''][''];
                  console.log("Current Temperature in " + location + " is: " + temp_f);

                  var locName = $('#locName');
                  var highTemp = $('#highTemp');
                  var tempMessage = $('#tempMessage');

                  locName.html(location);
                  highTemp.html(temp_f);
                  tempMessage.html("Current Temperature in " + location + " is: " + temp_f);
              }
  });



      $("#cover").fadeOut(250);
    }
           });

}

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
