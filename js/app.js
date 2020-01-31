'use strict';
   
var hoursOfOperation = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var businessLocations = ['Seattle','Tokyo','Dubai','Paris','Lima'];

// Seattle Location
var location1 = {
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customerPerHour: function(min, max){
        var randomNum = Math.floor(Math.random() * (max - min)) + min;
        //console.log(`Random Number`);
        return randomNum;
    },
    dailySales: function(arr){
        var cookiesPerHour = this.locationName;
        var totalCookies = 0;
        var arrayResult = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesSales = this.customerPerHour(this.minCustomers, this.maxCustomers);
            var hourlySales = Math.round(cookiesSales * this.avgCookies);
            arrayResult[i] = `${arr[i]}: ${hourlySales} cookies`;
            cookiesPerHour = cookiesPerHour + `\n${arr[i]}: ${hourlySales} cookies`
            totalCookies = totalCookies + hourlySales;
        }
        arrayResult.push(`Total: ${totalCookies} cookies`);
        return arrayResult;
    },
};

console.log(location1.locationName +"; " + location1.dailySales(hoursOfOperation));

// Tokyo Location

var location2 = {
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2, 
    customerPerHour: function(min, max){
        var randomNum = Math.floor(Math.random() * (max - min)) + min;
        return randomNum;
    },
    dailySales: function(arr){
        var cookiesPerHour = this.locationName;
        var totalCookies = 0;
        var arrayResult = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesSales = this.customerPerHour(this.minCustomers, this.maxCustomers);
            var hourlySales = Math.round(cookiesSales * this.avgCookies);
            arrayResult[i] = `${arr[i]}: ${hourlySales} cookies`;
            cookiesPerHour = cookiesPerHour + `\n${arr[i]}: ${hourlySales} cookies`
            totalCookies = totalCookies + hourlySales;
        }
        arrayResult.push(`Total: ${totalCookies} cookies`);
        return arrayResult;
    },
};

console.log(location2.locationName +"; " + location2.dailySales(hoursOfOperation));

// Dubai Location

var location3 = {
    locationName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7, 
    customerPerHour: function(min, max){
        var randomNum = Math.floor(Math.random() * (max - min)) + min;
        return randomNum;
    },
    dailySales: function(arr){
        var cookiesPerHour = this.locationName;
        var totalCookies = 0;
        var arrayResult = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesSales = this.customerPerHour(this.minCustomers, this.maxCustomers);
            var hourlySales = Math.round(cookiesSales * this.avgCookies);
            arrayResult[i] = `${arr[i]}: ${hourlySales} cookies`;
            cookiesPerHour = cookiesPerHour + `\n${arr[i]}: ${hourlySales} cookies`
            totalCookies = totalCookies + hourlySales;
        }
        arrayResult.push(`Total: ${totalCookies} cookies`);
        return arrayResult;
    },
};

console.log(location3.locationName +"; " + location3.dailySales(hoursOfOperation));

// Paris Location

var location4 = {
    locationName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3, 
    customerPerHour: function(min, max){
        var randomNum = Math.floor(Math.random() * (max - min)) + min;
        return randomNum;
    },
    dailySales: function(arr){
        var cookiesPerHour = this.locationName;
        var totalCookies = 0;
        var arrayResult = [];
        
        for (var i = 0; i < arr.length; i++){
            var cookiesSales = this.customerPerHour(this.minCustomers, this.maxCustomers);
            var hourlySales = Math.round(cookiesSales * this.avgCookies);
            arrayResult[i] = `${arr[i]}: ${hourlySales} cookies`;
            cookiesPerHour = cookiesPerHour + `\n${arr[i]}: ${hourlySales} cookies`
            totalCookies = totalCookies + hourlySales;
        }
        arrayResult.push(`Total: ${totalCookies} cookies`);
        return arrayResult;
    },
};

console.log(location4.locationName +"; " + location4.dailySales(hoursOfOperation));

// Lima LOcation


var location5 = {
    locationName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6, 
    customerPerHour: function(min, max){
        var randomNum = Math.floor(Math.random() * (max - min)) + min;
        return randomNum;
    },
    dailySales: function(arr){
        var cookiesPerHour = this.locationName;
        var totalCookies = 0;
        var arrayResult = [];
        for (var i = 0; i < arr.length; i++){
            var cookiesSales = this.customerPerHour(this.minCustomers, this.maxCustomers);
            var hourlySales = Math.round(cookiesSales * this.avgCookies);
            arrayResult[i] = `${arr[i]}: ${hourlySales} cookies`;
            cookiesPerHour = cookiesPerHour + `\n${arr[i]}: ${hourlySales} cookies`
            totalCookies = totalCookies + hourlySales;
        }
        arrayResult.push(`Total: ${totalCookies} cookies`);
        return arrayResult;
    },
};

console.log(location5.locationName +"; " + location5.dailySales(hoursOfOperation));

// Calculating daily sales per location

var salesSection = document.getElementById('dailySalesPerLocation');
// Creating report
for(var i = 0; i<businessLocations.length; i++){

    var objectName = `location${i+1}`;
    var arrHourlyOutput = eval(objectName).dailySales(hoursOfOperation);

    var reportElement = document.createElement('report');
    reportElement.id = 'reportPerLocation';
    salesSection.appendChild(reportElement);


    var headerElement = document.createElement('h2');
    headerElement.textContent = businessLocations[i];
    headerElement.id = 'location';
    reportElement.appendChild(headerElement);
    
    // Creating list/appending
    var listElement = document.createElement('ol');
    listElement.id = 'hourlySales';
    reportElement.appendChild(listElement);

    // Using loop here then appending
    for (var j = 0; j < arrHourlyOutput.length; j++){
        var hourItem = document.createElement('li');
        hourItem.textContent = arrHourlyOutput[j];
        listElement.appendChild(hourItem);
    };
}