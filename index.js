#!/usr/bin/env node
const chalk = require('chalk')
const figlet = require('figlet')
const mdLinksFn = require('./mdLinks.js')

const message = (msn) => {
    console.log(chalk.bold.cyan(figlet.textSync(msn, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })));
};

(async() => {
    message('MD-Links');
})();