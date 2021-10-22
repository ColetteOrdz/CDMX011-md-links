function statistics(arrayLinks){
    return new Promise((resolve, reject) =>{
        const allLinks = [];
        const online = [];
        const broken = [];
        let  linksResult = [];

        arrayLinks.forEach((link) => {
            allLinks.push(link.href);
        
            if(link.message === 'OK'){
                online.push(link);
            } else if(link.message === 'FAIL'){
                broken.push(link);
            }
        })
        const uniqueArray = new Set(allLinks); //el método set crea un nuevo array con valores únicos
        const unique = [...uniqueArray];

        linksResult = {
            Total: allLinks.length,
            Online: online.length,
            Broken: broken.length,
            Unique: unique.length,
        };
        resolve(linksResult);
    });
}

exports.statistics = statistics
