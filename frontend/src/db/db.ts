import "@/db/models"
import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI!).then((conn) => {
      console.log(
        `Databse connected successfully to host ${conn.connection.host}`
      );
    })
    .catch((e) => {
      console.log(e);
    });
};
