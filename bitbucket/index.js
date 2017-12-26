#!/usr/bin/env node
var program = require('commander');

// $ snippet -u xg -p 123456 file
// user: xg pass: 123456 file: file

program.arguments('<file>')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .action(function(file) {
    console.log('user: %s pass: %s file: %s', program.username, program.password, file);
  })
  .parse(process.argv);

