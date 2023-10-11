function onLoad() {
    loadTempalate();
    $("#citysearch").on("click", weatherforecastsearch);
}

$(onLoad);

function weatherforecastsearch() {
    const city = $("#city").val();
    $.get("http://127.0.0.1:3000/get-weather-forecast?city=" + city, (resp) => {
        if (resp.status == 200) {
            const data = resp.response;
            $("#current_temp_img").attr("src", "https://" + data.current_temp.icon);
            $("#current_temp_c").html(data.current_temp.temp + " °C")


            $("#day1_temp_img").attr("src", "https://" + data.forecast[0].icon);
            $("#day1_temp_c").html(data.forecast[0].avg_temp + " °C")
            $("#date1").html(data.forecast[0].date);

            $("#day2_temp_img").attr("src", "https://" + data.forecast[1].icon);
            $("#day2_temp_c").html(data.forecast[1].avg_temp + " °C")
            $("#date2").html(data.forecast[1].date);

            $("#day3_temp_img").attr("src", "https://" + data.forecast[2].icon);
            $("#day3_temp_c").html(data.forecast[2].avg_temp + " °C")
            $("#date3").html(data.forecast[2].date);
        }
    });
}

function loadTempalate() {
    $.get("http://127.0.0.1:3000/get-html-template", (templ_resp) => {
        const templ_cont = templ_resp.response;
        $(document.body).append(templ_cont.body);
        $(document.head).append(templ_cont.head);

    });
}