// from data.js
var tableData = data; 
// Select the tbody tag
var tbody = d3.select("tbody");
var h2 = d3.select("h2")

// For each row append the HTML tags and add it to the tbody object
tableData.forEach((city) => {
    var row = tbody.append("tr");
    Object.entries(city).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the Input and Button elements 
var button = d3.select("#filter-btn")

// Define the function handler 
function filterDate() {  
    var input = d3.select("#datetime").property("value");
    tbody.html("");
    h2.text("")
    if (new Date(input) < new Date("1/1/2010") | new Date(input) > new Date("1/13/2010")) {
        h2.text("Please Select a Date Between 1/1/2010 and 1/13/2010. Do not include 0's if not needed")
    }
else {
    var filteredData = [];
    filteredData = tableData.filter(city => city.datetime === input);
    filteredData.forEach((city) => {
        var row = tbody.append("tr");
        Object.entries(city).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      })};
};

// Define Event Handler
button.on("click", filterDate)