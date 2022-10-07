const { Router } = require("express");

const {addEmployee,deleteEmployee,freezeEmployee,getEmployeeData,listEmployee} = require('../controllers/adminController');

adminRouter = Router();

adminRouter.route('/').get(listEmployee).post(addEmployee);

adminRouter.route('/employee/:id/:date?').get(getEmployeeData).put(freezeEmployee).delete(deleteEmployee);

module.exports = adminRouter;