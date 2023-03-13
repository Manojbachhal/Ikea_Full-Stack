const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

async function Connection() {
  await mongoose.connect(
    "mongodb+srv://manoj:kvno1chm@ikea.mkadg2e.mongodb.net/Ikea"
  );
  console.log("Connected to dabase");
}

module.exports = Connection;
