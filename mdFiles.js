const fs = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')
const route = process.argv[2];

function findFiles (directory) {
    const arrayFiles = [];
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convierte la ruta en absoluta
    
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        //console.log([absPath]) //Ruta de cada archivo md
        arrayFiles.push(absPath)
        
    } else {
        const findDir = (absPath) => {            
            const files = fs.readdirSync(absPath, {withFileTypes: true});
            //console.log(dirPath) //ruta del directorio introducido                   
                files.forEach(file => {
                   //console.log(file)//Listado de files dentro del directorio
                   const status = fs.statSync(absPath);

                   if(file.isDirectory()){
                       findDir(`${absPath}/${file.name}`)
                   } else {
                       if(path.extname(file.name)=== '.md' || path.extname(file.name) === '.markdown' || path.extname(file.name) === '.mdown' ){
                        arrayFiles.push(`${absPath}/${file.name}`)
                       }
                   }
                  
                })
        }
        findDir(absPath)
    }
    console.log(arrayFiles)
    return arrayFiles
}

findFiles(route)  

//exports.findFiles = findFiles 