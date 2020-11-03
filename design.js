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

var divEmployee = d3.select("body")
.selectAll("div")
.data(employee)
.enter()
.append("div")
.attr("class","employee");

var divGeneral = divEmployee.append("div")
 .attr("class","general");

var spanName = divGeneral.append("span")
.attr("class","eName");

var imgPhoto = divGeneral.append("img")
.attr("class","img");



