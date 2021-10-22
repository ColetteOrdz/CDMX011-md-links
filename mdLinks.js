const filesFn = require('./mdFiles.js')
const linksFn = require('./findLinks.js')
const validateFn = require('./linksValid.js')
const statisticsFn =  require('./linksStatistics')

const route = process.argv[2];
const options = process.argv[3];

function mdLinks(route, options){
  //console.log(options)
  const mdFiles = filesFn.findFiles(route); 
  const links = linksFn.getLinks(mdFiles).then((result) => {
    all_results = result.flat(2)
    console.log(all_results);
    //console.log(all_results); //me da solo los links
    // validateFn.validate(all_results).then(data => {
    //   console.log(data) //me da los links con su status
    //   statisticsFn.statistics(data).then(stats => {
    //     console.log(stats) //me da las estadísticas
    //   });
    // });
  });
  


  new Promise((resolve, reject) => {
    if(options.validate === false && options.stats === false){
      resolve(links);
    } else if(options.validate === true && options.stats === false){
      resolve(linksFn.getLinks(mdFiles).then((result) => {
        all_results = result.flat(2)
        validateFn.validate(all_results).then(data => {console.log(data)})
      })) //???
      //const validOp = validateFn.validate(links); //o debería dejarlo como all_results?
      //resolve(validOp);
    } else if(options.validate === false && options.stats === true){
      resolve(linksFn.getLinks(mdFiles).then((result) => {
        all_results = result.flat(2);
        validateFn.validate(all_results).then(data => {
          statisticsFn.statistics(data).then(stats => {
            console.log(stats) //me da las estadísticas
          });
        });
      }))
      //resolve con validate(links)
    } else if(options.validate === true && options.stats === true){
      resolve(linksFn.getLinks(mdFiles).then((result) => {
        all_results = result.flat(2)
        validateFn.validate(all_results).then(data => {
          console.log(data);
          statisticsFn.statistics(data).then(stats => {
            console.log(stats) //me da las estadísticas
          });
        });
      }))
      //Se ejecuta validate(links), en el then(stats con lo que arroje validate)
    };
  });

}

mdLinks(route, options)

//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md', '{validate: true, stats: false}'