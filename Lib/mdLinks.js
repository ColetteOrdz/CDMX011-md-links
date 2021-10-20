const filesFn = require('./mdFiles.js')
const linksFn = require('./findLinks.js')
const validateFn = require('./linksValid.js')
const statisticsFn =  require('./linksStatistics')

const route = process.argv[2];

function mdLinks(route, options){
  const mdFiles = filesFn.findFiles(route); 
  const links = linksFn.getLinks(mdFiles).then((result) => {
    all_results = result.flat(2); //me muestre todos los links en un solo array
    validateFn.validate(all_results).then((data) => {
      console.log(data);
      statisticsFn.statistics(data).then(stats => {
        console.log(stats);
      });
    });
  });

  
}

mdLinks(route)



//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'