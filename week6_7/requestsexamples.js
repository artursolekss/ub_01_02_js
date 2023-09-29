function onLoad() {
    // $("#getData").on("click", getCountriesData)
    getCountriesData();
}

function getCountriesData() {
    $.ajax({
        url: "https://restcountries.com/v3.1/all?fields=name,flags",
        success: function (countries) {///callback - once the response is recieved from http request, then this logic/function is trigger
            const countries_body = $("#countries_list");
            for (let i = 0; i < countries.length; i++) {
                let country_row = $("<tr></tr>");
                let country = countries[i];
                country_row.append($("<td>").text(country.name.common));
                country_row.append($("<td>").append($("<img>").attr({
                    "src": country.flags.png,
                    "width": "150",
                    "height": "100"
                })));
                countries_body.append(country_row);
            }

        }
    });
}

$(onLoad);