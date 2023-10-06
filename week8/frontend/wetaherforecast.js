function onLoad() {
    loadTempalate();
    $("#citysearch").on("click", weatherforecastsearch);
}

$(onLoad);

function weatherforecastsearch() {
    const city = $("#city").val();
    $.get("http://127.0.0.1:3000/get-weather-forecast?city=" + city, (resp) => {


    });
}

function loadTempalate() {
    $.get("http://127.0.0.1:3000/get-html-template", (templ_resp) => {
        const templ_cont = templ_resp.response;
        $(document.body).append(templ_cont.body);
        $(document.head).append(templ_cont.head);

    });
}