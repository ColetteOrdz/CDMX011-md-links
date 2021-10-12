const fs = require('fs')
const { isAbsolute, resolve, extname } = require('path')
const path = require('path')
//const route = process.argv[2];




function findFiles (directory) {
    
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convertir la ruta en absoluta
    //console.log('Esta es la ruta enviada ' + directory);
    return fs.readdir(absPath, 'utf8', (error, list) => {
    
        if (error) {
            return 'Something is wrong. ' + error;
        } 
        const arrayFiles = [];
            //console.log(list) //Todo el contenido de las carpetas
            list.map(file => {
                if (path.extname(file) === '.md' || path.extname(file) === '.markdown' || path.extname(file) === '.mdown' ) {
                    let mdPath = absPath + '\\'  + `${file}`;
                    
                    //console.log([mdPath]) //Ruta de cada archivo md
                    arrayFiles.push(mdPath);
                } else
                
                if (file.split('').indexOf('.') === -1) {
                    let dirPath = absPath + '\\'  + `${file}` 
                    //console.log(dirPath);
                    return findFiles(dirPath)
                }
            }) 
            console.log(arrayFiles);
            return arrayFiles
         
    
    })
};

//findFiles(route)

exports.findFiles = findFiles 