const axios = require('axios')

async function validate(arrayLinks){
    const arraylinks = {};  
    return await Promise.all(arrayLinks.map(async (link) => { 
        
    return await axios.get(link.href) 
        .then(response => {
            link.status = response.status;
            link.message = (link.status == 200) ? 'OK' : 'FAIL';
            
            return `${link.file} ${link.href} ${link.message} ${link.status} ${link.text}`
            /*arrayLinks.push({
                message: link.message,
                status: link.status
            })
            */
        })
        .catch(error => {
            link.status = 404;
            link.message = 'FAIL';
           
            return `${link.file} ${link.href} ${link.message} ${link.status} ${link.text}`
            /*arrayLinks.push({
                message: link.message,
                status: link.status
            })
            */
        });
        
    }));
     
}
//validate(url).then((result) => {console.log(result)})
exports.validate = validate
