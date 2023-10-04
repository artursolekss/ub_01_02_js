function translate() {

    const text_lv = $("#input_text").val();
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: {
            q: text_lv,
            target: 'lt',
            source: 'lv'
        }
    };

    $.ajax(settings).done(function (response) {
        $("#output_text").val(response.data.translations[0].translatedText);
    });
}

function onLoad() {
    $("#translate").on("click", translate);
}

$(onLoad);