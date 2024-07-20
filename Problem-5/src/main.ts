/** @format */

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./users/routes";
import setupSwagger from "./swagger";
dotenv.config();

const app = express();
//swagger
setupSwagger(app);

const port = process.env.PORT || 3000;
const db_url =
  process.env.DB_URL || ("mongodb://localhost:27017/user" as string);

mongoose
  .connect(db_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(express.json());
app.use("/users", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
