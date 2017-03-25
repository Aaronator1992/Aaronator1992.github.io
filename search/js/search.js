var returned;


// Get weather data from wunderground.com
function getData(input) {
    // Get the data from the wunderground API
    console.log(input);
    $.ajax({
        url: "https://api.wunderground.com/api/a5c6a1e0c48cd54e/geolookup/conditions/forecast/q/"
        + input + ".json"
        , dataType: "jsonp"
        , success: function (data) {
            console.log(data);
            var location = data.location.city + ', ' + data.location.state;
            var temp_f = data.current_observation.temp_f;
            var high = Math.round(data.forecast.simpleforecast.forecastday[0].high.fahrenheit);
            var low = Math.round(data.forecast.simpleforecast.forecastday[0].low.fahrenheit);
            var summary = data.current_observation.weather;
            console.log('Location is: ' + location);
            console.log('Temp is: ' + temp_f);
            $("#h1").text(location);
            $("#title").html(location + " | Weather Center");
            $("#high").text("High: " + high + "°F");
            $("#low").text("Low: " + low + "°F");
            $("#currenttemp").html(Math.round(temp_f) + '°');
            $("#summary").text(toTitleCase(data.current_observation.icon));
            $("#cover").fadeOut(250);
        }
    });
}

$('#query').keyup(function() {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
        console.log(data); // test for JSON received
        // Begin building output

        returned = data;
        var output = '<ol>';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="https://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each


        output += '</ol>';
        $("#searchResults").html(output); // send results to the page
    }); // end getJSON
    //$('#searchResults').css("display": "block");

}); // end onkey



// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    $()
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
    console.log(jsonCity);
    index = $(this).index("a");

    getData(returned.RESULTS[index].zmw)

    document.getElementById("searchResults").style.display="none";

});



// A function for changing a string to TitleCase
function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
