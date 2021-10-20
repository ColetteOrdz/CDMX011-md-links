// const mockLinks = [
//     {
//     file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md', 
//     href: 'https://nodejs.org/',
//     text:'Node.js',
//     message: 'OK',
//     status: 200
//     },
//     {
//         file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md', 
//         href: 'https://nodejs.org/',
//         text:'Node.js',
//         message: 'OK',
//         status: 200
//     },
//     {
//     file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md',
//     href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
//     text: 'Funciones — bloques de código reutilizables - MDN',
//     message: 'FAIL',
//     status: 404 
//     },
//     {
//         file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/README.md',
//         href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
//         text: 'Funciones — bloques de código reutilizables - MDN',
//         message: 'FAIL',
//         status: 404 
//     }
// ]

function stadistics(arrayLinks){
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

//stadistics(mockLinks).then(result => {console.log(result)})
exports.stadistics = stadistics


