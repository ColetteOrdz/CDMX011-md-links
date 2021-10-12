const fs = require('fs');
const path = require('path');
const functionFiles = require('./findFiles.js')
//const functionLinks = require('./findLinks.js')

const route = process.argv[2];

const mdLinks = (route) => {
  const files = functionFiles.findFiles(route);
  //const links = functionLinks.findLinks(files);

}


//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'