import express from "express";
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("interface","./src/interface")
}
module.exports = configViewEngine;