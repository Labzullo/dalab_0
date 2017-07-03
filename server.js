"use strict";

/*
const fsExtra = require("fs-extra");
const request = require("request");
const excel = require("exceljs");
const nodemailer = require("nodemailer");
const cronJob = require("cron").CronJob;
*/

// ---------------- Start HTTP endpoint functions for the bot ------------------

var bodyParser = require("body-parser");
var builder = require("botbuilder");
var express = require("express");
var fs = require("fs");
var https = require("https");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const options = {
  key: fs.readFileSync(path.join(__dirname, "/certs/privkey.pem")),
  cert: fs.readFileSync(path.join(__dirname, "/certs/fullchain.pem"))
};
const port = 11444;

app.get("/endpoint", function(req, res) {
  res.sendStatus(200);
});

app.get("/pong", function(req, res) {
  res.sendStatus(200);
  console.log("This is a pong response");
});

app.post("/endpoint", function(req, res) {
  res.sendStatus(200);

  var input = req.body.input;
  // var text = input.text;
  // var payload = input.payload;
  var sessionId = req.body.sessionid;

  // console.log(text, payload, sessionId);
  console.log(text, sessionId);
});

// ------------------ End HTTP endpoint functions for the bot ------------------

// ---------------- Start Dialogue Manager setting for the bot -----------------

// ------------------ End Dialogue Manager setting for the bot -----------------

https.createServer(options, app).listen(port, function() {
  console.log("Express started on port %s", port);
});
