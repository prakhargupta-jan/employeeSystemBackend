const express = require('express')
const adminRouter = require('./routes/adminRoutes');
const employeeRouter = require('./routes/employeeRoutes')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/admin', adminRouter)


module.exports = app;