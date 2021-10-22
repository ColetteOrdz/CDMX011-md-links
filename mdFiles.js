const fs = require('fs')
const path = require('path')
const { isAbsolute, resolve, extname } = require('path')

function findFiles (directory) {
    const arrayFiles = [];
    const absPath = (isAbsolute(directory) ? directory : resolve(directory)); 
    
    if (path.extname(absPath) === '.md' || path.extname(absPath) === '.markdown' || path.extname(absPath) === '.mdown' ) {
        arrayFiles.push(absPath)
        
    } else {
        const findDir = (absPath) => {            
            const files = fs.readdirSync(absPath, {withFileTypes: true});                            
            files.forEach(file => {                  
                const status = fs.statSync(absPath);

                if(file.isDirectory()){
                    findDir(`${absPath}/${file.name}`)
                } else {
                    if(path.extname(file.name)=== '.md' || path.extname(file.name) === '.markdown' || path.extname(file.name) === '.mdown' ){
                    arrayFiles.push(`${absPath}/${file.name}`)
                    }
                }                  
            });
        }
        findDir(absPath)
    }
    return arrayFiles
}

exports.findFiles = findFiles 