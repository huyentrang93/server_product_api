import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./domain/index";
import initWebRoutes from "./interface/router/web";
import initAPIRoutes from "./interface/router/index";
import config from "../config";
import data from "./data/index";
import './interface'
require('dotenv').config();

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
viewEngine(app);
initWebRoutes(app)
initAPIRoutes(app)
let port = process.env.PORT || 8069;
app.listen(config.port,() => {
    console.log("Backend Nodejs is runing" + config.port)
});

