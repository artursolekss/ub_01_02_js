let game_over = false;
$(onLoad);

let number_col_avail = 8;//we start at 0

function checkWinner() {
    const all_rows = $("tr");
    // all_rows.each(function () {
    //     let cols = $(this).children();
    //     let x_values = 0;
    //     let o_values = 0;
    //     for (let i = 0; i < 3; i++) {
    //         if ($(cols[i]).children().length == 0) {
    //             break;
    //         }
    //         let current_col_val = $(cols[i]).children()[0].text();
    //         if (current_col_val == "X") {
    //             x_values++;
    //         }
    //         else {
    //             o_values++;
    //         }
    //     }
    //     if (x_values == 3) {
    //         alert("You win!");
    //     }
    //     else if (o_values == 3) {
    //         alert("AI wins!");
    //     }
    // })
    const col1 = $("#col1").text();
    const col2 = $("#col2").text();
    const col3 = $("#col3").text();
    const col4 = $("#col4").text();
    const col5 = $("#col5").text();
    const col6 = $("#col6").text();
    const col7 = $("#col7").text();
    const col8 = $("#col8").text();
    const col9 = $("#col9").text();

    if (allSame(col1, col2, col3)) {
        annouceWinner(col1);
    }
    else if (allSame(col4, col5, col6)) {
        annouceWinner(col4);
    }
    else if (allSame(col7, col8, col9)) {
        annouceWinner(col7);
    }
    else if (allSame(col1, col4, col7)) {
        annouceWinner(col1);
    }
    else if (allSame(col2, col5, col8)) {
        annouceWinner(col2);
    }
    else if (allSame(col3, col6, col9)) {
        annouceWinner(col3);
    }
    else if (allSame(col1, col5, col9)) {
        annouceWinner(col1);
    }
    else if (allSame(col3, col5, col7)) {
        annouceWinner(col3)
    }
}

function allSame(a, b, c) {
    return a == b && b == c && c != "";
}

function annouceWinner(val) {
    let text = "";
    if (val == "X") {
        text = "You win!";
    }
    else {
        text = "AI wins!";
    }
    setTimeout(function () {
        alert(text);
    }, 500)
    game_over = true;
    removeAllOnClicks();
}

// function getValueCol(col) {
//     return col.html().replace("<h5>", "").replace("</h5>", "");
// }

function removeAllOnClicks() {
    const all_columns = $("td");
    all_columns.each(function () {
        let id = $(this).attr("id");
        $(this).off("click", tick);
    })
}

function onLoad() {
    const all_columns = $("td");
    all_columns.each(function () {
        let id = $(this).attr("id");
        $(this).on("click", { id: "#" + id }, tick);
    })
}

function tick(event) {
    const position_element = $(event.data.id);
    position_element.append($("<h5>X</h5>"));
    position_element.off("click", tick);
    number_col_avail--;
    checkWinner();
    if (game_over) {
        return;
    }
    aiTurn();
}

function tickAi(id) {
    const position_element = $(id);
    position_element.append($("<h5>O</h5>"));
    position_element.off("click", tick);
    number_col_avail--;
}

function aiTurn() {
    let random = Math.floor(Math.random() * number_col_avail);
    let count = 0;
    const all_columns = $("td");
    for (let i = 0; i < all_columns.length; i++) {
        if ($(all_columns[i]).children().length == 0) {
            if (random == count) {
                tickAi("#" + $(all_columns[i]).attr("id"));
                break;
            }
            count++;
        }
    }
    checkWinner();
}