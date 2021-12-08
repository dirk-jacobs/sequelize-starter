const express = require("express");
const Nationality = require("../models/nationality");
const User = require("../models/User");
const Language = require("../models/Language");

// initialize express
const app = express();

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(400).send("Unable to fetch users");
  }
});

// Get a single user
app.get("/users/:id", async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({
      where: {
        UserID: id
      }
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("Unable to fetch user");
  }
});

// Get all users (Large)
app.get("/users-L", async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: Nationality, as: 'user-nationality' }
    });
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(400).send("Unable to fetch users");
  }
});

// Get all users (ExtraLarge)
app.get("/users-XL", async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: Language, as: 'Languages' }
    });
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(400).send("Unable to fetch users");
  }
});


module.exports = app;