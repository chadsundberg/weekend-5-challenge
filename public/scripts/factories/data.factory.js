myApp.factory('DataFactory', ['$http', function($http) {
var employeeList = { list: [] };
console.log(employeeList);

getEmployees();

function getEmployees() {
  $http({
    method: 'GET',
    url: '/employees'
  }).then(function(response) {
    employeeList.list = response.data;
  });
}

function addEmployee(newEmployee) {
  $http({
  method: 'POST',
  url: '/employees',
  data: newEmployee
}).then(function(newEmployee){
  // console.log(newEmployee);

  // self.newTask = {};
  getEmployees();
});
}



  return {
      allEmployees: employeeList,
      addEmployee: addEmployee
  }

}]);
