const express = require("express");
const Nationality = require("../models/Nationality");

// initialize express
const app = express();

// Get all nationalities
app.get("/nationalities", async (req, res) => {
  try {
    const nationalities = await Nationality.findAll();
    res.status(200).send(nationalities);
  } catch (err) {
    res.status(400).send("Unable to fetch nationalities");
  }
});



module.exports = app;