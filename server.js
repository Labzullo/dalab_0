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
const cronJob = require("cron").CronJob;
*/

// ---------------- Start Express setting for the bot --------------------------

/*
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
*/

// ------------------ End Express setting for the bot --------------------------

// ---------------- Start Module setting for the bot ---------------------------

/*
const db = require(path.join(__dirname, "db.js"))();
const dm = require(path.join(__dirname, "dm.js"))();
const communicate = require(path.join(__dirname, "communicate.js"))();
const support = require(path.join(__dirname, "support.js"))();
*/

// ------------------ End Module setting for the bot ---------------------------

// ---------------- Start Mail setting for the bot -----------------------------

/*
const mail = require(path.join(__dirname, "mail", "mail.js"))();
mail["daemonDailyMail"](path.join(__dirname, "database", db_final_value));
*/

// ------------------ End Mail setting for the bot -----------------------------

// ---------------- Start Microsoft setting for the bot ------------------------

var restify = require("restify");
var builder = require("botbuilder");

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
   console.log("%s listening to %s", server.name, server.url);
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

var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});

server.post("/api/messages", connector.listen());

// ------------------ End Microsoft setting for the bot ------------------------

// ---------------- Start Server setting for the bot ---------------------------

/*
const privateKey = fs.readFileSync(path.join(__dirname, "certs", "privkey.pem"));
const certificate = fs.readFileSync(path.join(__dirname, "certs", "fullchain.pem"));
const port = 11443;
https.createServer({key: privateKey, cert: certificate}, app).listen(port);
*/

// ------------------ End Server setting for the bot ---------------------------
