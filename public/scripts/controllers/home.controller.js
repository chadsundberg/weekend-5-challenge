myApp.controller('HomeController', ['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.allEmployees;
  self.newEmployee = {};

  self.addEmployee = function() {
    DataFactory.addEmployee(self.newEmployee);
    self.newEmployee = {};
  }

  self.activateEmployee = function(employeeID) {
    console.log('activate employee clicked on', employeeID);
    DataFactory.activateEmployee(employeeID);
  }

  self.deactivateEmployee = function(employeeID) {
    console.log('deactivate employee clicked on', employeeID);
    DataFactory.deactivateEmployee(employeeID);
  }


}]); // end controller code block
