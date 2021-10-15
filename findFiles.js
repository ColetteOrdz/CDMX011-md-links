const fs = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')
//const route = process.argv[2];

function findFiles (directory) {
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convierte la ruta en absoluta
    const arrayFiles = [];
    
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        //console.log([absPath]) //Ruta de cada archivo md
        arrayFiles.push(absPath)
        
    } else {
        function findDir (dirPath) {
            const files = fs.readdirSync(dirPath);
            //console.log(dirPath) //ruta del directorio introducido

            if(files.length > 0){
                files.forEach((file) => {
                   //console.log(file)//Listado de files dentro del directorio
                   if(path.extname(file) === '.md' || path.extname(file) === '.markdown' || path.extname(file) === '.mdown' ){
                    //console.log(file) //Retorna el nombre de los archivos md (string)
                    let mdPath = dirPath + '/'  + `${file}`;
                    arrayFiles.push(mdPath) //Retorna la ruta de los archivos md en el array
                   }
                   else if (file.split('').indexOf('.') === -1){
                        let otherDir = dirPath + '/'  + `${file}` 
                       arrayFiles.push(...findDir(otherDir))
                   }
                })
                
            }
            console.log(arrayFiles)
            
        }
        return findDir(absPath)
    }
    //console.log(arrayFiles)
    return arrayFiles
}
//findFiles(route)  
exports.findFiles = findFiles 