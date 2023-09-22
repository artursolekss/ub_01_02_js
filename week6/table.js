let current_id = 1;

function addRow() {
    const table_element = document.getElementById("myTable");
    const tabbody = table_element.getElementsByTagName("tbody")[0];

    const all_rows = tabbody.getElementsByTagName("tr");
    let empty_fields = false;

    if (all_rows.length > 0) {
        const last_row = all_rows[all_rows.length - 1];
        const row_cols = last_row.getElementsByTagName("td");
        for (let i = 0; i < row_cols.length; i++) {
            let input_element = row_cols[i].getElementsByTagName("input")[0];
            if (input_element.value == "") {
                // alert("Please, enter all the values");
                // return;
                input_element.className = "error";
                empty_fields = true;
            }
            else {
                input_element.className = "";
            }
        }

        if (empty_fields) {
            alert("Please, enter all the values");
            return;
        }

        for (let i = 0; i < row_cols.length; i++) {
            let input_element = row_cols[i].getElementsByTagName("input")[0];
            let ancr_element = document.createElement("a");
            ancr_element.innerText = input_element.value;
            input_element.remove();
            row_cols[i].append(ancr_element);
        }
    }

    const row = document.createElement("tr");
    tabbody.append(row);

    const header_cols =
        table_element.getElementsByTagName("thead")[0].
            getElementsByTagName("tr")[0].getElementsByTagName("th");

    for (let i = 0; i < header_cols.length; i++) {
        let col = document.createElement("td");

        let input = document.createElement("input");
        if (header_cols[i].id === "id_field") {
            // const current_value = document.getElementById("current_id");
            // input.value = current_value.value;
            input.value = current_id++;
            // current_value.value = Number(current_value.value) + 1;
        }
        col.append(input);
        row.append(col);
    }

}

function onSearchByName() {
    const search_name = document.getElementById("search_name").value;
    const table_element = document.getElementById("myTable");
    const header_cols =
        table_element.getElementsByTagName("thead")[0].
            getElementsByTagName("tr")[0].getElementsByTagName("th");

    let name_col_indx;
    let id_col_indx;
    for (let i = 0; i < header_cols.length; i++) {
        if (header_cols[i].id == "name_field") {
            name_col_indx = i;
        }
        else if (header_cols[i].id == "id_field") {
            id_col_indx = i;
        }
    }

    const rows =
        table_element.getElementsByTagName("tbody")[0].
            getElementsByTagName("tr");

    let id = "";
    for (let i = 0; i < rows.length; i++) {
        let row_cols = rows[i].getElementsByTagName("td");
        let name_val = row_cols[name_col_indx].innerText;
        if (name_val == search_name) {
            id = row_cols[id_col_indx].innerText;
            break;
        }
    }
    const id_found_element = document.getElementById("id_found");
    id_found_element.innerText = id;
}


function myHandler(e) {
    // event handling  
    // e.stopPropogation();
    // alert("Clicked")
    switch(e.target.id){
        case "id_field":
            alert("You clicked on ID field");
            break;
        case "name_field":
            alert("You clicked on the First Name field");
            break;
        case "last_name":
            alert("You clicked on the Last Name field");
            break;
        default:
            alert("Something else is pressed");
            
    }
}

function onInit() {
    const table_element = document.getElementById("myTable");
    // table_element.onclick = () => {
    //     alert("on table click");
    // }
    table_element.addEventListener("click", myHandler, true);
}

