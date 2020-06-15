// from data.js
let tableData = data;

// Select different parts of page that might be needed
let filterButton = d3.select("#filter-btn");
let inputField = d3.select("#datetime");
let tableBody = d3.select("tbody");

// Define function for adding rows
function addTableRows(tableFill) {

    // Loop through data
    tableFill.forEach(function(ufoSighting) {

        // Add new row
        let newRow = tableBody.append("tr");

        // Loop through data objects
        Object.entries(ufoSighting).forEach(function([key, value]) {
            // Add data to the row one cell at a time
            let newCell = newRow.append("td").text(value);
        });
    });
};

// Create event handlers
filterButton.on("click", filterTable);

// Define function for button click
function filterTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Pull value from date field
    let dateInput = inputField.property("value");

    // Remove current rows
    tableBody.html("");

    // Filter data
    let filteredData = tableData.filter(sighting => sighting.datetime === dateInput);

    addTableRows(filteredData);
};