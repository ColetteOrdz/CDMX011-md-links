const fs = require('fs');
const path = require('path');
const functionFiles = require('./findFiles.js')
const functionLinks = require('./findLinks.js')

const route = process.argv[2];

  const files = functionFiles.findFiles(route) 
  // const links = functionLinks.findLinks(files)
  // console.log(links)




//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'