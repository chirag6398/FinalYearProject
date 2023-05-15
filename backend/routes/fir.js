const route = require("express").Router();
const firController = require("../controller/fir");

route.post("/firRegister", firController.firRegister);
route.get("/getFirs", firController.getFirs);
route.get("/getFirsByPoliceMenId/:id", firController.getFirsByPoliceMenId);
// route.post("/AdminLogIn", userController.signIn);

module.exports = route;
