function onLoad() {
    // $("#getbutton").on("click", setFileContent)
    $("#save").on("click", addPerson)
    loadPersons();

}

function loadPersons() {
    $.get("http://127.0.0.1:3000/get-all-persons", (data) => {
        const all_persons = JSON.parse(data.response);
        const tbody = $("#personstable_body");
        for (let i = 0; i < all_persons.length; i++) {
            let person = all_persons[i];
            let firstname = person.firstname;
            let lastname = person.lastname;
            let row = $("<tr>");
            row.append($("<td>").html(firstname));
            row.append($("<td>").html(lastname));
            tbody.append(row);
        }
    })
}

function addPerson() {
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    $.post("http://127.0.0.1:3000/add-person", {
        firstname: firstname,
        lastname: lastname
    }, (data) => {
        alert(data.response);
    }
    );
}

// function setFileContent() {
//     const filename = $("#file_name").val();
//     $.ajax({
//         url: "http://127.0.0.1:3000/file?filename=" + filename,
//         success: function (response) {
//             const response_cont = JSON.parse(response);
//             const textDec = new TextDecoder();
//             const file_cont = textDec.decode(new Uint8Array(response_cont.response.data));
//             $("#content").html(file_cont);
//         }
//     });
// }

$(onLoad)