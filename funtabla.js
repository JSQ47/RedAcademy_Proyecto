// Script para agregar una nueva fila
document.getElementById('addRowButton').addEventListener('click', function() {
    const table = document.querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td contenteditable="true">Nueva Fecha</td>
        <td contenteditable="true">Nuevo Tema</td>
        <td contenteditable="true"><a href="#">Nuevo Enlace</a></td>
        <td><button class="deleteRowButton">Eliminar</button></td>
    `;

    table.appendChild(newRow);

    // Añadir el evento para eliminar fila a este nuevo botón
    newRow.querySelector('.deleteRowButton').addEventListener('click', function() {
        newRow.remove();
    });
});

// Script para eliminar una fila existente
document.querySelectorAll('.deleteRowButton').forEach(function(button) {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        row.remove();
    });
});

// Script para guardar los cambios
document.getElementById('saveButton').addEventListener('click', function() {
    const rows = document.querySelectorAll('tbody tr');
    let tableData = [];

    rows.forEach(row => {
        let rowData = {
            fecha: row.cells[0].innerText,
            tema: row.cells[1].innerText,
            url: row.cells[2].innerText
        };
        tableData.push(rowData);
    });

    fetch('/saveTableData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tableData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Cambios guardados exitosamente');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
