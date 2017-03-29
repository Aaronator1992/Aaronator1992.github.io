function getData(input) {
    // Get the data from the wunderground API
    $.ajax({
        url: "acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            data.Anvils.name;
            data.Explosives.name;
            data.Decoys.name;
            data.Traps.name;

//            $("#anvils").text(data.Anvils.path);
//            $("#anvils").text(data.Anvils.description);
//            $("#explosives").text(data.Explosives.path);
//            $("#explosives").text(data.Explosives.description);
//            $("#decoys").text(data.Decoys.path);
//            $("#decoys").text(data.Decoys.description);
//            $("#traps").text(data.Traps.path);
//            $("#traps").text(data.Traps.description);
//            $("#cover").fadeOut(250);


        }
    });
}

$("#page").on("click", "a", function (evt) {
    evt.preventDefault();

    var jsonAcme = $(this).text();
    console.log(jsonAcme);
    $.ajax({
        url: "acme.json"
        , dataType: "json"
        , success: function (data) {
            console.log(data);
            console.log(data[jsonAcme]);
            }
    });
});
