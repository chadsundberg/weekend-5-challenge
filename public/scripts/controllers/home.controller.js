myApp.controller('HomeController', ['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.allEmployees;
  self.newEmployee = {};




  self.addEmployee = function() {
    DataFactory.addEmployee(self.newEmployee);
    console.log(self.newEmployee);
    self.newEmployee = {};
  }


}]); // end controller code block
