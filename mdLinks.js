const filesFn = require('./Lib/mdFiles.js')
const linksFn = require('./Lib/findLinks.js')
const validateFn = require('./Lib/linksValid.js')
const statisticsFn =  require('./Lib/linksStatistics')

const route = process.argv[2];
const options = process.argv[3];

function mdLinks(route, options){
  console.log(options)
  const mdFiles = filesFn.findFiles(route); 
  const links = linksFn.getLinks(mdFiles).then((result) => {
    all_results = result.flat(2);
  }) //me muestre todos los links en un solo array


    // validateFn.validate(all_results).then((data) => {
    //   console.log(data);
    //   statisticsFn.statistics(data).then(stats => {
    //     console.log(stats);
    //   });
  
 

  new Promise((resolve, reject) => {
    if(options.validate === false && options.stats === false){
      resolve(links);
    } else if(options.validate === true && options.stats === false){
      const validOp = validateFn.validate(links);
      console.log('validateFn') //o debería dejarlo como all_results?
      resolve(validOp);
    } else if(options.validate === false && options.stats === true){
      //debo mover la parte de las líneas 14 y 15?
//resolve con validate(links)
    } else if(options.validate === true && options.stats === true){
      //debo mover toda la parte desde la 12 a la 15?
//Se ejecuta validate(links), en el then(stats con lo que arroje validate)
  };
  })
}

mdLinks(route, options)



//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md', '{validate: true, stats: false}'