const app = require("./app");
const dotenv = require('dotenv');
const db = require("./db");

dotenv.config({path: './config.env'})
db();

const server = app.listen(process.env.PORT, (c) => console.log(`server is listening on port ${process.env.PORT}`));