const marked = require("marked");
const fs = require("fs");
const arrayFiles = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'

function getLinks (mdfile) {
    const arraylinks = [];
    const list = fs.readFileSync(mdfile).toString();
    const render = new marked.Renderer();
        render.link = (href, title, text) => {
            if (href.startsWith("#") === false) {
                arraylinks.push({
                    href: href,
                    text: text,
                    mdfile: mdfile,
                });
            }
        };
  marked(list, { renderer: render });
  console.log(arraylinks);
  return arraylinks
};

getLinks(arrayFiles);

//exports.getLinks = getLinks