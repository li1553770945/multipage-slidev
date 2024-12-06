"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var dev_1 = require("./dev");
var build_1 = require("./build");
commander_1.program
    .command('dev')
    .description('Start the development server')
    .action(dev_1.devServer);
commander_1.program
    .command('build')
    .description('Build the static site')
    .action(build_1.buildProject);
commander_1.program.parse(process.argv);
