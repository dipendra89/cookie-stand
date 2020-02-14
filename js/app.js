'use strict';

var hoursOfOperation = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var businessLocations = ['Seattle','Tokyo','Dubai','Paris','Lima'];
var allStores = [];
var locationTotals = [];
var grandTotal = 0;

var tableBody = document.getElementById('salesByLocation');

function tableHeaderSetup(){
  var tblHeader = document.getElementById('salesTableHeader');
  var headerEl = document.createElement('th');
  tblHeader.appendChild(headerEl);

  for (var i = 0; i < hoursOfOperation.length; i++){
      headerEl = document.createElement('th');
      headerEl.textContent = hoursOfOperation[i];
      tblHeader.appendChild(headerEl);
      locationTotals[i] = 0;
  };
  headerEl = document.createElement('th');
  headerEl.textContent = 'Daily Total Sales';
  headerEl.id = 'TotalHeader';
  tblHeader.appendChild(headerEl);
};


function PatsCookieSale(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalDailyCookies = 0;
    this.hourlyCookieSales = [];
    allStores.push(this);
}

PatsCookieSale.prototype.calculateCustomer = function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};

PatsCookieSale.prototype.cookiesPerHour = function () {
    for(var i = 0; i < hoursOfOperation.length; i++){
        var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
        this.hourlyCookieSales.push(salesPerHour);
        this.totalDailyCookies += salesPerHour;
      }
};

PatsCookieSale.prototype.render = function(){
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    var rowHeader = document.createElement('th');   // create a row header
    rowHeader.textContent = this.location;              // add the location name to the row header
    tableRow.appendChild(rowHeader);                  // add the row header to my row
    var col = 1;

    for(var i = 0; i < this.hourlyCookieSales.length; i++){  // looping
      var cell = tableRow.insertCell(col);                 
      cell.textContent = this.hourlyCookieSales[i];            // give that cell hourly sales
      locationTotals[i] += this.hourlyCookieSales[i];          //getting total of cookie sales/hour
      col++;                                              
  }
  cell = tableRow.insertCell(col);                  
  cell.textContent = this.totalDailyCookies;      
  cell.id = "locationTotals";
  grandTotal += this.totalDailyCookies;           
};

new PatsCookieSale('Seattle', 23, 65, 6.3);
new PatsCookieSale('Tokyo', 3, 24, 3.7);
new PatsCookieSale('Dubai', 11, 38, 3.7);
new PatsCookieSale('Paris', 20, 38, 2.3);
new PatsCookieSale('Lima', 2, 16, 4.6);

// Footer
function tableFooterSetup(){

  var tblFooter = document.getElementById('salesTableTotal');
  var tableRow = document.createElement('tr');
  tblFooter.appendChild(tableRow);

  var rowHeader = document.createElement('th'); 
  rowHeader.textContent = 'Totals:';
  tableRow.appendChild(rowHeader);
  var col = 1;
  
  for(var i = 0; i < locationTotals.length; i++){
      var cell = tableRow.insertCell(col);
      cell.textContent = locationTotals[i];
      col++;
  };

  cell = tableRow.insertCell(col);
  cell.id = "grandTotal";
  cell.textContent = grandTotal;
}


// Invoking functions

tableHeaderSetup();

for(var x = 0; x < allStores.length; x++){
  allStores[x].calculateCustomer();
  allStores[x].cookiesPerHour();
  allStores[x].render();
}

tableFooterSetup();


var locationForm = document.getElementById('locationAdd-form');
locationForm.addEventListener('submit', addLocation);

function addLocation(event){
    event.preventDefault();
    var locationName = event.target.elCity.value;
    var locationMax = parseInt(event.target.elMax.value); 
    var locationMin = parseInt(event.target.elMin.value);
    var locationAvg = parseInt(event.target.elAvg.value);

    new PatsCookieSale(locationName,locationMin, locationMax, locationAvg);
    
    var x = allStores.length-1;

    allStores[x].calculateCustomer();
    allStores[x].cookiesPerHour();
    allStores[x].render();

    document.getElementById('salesTableTotal').deleteRow(0);
    tableFooterSetup();

    event.target.elCity.value = null;
    event.target.elMax.value = null;
    event.target.elMin.value = null;
    event.target.elAvg.value = null;
}
