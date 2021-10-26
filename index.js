#!/usr/bin/env node

const chalk = require('chalk')
const figlet = require('figlet')
const mdLinksFn = require('./mdLinks.js')

//const [,, ...args] = process.argv
//console.log(`Hello world${args}`)

const cli = () => {
    console.log(chalk.cyanBright(figlet.textSync('MD Links', {
        font: 'small',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
    })))

}

cli() 

