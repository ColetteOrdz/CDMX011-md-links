const filesFn = require('./mdFiles.js')
const linksFn = require('./findLinks.js')
const validateFn = require('./linksValid.js')
const statisticsFn =  require('./linksStatistics')

const route = process.argv[2];
//const options = process.argv[3];

async function mdLinks(route, option, option2){
  
  const mdFiles = filesFn.findFiles(route); 
  const links = await Promise.all([linksFn.getLinks(mdFiles).then((result) => {
    all_results = result.flat(2);
    return all_results })]);
 
  const validate = await Promise.all([validateFn.validate(links[0]).then((validates) => { return validates })]);
  const stats = await Promise.all([statisticsFn.statistics(validate[0]).then((stat) => { return stat })]);
  const validStats = await Promise.all([validateFn.validate(links[0]).then((validates) => { return validates }), statisticsFn.statistics(validate[0]).then((stat) => { return stat })])
   

    if(option === undefined && option2 === undefined){
      const urls = await Promise.all([linksFn.getLinks(mdFiles).then((result) => {
        all_results = result.flat(2);
        return all_results })]);
      return urls[0];

    } else if(option === '--validate' && option2 === undefined){
      return validate[0]
      
    }else if(option === '--stats' && option2 === undefined){
      return stats[0]
      
    }else if(option === '--validate' && option2 === '--stats'){
      return validStats
      
    }else {
      console.log("Petition went wrong")
    }
}

mdLinks(route, process.argv[3], process.argv[4])
  .then((result)=>{console.log(result);})
  .catch((err)=>{console.log(err);})


//node mdLinks 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links'
//node mdLinks C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md --validate --stats