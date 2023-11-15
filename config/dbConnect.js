const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected data successful");
  } catch (err) {
    console.log("database error");
  }
};

module.exports = dbConnect;
