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

// ---------------- Start HTTP endpoint functions for the bot ------------------

function getChatPage(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.end("<html><title>Prova</title><iframe src='https://webchat.botframework.com/embed/deloitte_bot?s=OKQOYQdkMuQ.cwA.-UI.Zx34euxO10K1ST8hDEooUtR54Gyiw55SQr4Lt2Hhtoo'></iframe></html>");
  next();
}

function getHealth(req, res, next) {
  res.send('health OK.');
  next();
}

// ------------------ End HTTP endpoint functions for the bot ------------------

// ---------------- Start Microsoft setting for the bot ------------------------

var restify = require("restify");
var builder = require("botbuilder");

var server = restify.createServer();
var port = process.env.OPENSHIFT_NODEJS_PORT || 3978
var ip = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0"

server.listen(port, ip, function () {
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

server.post("/api/messages", connector.listen());

// ------------------ End Microsoft setting for the bot ------------------------

// ---------------- Start Dialogue Manager setting for the bot -----------------

var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});

// ------------------ End Dialogue Manager setting for the bot -----------------
