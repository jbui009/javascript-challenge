// from data.js
var tableData = data;
// table body reference
var tbody = d3.select("tbody");
// print weather data from data.js
console.log(tableData);
// Select button
var button = d3.select("#filter-btn");
var form = d3.select("#form");
// button action event
button.on("click", runEnter);
form.on("submit",runEnter);
//change table
tableData.forEach(function (element) {
    var tr = tbody.append("tr");
    tr.append("td").attr("class", "ufosight").text(element.datetime);
    tr.append("td").attr("class", "ufosight").text(titleCase(element.city));
    tr.append("td").attr("class", "ufosight").text(element.state);
    tr.append("td").attr("class", "ufosight").text(element.country);
    tr.append("td").attr("class", "ufosight").text(element.shape);
    tr.append("td").attr("class", "ufosight").text(element.durationMinutes);
    tr.append("td").attr("class", "ufosight").text(element.comments);

});
// Complete the event handler function for the form
function runEnter() {
     // Prevent the page from refreshing
    d3.event.preventDefault();
 // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
 // get value property of input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData);
    //filtered data
    filteredData.forEach((UFOData) => {
        var row = tbody.append("tr");
        Object.entries(UFOData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    })};