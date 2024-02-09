let express = require('express');

const multer = require('multer');
const { houseModel, userModel, enquiryModel } = require('../models/allschemas');
const upload = multer();


let allrouter = express.Router();

allrouter.get('/', (req, res) => {
  console.log("Reached root");
  res.send("Welcome to realgrande back end server");
});

allrouter.get('/houses', async (req, res) => {
  console.log("Reached houses");
  try {
    let houses = await houseModel.find({});
    res.send(houses);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving houses");
  }
});

allrouter.post('/signup', upload.none(), async (req, res) => {
  console.log("Reached signup");
  console.log(req.body);
  let newUser = req.body;
  try {
    let user = new userModel(newUser);
    let userFromDB = await user.save();
    res.send(userFromDB);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating user");
  }
});

allrouter.post('/login', upload.none(), async (req, res) => {
  console.log("Reached login");
  console.log(req.body);

  try {
    let response = await userModel.find({ email: req.body.email, password: req.body.password });
    console.log(response);

    res.send(response);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
  }
}
);


allrouter.post('/addenquiry', upload.none(), async (req, res) => {

  console.log("Reached addenquiry");

  console.log(req.body);

  try {

    let enquiry = new enquiryModel(req.body);

    let enquiryFromDB = await enquiry.save();

    res.send(enquiryFromDB);

  } catch (err) {

    console.log(err);

    res.status(500).send("Error adding enquiry");

  }

}

);

allrouter.get('/enquiries', async (req, res) => {
  console.log("Reached enquiries");
  try {
    let enquiries = await enquiryModel.find({});
    res.send(enquiries);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving enquiries");
  }
}
);

module.exports = allrouter;
