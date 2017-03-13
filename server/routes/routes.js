var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

  // sample GET request

  router.get('/employees', function(req, res) {
  console.log('hit my get all employees route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM employees;', function(err, result) {
        done(); // close the connection db

        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.post('/employees', function(req, res) {
  console.log('hit post route');
  var employeeObject = req.body;

  // db query
  // INSERT INTO task (name) VALUES ('test');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO employees (first_name, last_name, id_number, job_title, annual_salary ) VALUES ($1, $2, $3, $4, $5 );',
        [employeeObject.first_name, employeeObject.last_name, employeeObject.id_number, employeeObject.job_title, employeeObject.annual_salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});

router.put('/activate/:id', function(req,res) {
  var idOfEmployeeToActivate = req.params.id;
  console.log(req.params.id);
  pool.connect(function(err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
        client.query('UPDATE employees SET status=TRUE WHERE ID=$1;',
          [idOfEmployeeToActivate],
          function(err, result) {
            done();
            if(err) {
              console.log(err);
              res.sendStatus(500);
            } else {
                res.sendStatus(200);
              }
          }
        );
      }
  });//end pool.connect
});//end activate router.put

router.put('/deactivate/:id', function(req,res) {
  var idOfEmployeeToDeactivate = req.params.id;
  console.log(req.params.id);
  pool.connect(function(err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
        client.query('UPDATE employees SET status=FALSE WHERE ID=$1;',
          [idOfEmployeeToDeactivate],
          function(err, result) {
            done();
            if(err) {
              console.log(err);
              res.sendStatus(500);
            } else {
                res.status(200).send(result.rows);
              }
          }
        );
      }
  });//end pool.connect
});//end deactivate router.put

// router.delete('/:id', function(req,res) {
//   var idOfEmployeeToDelete = req.params.id;
//   console.log('deleting employee with id#',  idOfEmployeeToDelete);
//   pool.connect(function(err, client, done) {
//     if(err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//         client.query('DELETE FROM employees WHERE id=$1;',
//           [idOfEmployeeToDelete],
//           function(err, result) {
//             done();
//             if(err) {
//               console.log(err);
//               res.sendStatus(500);
//             } else {
//                 res.sendStatus(200);
//               }
//           }
//         );
//       }
//   });//end pool.connect
// });//end employees router.delete

module.exports = router;
