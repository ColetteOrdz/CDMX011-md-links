const fs = require('fs');
const path = require('path');

const filesFn = require('./mdFiles.js')
const linksFn = require('./findLinks.js')
const validateFn = require('./linksValid.js')

const route = process.argv[2];

function mdLinks(route){
  const mdFiles = filesFn.findFiles(route); 
  const links = linksFn.getLinks(mdFiles).then((result) => {
  validateFn.validate(result[0]).then((data) => {console.log(data)})
  
});
  
}

mdLinks(route)



//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'