import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import environment from "./environments";

const app = express();

//@todo: em ambiente de produção, colocar o dominio real da aplicação
app.use(cors());

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(environment.port);
