#!/usr/bin/env node

var program = require('commander');
var isFile = require('is-file');

var pkg = require('../package.json');

var validateMessage = require('../dist').validateMessage;
var validateMessageFromFile = require('../dist').validateMessageFromFile;

program
  .version(pkg.version)
  .description(pkg.description)
  .command('validate-commit-msg <message>', 'validate a message')
  .option('-p, --preset <preset>', 'specify a preset (angular|atom|eslint|ember|jquery|jshint) [angular]', 'angular')
  .action(function(message) {
    var valid = false;
    var options = {
      preset: program.preset
    };

    if (isFile(message)) {
      valid = validateMessageFromFile(message, options);
    } else {
      valid = validateMessage(message, options);
    }

    if (valid === false) {
      process.exit(1);
    }
    process.exit(0);
  });

program.parse(process.argv);
