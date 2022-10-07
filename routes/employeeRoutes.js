const { Router } = require("express");

const {addEmployee,deleteEmployee,freezeEmployee,getEmployeeData,listEmployee} = require('../controllers/employeeController');

employeeRouter = Router();

employeeRouter.route('/').get(listTasks).post(addTask);

employeeRouter.route('/task/:id/').delete(deleteTask);

module.exports = employeeRouter;