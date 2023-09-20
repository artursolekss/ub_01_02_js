function addRow() {
    const table_element = document.getElementById("myTable");
    const tabbody = table_element.getElementsByTagName("tbody")[0];
    const row = document.createElement("tr");
    tabbody.append(row);

    const header_cols =
        table_element.getElementsByTagName("thead")[0].
            getElementsByTagName("tr")[0].getElementsByTagName("th");

    for (let i = 0; i < header_cols.length; i++) {
        let col = document.createElement("td");
        let input = document.createElement("input");
        col.append(input);
        row.append(col);
    }

}

