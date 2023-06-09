import express from "express";
import homeController from "../../data/controller";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get("/",homeController.getHomePage);
    router.get("/abc",(req,res) => {
        return res.send("Hello World with abc" )
    });

    return app.use("/", router);
}
module.exports = initWebRoutes;