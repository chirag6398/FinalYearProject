const route = require("express").Router();
const headOfficerController = require("../controller/headOfficer");

route.post(
  "/headOfficer/createPoliceMan",
  headOfficerController.createPoliceMan
);
route.get("/getPoliceMenList", headOfficerController.policeMenList);
route.put("/assignFirToPoliceMen", headOfficerController.assignFirToPoliceMen);
module.exports = route;
