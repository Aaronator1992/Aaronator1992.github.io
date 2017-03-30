$.ajax({
    url: "/acme/js/acme.json",
    dataType: "json",
    success: function (data) {
        console.log(data);

        var output = '';
        $.each(data, function (key, val) {
            output += '<li>';
            output += '<a href = " ' + this.path + ' ">' + key + '</a>';
            output += '</li>';

        });
        console.log(output);
        $("#nav").append(output);
    }

});
$("#nav").on("click", "a", function (evt) {
    evt.preventDefault();

    var jsonAcme = $(this).text();
    console.log(each);
    $.ajax({
        url: "/acme/js/acme.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(data[jsonAcme])



            data.Anvils.name;
            data.Explosives.name;
            data.Decoys.name;
            data.Traps.name;

            $("#anvils").text(data.Anvils.path);
            $("#anvils").text(data.Anvils.description);
            $("#anvils").text(data.Anvils.manufacturer);
            $("#anvils").text(data.Anvils.price);
            $("#anvils").text(data.Anvils.reviews);

            $("#explosives").text(data.Explosives.path);
            $("#explosives").text(data.Explosives.description);
            $("#explosives").text(data.Explosives.manufacturer);
            $("#explosives").text(data.Explosives.price);
            $("#explosives").text(data.Explosives.reviews);


            $("#decoys").text(data.Decoys.path);
            $("#decoys").text(data.Decoys.description);
            $("#decoys").text(data.Decoys.manufacturer);
            $("#decoys").text(data.Decoys.price);
            $("#decoys").text(data.Decoys.reviews);

            $("#traps").text(data.Traps.path);
            $("#traps").text(data.Traps.description);
            $("#traps").text(data.Traps.manufacturer);
            $("#traps").text(data.Traps.price);
            $("#traps").text(data.Traps.reviews);
            $("#cover").fadeOut(250);


        }
    });

});
