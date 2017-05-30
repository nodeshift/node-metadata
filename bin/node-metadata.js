#! /usr/bin/env node

const program = require('commander');
const lib = require('../lib/index.js');

program
  .version(require('../package.json').version)
  .option('-i --images', 'Indicates what images to show.')
  .parse(process.argv);

if (program.args.length === 0 || (!program.images && !program.i)) {
  program.help();
}

if (program.images || program.i) {
  lib.metadata().then(result => {
    program.args.forEach(a => {
      console.log(result[a]);
    });
  }).catch(console.error);
}
