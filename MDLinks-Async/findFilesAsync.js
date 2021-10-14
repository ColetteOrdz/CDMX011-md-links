const fs = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')
//const route = process.argv[2];
let arrayFiles = [];

async function findFiles (directory) {
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convierte la ruta en absoluta
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        //console.log([absPath]) //Ruta de cada archivo md
        arrayFiles.push(absPath)
        //return arrayFiles
        //console.log(arrayFiles);
    } else {
         //let arrayFiles = [];
         //arrayFiles.push("+")
        async function findDir (dirPath) {
                     
            await fs.readdir(dirPath, 'utf8', (error, list) => {
                if (error) {
                    return 'Something is wrong. ' + error;
                } else {
                    //console.log(list) //Arroja un array con  todo el contenido de la carpeta
                    list.filter((file) => {
                        if (path.extname(file) === '.md' || path.extname(file) === '.markdown' || path.extname(file) === '.mdown' ){
                            //console.log(file) //Retorna el nombre del string de los archivos md
                            let mdPath = dirPath + '/'  + `${file}`;
                            console.log(mdPath) //Retorna la ruta de todos los archivos md
                           arrayFiles.push(mdPath)
                           //callback(null, mdPath)
                            return mdPath

                        } 
                        if (file.split('').indexOf('.') === -1) {
                            let dirPath = absPath + '/'  + `${file}` 
                            //console.log(dirPath);
                            arrayFiles.push("*")
                            findFiles(dirPath)
                            } 
                        })

                    }
                    
                })
                //console.log(arrayFiles)
              //return 'holis'
        }
        // await findDir(absPath)
        // .then( files => {
        //     arrayFiles.push(files)
        // })
        //console.log(arrayFiles)
        
    }
    return arrayFiles 
    //console.log(arrayFiles)
}
    
exports.findFiles = findFiles 