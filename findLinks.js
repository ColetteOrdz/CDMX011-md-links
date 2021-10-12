const fs = require('fs')
const path = require('path')
const marked = require('marked')
const arrayFiles = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'

function findLinks (arrayFiles) {
    let links = [];
    const mdFile = arrayFiles;
    mdFile.map((filePath) => { //???  por qué no es una función?????
        const fileData = fs.readFile(miniruta, 'utf8', (error, data) => {
            if (error) {
                return 'Something is wrong with the file. ' + error;
            }
            //console.log(data);
            return data;
        });
        const fileName = path.basename(filePath);
        const newLinks = [];
        const renderer = new marked.Renderer();

        renderer.link = (href, title, text) => {
            console.log(href)
            console.log(title)
            console.log(text)
            
        }
    })
   
}
findLinks(arrayFiles)
module.exports = findLinks 