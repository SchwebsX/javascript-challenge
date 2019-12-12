// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select ("#filter-btn");

// YOUR CODE HERE!


button.on("click", function() {
    tbody.html(" ")
    var inputDate = d3.select("#datetime");
    //console.log(inputDate);
    console.log("Clicked");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

//loop through the data 
    filteredData.forEach(function(ufosighting) {
        //console.log(ufosighting);
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(function([key, value]) {
            console.log(key, value)
        var cell = row.append("td");
        cell.text(value);
        });
    });
})