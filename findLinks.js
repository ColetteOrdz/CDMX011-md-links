const util = require('util')
const marked = require("marked")
const fs = require("fs")
const readFile = util.promisify(fs.readFile)//Sirve para convertir a readFile en una promesas

 async function getLinks (mdfile) {   
    return await Promise.all(mdfile.map(async (file) => { 
    const arrayLinks = [];
    
    const list = await readFile(file);
    const render = new marked.Renderer();
        render.link = (href, title, text) => {
            if (href.startsWith("#") === false) {
                arrayLinks.push({
                    href: href,
                    text: text.substr(0,49),
                    file: file,
                });
            }
        };
    marked(list.toString(), { renderer: render });
    return arrayLinks
    }));
};

exports.getLinks = getLinks
 
 
 