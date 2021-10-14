const fs = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')
const route = process.argv[2];

function findFiles (directory) {
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convierte la ruta en absoluta
    const arrayFiles = [];
    
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        console.log([absPath]) //Ruta de cada archivo md
        arrayFiles.push(absPath)
        return arrayFiles
    } else {
        function findDir (dirPath) {
            fs.readdir(dirPath, 'utf8', (error, list) => {
                if (error) {
                    return 'Something is wrong. ' + error;
                } else {
                    //console.log(list) //Arroja un array con  todo el contenido de la carpeta
                    list.filter((file) => {
                        const arrayFiles = [];
                        if (path.extname(file) === '.md' || path.extname(file) === '.markdown' || path.extname(file) === '.mdown' ){
                            //console.log(file) //Retorna el nombre del string de los archivos md
                            let mdPath = dirPath + '/'  + `${file}`;
                            console.log(`${mdPath}`) //Retorna la ruta de los archivos md y el file
                            arrayFiles.push(absPath)
                            return arrayFiles

                        } else if (file.split('').indexOf('.') === -1) {
                            let dirPath = absPath + '/'  + `${file}` 
                            //console.log(dirPath);
                            return findFiles(dirPath)
                            } 
                        })

                    }
                    
                })
                
            }
            return findDir(absPath)
        }
    //console.log(arrayFiles)
    return arrayFiles
}
findFiles(route)  
//exports.findFiles = findFiles 