$.ajax({
    url: "/acme/js/acme.json",
    dataType: "json",
    success: function (data) {

        var output = '';
        $.each(data, function (key, val) {
            output += '<li>';
            output += '<a href = " ' + this.path + ' ">' + key + '</a>';
            output += '</li>';
        });
        $("nav .flexlist").append(output);
    }
});


$(function () {
    $("nav .flexlist").on("click", ":not(:first-child) a", function (evt) {
        evt.preventDefault();

        var jsonAcme = $(this).text();
        console.log(jsonAcme);
        $.ajax({
            url: "/acme/js/acme.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                name = data[jsonAcme].name;
                price = data[jsonAcme].price;
                description = data[jsonAcme].description;
                manufacturer = data[jsonAcme].manufacturer;
                reviews = data[jsonAcme].reviews;
                product_img = data[jsonAcme].path;


                $('#name').text(name);
                $('#price').text(price);
                $('#description').text(description);
                $('#manufacturer').text('Made by: ' + manufacturer);
                $('#reviews').text('Rating: ' + reviews + ' Stars');

                $('#product_img').html('<img src="' + product_img + '" alt="'+ name +'">');
                console.log(price);
                $('#home').fadeOut();
            }
        });
    });
});
