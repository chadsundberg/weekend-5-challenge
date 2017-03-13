myApp.controller('HomeController', ['DataFactory', function(DataFactory) {
  var self = this;
  self.employeeList = DataFactory.allEmployees;
  self.newEmployee = {};
  self.monthlySalaryExpenses = 0;

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

  self.calculateMonthlySalaryExp = function(){
  var totalSalary = 0;
  for (var i = 0; i < self.employeeList.list.length; i++) {
    totalSalary += self.employeeList.list[i].annual_salary;
  }
  self.monthlySalaryExpenses = totalSalary/12;
  return self.monthlySalaryExpenses;
}


}]); // end controller code block
