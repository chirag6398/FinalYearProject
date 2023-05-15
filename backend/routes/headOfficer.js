const route = require("express").Router();
const headOfficerController = require("../controller/headOfficer");

route.post(
  "/headOfficer/createPoliceMan",
  headOfficerController.createPoliceMan
);

module.exports = route;
