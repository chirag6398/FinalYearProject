const Fir = require("../models/fir");

module.exports = {
  firRegister: async (req, res) => {
    console.log(req.body);
    var body = req.body;

    var fir = new Fir({
      userId: body.userId,
      beatNo: body.beatNo,
      "complaintUser.address": body.complainantAddress,
      "complaintUser.dob": body.complainantDateOfBirth,
      "complaintUser.name": body.complainantName,
      "complaintUser.aadharNo": body.complaintAadharNo,
      "complaintUser.nationality": body.complainantNationality,
      "complaintUser.occupation": body.complainantOccupation,
      "crimeDetails.crime": body.detailsOfCrime,
      "crimeDetails.suspected": body.detailsOfSuspected,
      "crimeDetails.district": body.crimeDistrict,
      "crimeDetails.date": body.occurenceDate,
      "crimeDetails.time": body.occurenceTime,
      "crimeDetails.day": body.occurenceDay,
      "crimeDetails.state": body.crimeState,
      "crimeDetails.address": body.complainantAddress,
    });

    console.log(fir);
  },
};
