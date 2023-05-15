const User = require("../models/user");
var bcrypt = require("bcryptjs");
// const generateToken = require("../service/commonService").generateToken;
var hashPassword = require("../service/commonService").hashPassword;

module.exports = {
  createPoliceMan: async (req, res) => {
    try {
      console.log(req.body);
      const {
        aadharNo,
        email,
        firstName,
        password,
        reEnterPassword,
        lastName,
      } = req.body;
      if (!aadharNo || !email || !password || !firstName || !lastName) {
        return res.status(401).json({ message: "plz fill all fields" });
      } else {
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
          console.log("user exist");
          return res.status(409).json({ alert: "user exist already" });
        } else {
          const newUser = new User({
            aadharNo,
            email,
            firstName,
            lastName,
            password,
            userType: "policeMen",
          });
          newUser.password = await hashPassword(newUser.password);
          const status = await newUser.save();
          if (status) {
            console.log(status);
            status.password = password;
            sendMail(status);
            return res
              .status(200)
              .json({ message: "PoliceMan Added successfully", status: 200 });
          } else {
            return res.status(500).json({ server: "try later" });
          }
        }
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: "internal server error" });
    }
  },
};
