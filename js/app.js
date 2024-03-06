function addRow() {
    function addRow() {
        var table = document.getElementById("TTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        
        var cells = newRow.insertCell(0);
        cells.innerHTML = "<td contenteditable='true'></td>";
        
        cells = newRow.insertCell(1);
        cells.innerHTML = "<td contenteditable='true'></td>";
    
        cells = newRow.insertCell(2);
        cells.innerHTML = "<td contenteditable='true'></td>";
    
        cells = newRow.insertCell(3);
        cells.innerHTML = "<td contenteditable='true'></td>";

        cells = newRow.insertCell(4);
        cells.innerHTML = "<td contenteditable='true'></td>";
    
        cells = newRow.insertCell(5);
        cells.innerHTML = "<button onclick='updateRow(this)'>↻</button> <button onclick='deleteRow(this)'>-</button>";
      }
  }

  function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < cells.length - 1; i++) {
      cells[i].setAttribute("contenteditable", "true");
    }
  }

  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }