function tim() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let display = false;
        let tdTextValues = [];
        td = tr[i].getElementsByTagName("td");
        for (let i = 0; i < td.length; i++) {
            tdTextValues.push(td[i].textContent || td.innerText);
        }
        console.log(tdTextValues);
        // if (td) {
        //     txtValue = td.textContent || td.innerText;
        //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //         tr[i].style.display = "";
        //     } else {
        //         tr[i].style.display = "none";
        //     }
        // }

        if (tdTextValues.length != 0) {
            for (let i = 0; i < tdTextValues.length; i++) {
                if (tdTextValues[i].toUpperCase().indexOf(filter) > -1) {
                    display = true;
                    break;
                } else {
                    display = false
                }
            }
            if(display == false){
                tr[i].style.display = "none";
            }else{
                tr[i].style.display = "";
            }
        }
    }
}
