#!/usr/bin/env node

const chalk = require('chalk')
const figlet = require('figlet')
const mdLinksFn = require('./mdLinks.js')
const route = process.argv[2];
const helpMenu = chalk.magentaBright(`
  The format of the command is:
  --> mdlinks + [path] + --option <--

  The valid options are:
  --> --validate
  --> --stats
  --> --validate --stats
  `); 

const cli = () => {
    console.log(chalk.cyanBright(figlet.textSync('MD Links', {
        font: 'small',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
    })))

    if(route === undefined){
        console.log(helpMenu)
    }
    
    mdLinksFn.mdLinks(route, process.argv[3], process.argv[4])
        .then((result)=>{
        console.log(result);
        console.log(chalk.cyanBright('Your files have been analyzed.'));
        })
        .catch((err)=>{
        console.log(chalk.redBright('Something went wrong with the petition.'));
        console.log(err);
        })

}

cli() 

