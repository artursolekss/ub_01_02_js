function onLoad() {
    $("#getbutton").on("click", setFileContent)
}

function setFileContent() {
    const filename = $("#file_name").val();
    $.ajax({
        url: "http://127.0.0.1:3000/file?filename=" + filename,
        success: function (response) {
            const response_cont = JSON.parse(response);
            const textDec = new TextDecoder();
            const file_cont = textDec.decode(new Uint8Array(response_cont.response.data));
            $("#content").html(file_cont);
        }
    });
}

$(onLoad)