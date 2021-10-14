const fs = require('fs')
//const FileType = require('file-type')
const {isDirectory} = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')


function findFiles (directory) {
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); //Convierte la ruta en absoluta
    
    let arrayFiles = [];
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        console.log(absPath) //Ruta de cada archivo md
        arrayFiles.push(absPath)
        return arrayFiles
    } else {
        function readDir (dirPath) {
           const files = fs.readdirSync(dirPath);
           //console.log(files) //todos los archivos dentro del directorio
            files.map(file=> {
                if(path.extname(file) === '.md'){
                    const mdPath = (`${dirPath}`+'/'+`${file}`);
                    console.log(mdPath); //Ruta de archivos md dentro del directorio
                    arrayFiles.push(mdPath)
                } else {
                    if(file.split('').indexOf('.') === -1){
                        let otherPath = `${dirPath}` + '/'  + `${file}`;
                        findFiles(otherPath);
                    }
                }
                    
            })
           
           
           
           /*'utf8', (error, lista) => {
               if(error) throw error
               return lista
           } );
            console.log(files) //arroja el contenido de la carpeta general y todas las demás anidadas
            for (const file of files) {
                if(path.extname(file) === '.md' || path.extname(file) === '.markdown' || path.extname(file) === '.mdown' ){
                    const mdPath = (`${dirPath}`+' '+`${file}`);
                    console.log(mdPath);
                    return mdPath
                } else {
                    if(file.split('').indexOf('.') === -1){
                        let otherPath = absPath + '/'  + `${file}`;
                        findFiles(otherPath);
                    }
                
                }
            }*/

        }
        return readDir(absPath)
    }
    //console.log(arrayFiles)
    return arrayFiles
}

exports.findFiles = findFiles 