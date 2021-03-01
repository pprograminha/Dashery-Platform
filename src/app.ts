import express from "express";
import { router } from "./routes";
import path from "path";
const app = express();

app.use(express.json());
app.use(router);
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname + "../public")));

export { app };
