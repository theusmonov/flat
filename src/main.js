import express from "express";
import config from "./shared/config/index.js";
import dbConnect from "./db/index.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mainRouter from "./_api.js";
import ErrorHandle from "./shared/errors/errorStatus.js"
import path from "path"
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mainRouter);
app.use(ErrorHandle);
app.use(express.static(path.join(process.cwd(), "upload")));


const startAppServer = async () => {

  try {
    await dbConnect.authenticate();
    console.log("Database ga ulanish muvaffaqiyatli bajarildi!");
  } catch (err) {
    console.log("Database ga ulanishda xatolik", err);
  }
 
  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
  });
};

startAppServer();
