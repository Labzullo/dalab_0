"use strict";

/*
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

var builder = require("botbuilder");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(app.get("port"), function() {
  console.log("Express listening to port %s", app.get("port"));
});

app.post("/webhook", function(req, res) {
  res.sendStatus(200);

  var input = req.body.input;
  var text = input.text;
  var payload = input.payload;
  var sessionId = req.body.sessionid;

  console.log(text, payload, sessionId);
});

app.get("/ping", function(req, res) {
  res.sendStatus(200);
  console.log("This is a pong response");
});

// ------------------ End HTTP endpoint functions for the bot ------------------

// ---------------- Start Dialogue Manager setting for the bot -----------------

// ------------------ End Dialogue Manager setting for the bot -----------------
