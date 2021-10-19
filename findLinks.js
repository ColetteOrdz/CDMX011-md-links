const util = require('util');
const marked = require("marked");
//const html = marked('# Marked in Node.js\n\nRendered by **marked**.');
const fs = require("fs");
//const arrayFiles = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'
const readFile = util.promisify(fs.readFile);

 async function getLinks (mdfile) {
    return await Promise.all(mdfile.map(async (file) => { 
    
    const arrayLinks = [];
    
    const list = await readFile(file);
    //console.log(list)
    const render = new marked.Renderer();
        render.link = (href, title, text) => {
            if (href.startsWith("#") === false) {
                arrayLinks.push({
                    href: href,
                    text: text,
                    file: file,
                });
            }
        };
    marked(list.toString(), { renderer: render });
    //console.log(arrayLinks);
    return arrayLinks
    }));
};

//getLinks(arrayFiles).then((result) => console.log(result));

exports.getLinks = getLinks