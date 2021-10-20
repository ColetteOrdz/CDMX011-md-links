const axios = require('axios')

async function validate(arrayLinks){
     
    return await Promise.all(arrayLinks.map(async (link) => { 
        
        return await axios.get(link.href) 
        .then(response => {
            link["status"] = response.status;
            link["message"] = (response.status == 200) ? 'OK' : 'FAIL';
            //console.log(link.status)
            return link
            
        })
        .catch(error => {
            link["status"] = 404;
            link["message"] = 'FAIL';
            return link
            
        });
        
    }));

}

exports.validate = validate
