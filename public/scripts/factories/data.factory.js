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
  getEmployees();
});
}

  function activateEmployee(employeeID) {
    $http({
      method: 'PUT',
      url: '/activate/' + employeeID
    }).then(function(response) {
      console.log('activate response:', response.data);
      getEmployees();
    });
  }

  function deactivateEmployee(employeeID) {
    $http({
      method: 'PUT',
      url: '/deactivate/' + employeeID
    }).then(function(response) {
      console.log('deactivate response:', response.data);
      getEmployees();
    });
  }



  return {
      allEmployees: employeeList,
      addEmployee: addEmployee,
      activateEmployee: activateEmployee,
      deactivateEmployee: deactivateEmployee
  }

}]);
