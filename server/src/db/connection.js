import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
