import dotenv from "dotenv";
dotenv.config();
import express from "express";
import indexRouter from "./routers/index.router.js";
import manageConection from "./middlewares/manageConection.middleware.js";
import db from "./db.js";

db();
const app = express();
app.use(express.json());
app.use(manageConection);
app.use(indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App activa en el puerto ${PORT}`);
});