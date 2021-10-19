const axios = require('axios')
const url = [
    {
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
        text: 'Arreglos',
        mdfile: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'
      },
      {
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
        text: 'Arreglos',
        mdfile: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md'
      }

]

function validate(arrayLinks){
    
   
    return Promise.all(arrayLinks.map(async (link) => { //recorrer el array de links, pero me aparece error que no es una función :'U
        //console.log(link)
    return await axios.get(link.href) //cada link con su key href
        .then(response => {
            link.status = response.status;
            link.statusText = (link.status == 200) ? 'OK' : 'FAIL';
            //console.log(`${link.mdfile} ${link.href} ${link.statusText} ${link.status} ${link.text}`);
            return `${link.mdfile} ${link.href} ${link.statusText} ${link.status} ${link.text}`
            
        })
        .catch(error => {
            link.status = 404;
            link.statusText = 'FAIL';
            console.log(error);
        });

    }));
    
    //console.log(linksData)
    linksData.then((result)=> console.log(result))
    
}

validate(url)

//exports.validate = validate
