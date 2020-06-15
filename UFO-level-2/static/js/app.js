// from data.js
let tableData = data;

// Select different parts of page that might be needed
let filterButton = d3.select("#filter-btn");
let inputField1 = d3.select("#datetime");
let inputField2 = d3.select("#city");
let inputField3 = d3.select("#state");
let inputField4 = d3.select("#country");
let inputField5 = d3.select("#shape");
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
    let dateInput = inputField1.property("value");
    let cityInput = inputField2.property("value");
    let stateInput = inputField3.property("value");
    let countryInput = inputField4.property("value");
    let shapeInput = inputField5.property("value");

    // Remove current rows
    tableBody.html("");

    // Setup initial data
    let filteredData = tableData

    // Filter data
    if (dateInput != "") {
        filteredData = filteredData.filter(sighting => sighting.datetime === dateInput);
    }
    
    if (cityInput != ""){
        filteredData = filteredData.filter(sighting => sighting.city === cityInput);
    }

    if (stateInput != ""){
        filteredData = filteredData.filter(sighting => sighting.state === stateInput);
    }

    if (countryInput != ""){
        filteredData = filteredData.filter(sighting => sighting.country === countryInput);
    }

    if (shapeInput != ""){
        filteredData = filteredData.filter(sighting => sighting.shape === shapeInput);
    }

    addTableRows(filteredData);
};