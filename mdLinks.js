const fs = require('fs');
const path = require('path');

const filesFn = require('./mdFiles.js')
const linksFn = require('./findLinks.js')
const validateFn = require('./linksValid.js')

//const route = process.argv[2];

  const mdfiles = filesFn.findFiles(route) 
  // const links = linksFn.getLinks(mdfiles)
  // const validate = validateFn.validate(links)
  // console.log();




//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'