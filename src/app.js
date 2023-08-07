/* eslint-disable no-unused-vars */
import "dotenv/config";
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import exceptionsErrors from "./middlewares/exceptionsErrors.js";


db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco realizado com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

//Midleware de erro
app.use(exceptionsErrors);

export default app;