const { default: mongoose } = require("mongoose");

module.exports = () =>
  mongoose
    .connect(process.env.DB.replace("<password>", process.env.DB_PASSWORD))
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.log(`something went wrong while connecting to DB\n${err}`)
      console.log(process.env.DB.replace("<password>", process.env.DB_PASSWORD))
    });
