const chalk = require("chalk");
const { command, demandOption, string } = require("yargs");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// customise yargs version
yargs.version("1.1.0");

//Create Add command
yargs.command({
  command: "add",
  describe: "Add a new note ",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note ",
  handler: function () {
    console.log("Removing a note!");
  },
});

// Create list cpmmand
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Creat read command
yargs.command({
  command: "read",
  describe: "Read a note ",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();
