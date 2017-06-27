"use strict";

/*
const bodyParser = require("body-parser");
const fs = require("fs");
const fsExtra = require("fs-extra");
const path = require("path");
const https = require("https");
const request = require("request");
const excel = require("exceljs");
const nodemailer = require("nodemailer");
const cronJob = require("cron").CronJob;
*/

// ---------------- Start HTTP endpoint functions for the bot ------------------

function getChatPage(req, res, next) {
  res.render("index");
  // res.setHeader("Content-Type", "text/html");
  // res.end("<html><title>ZulliBot</title><img src='img/home_page.png' alt='Home page Generali' style='width:100%; height:100%;'><iframe style='height:90%; width:40%; position: absolute; bottom:3px; right:3px;' src='https://webchat.botframework.com/embed/deloitte_bot?s=OKQOYQdkMuQ.cwA.bGI.z5E2DYpCyUjjB8BYPgKlee5-IbLcFdF4VjvyDUYv9j4'></iframe></html>");
  next();
}

function getHealth(req, res, next) {
  res.send("health OK");
  next();
}

// ------------------ End HTTP endpoint functions for the bot ------------------

// ---------------- Start Microsoft setting for the bot ------------------------

var builder = require("botbuilder");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log("Express listening to %s", port);
});

/*
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
*/

var connector = new builder.ChatConnector({
    appId: "49e0790c-8e4d-4c4f-9bce-b4bc49e72390",
    appPassword: "te2a62z5VUXp1d0H4ML4szz"
});

app.get("/", getChatPage);

app.get("/health", getHealth);

app.post("/api/messages", connector.listen());

// ------------------ End Microsoft setting for the bot ------------------------

// ---------------- Start Dialogue Manager setting for the bot -----------------

var bot = new builder.UniversalBot(connector, function(session) {
  session.send("You said: %s", session.message.text);
});

// ------------------ End Dialogue Manager setting for the bot -----------------
