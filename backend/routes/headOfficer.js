const route = require("express").Router();
const headOfficerController = require("../controller/headOfficer");

route.post(
  "/headOfficer/createPoliceMan",
  headOfficerController.createPoliceMan
);
route.get("/getPoliceMenList", headOfficerController.policeMenList);

module.exports = route;
