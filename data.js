var getPhoto = function(employee){
    return employee.photo}

var getFN = function(employee){
    return employee.firstName}
var getLN = function(employee){
    return employee.lastName}
var getName = function(employee){
    return employee.firstName+" "+employee.lastName}

var getTitle = function(employee){
    return employee.title}

var getUnit = function(employee){
    return employee.unit
}
var getEmail = function(employee){
    return employee.email}

var getBio = function(employee){
    return employee.bio
}
var getPhone = function(employee){
    return employee.phone
}

var employeedata = d3.json("employee.json");

var successFCN = function(employee)
{console.log("Data collected",employee);
var rows = d3.select("tbody")
 .selectAll("tr")
 .data(employee)
 .enter()
 .append("tr")
 
 rows.append("td")
 .append("img")
 .attr("src",getPhoto);

 rows.append("td")
 .text(getName);
 
 rows.append("td")
 .text(getTitle)
 
 rows.append("td")
 .text(getUnit)
 
 rows.append("td")
 .text(getEmail)
 
 rows.append("td")
 .text(getBio)
 
 rows.append("td")
 .text(getPhone)
 
}

var failFCN = function(errorMsg)
{console.log("Whoops, something went wrong",errorMSG);}
employeedata.then(successFCN,failFCN);