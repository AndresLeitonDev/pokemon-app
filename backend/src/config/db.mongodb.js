const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🔥 MongoDB Atlas conectado");
  } catch (error) {
    console.error("❌ Error MongoDB:", error.message);
  }
};

module.exports = { connectMongoDB };