const axios = require('axios')

async function validate(arrayLinks){
    //const array = {};  
    return await Promise.all(arrayLinks.map(async (link) => { 
        
    return await axios.get(link.href) 
        .then(response => {
            link.status = response.status;
            link.message = (link.status == 200) ? 'OK' : 'FAIL';

           // ----- CORREGIR EL RETURN, DEBE SER UN OBJETO ----- // 
            return `${link.file} ${link.href} ${link.message} ${link.status} ${link.text}`
            
        })
        .catch(error => {
            link.status = 404;
            link.message = 'FAIL';
            
           // ----- CORREGIR EL RETURN, DEBE SER UN OBJETO ----- // 
            return `${link.file} ${link.href} ${link.message} ${link.status} ${link.text}`
            
        });
        
    }));
     
}
//validate(url).then((result) => {console.log(result)})
exports.validate = validate
