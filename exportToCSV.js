function downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename) {
    const table = document.getElementById("resultsTable");
    let csv = [];
    for (let i = 0, row; row = table.rows[i]; i++) {
        let rowCSV = [];
        for (let j = 0, col; col = row.cells[j]; j++) {
            rowCSV.push('"' + col.innerText + '"');
        }
        csv.push(rowCSV.join(","));
    }
    downloadCSV(csv.join("\n"), filename);
}
