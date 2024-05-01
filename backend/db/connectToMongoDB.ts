import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log("connecting to MongoDB");
    await mongoose.connect(process.env.MONGO_DB_URI || "");
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB ", error.message);
  }
};

export default connectToMongoDB;
