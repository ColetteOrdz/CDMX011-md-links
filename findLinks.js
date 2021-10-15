const fs = require('fs')
const path = require('path')
const markdownLinkExtractor = require('markdown-link-extractor');
const arrayFiles = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md';

function findLinks (arrayFiles) {
   
    const markdown = fs.readFileSync(arrayFiles, {encoding: 'utf8'});
    const arrayLinks = [] ;
    const getLinks = markdownLinkExtractor(markdown, false);
    getLinks.forEach((href, title, text) =>{
        if(href.startsWith('#') === false){
            arrayLinks.push({
                href: href,
                title: title.toString().slice(0,50),
                arrayFiles: arrayFiles,
            });
        }
    }); 
        
    console.log(arrayLinks)  

   //return arrayLinks
}
findLinks(arrayFiles)
//module.exports = findLinks 