// Leer un archivo//

const fs = require('fs');
const path = require('path');

const file = process.argv[2];

fs.readFile(file, (err,data) => {
    if (err)  throw err ;
    
    const content = data.toString()
    //console.log(content);
});

// Obtener su extención //

const extencion = path.extname(file);
//console.log(extencion);

const absPath = path.resolve(ruta); //Convierte la ruta introducida a abs


// Leer directorio //

const folder = path.resolve(process.argv[2]);


fs.readdir(folder, (err, files) => {
    if (err) throw err ;
    console.log(files);

    files.forEach((file) => {
        if (path.extname(file) === '.md'  && path.extname(file) === '.markdown') {
            console.log(file);
            return file
        } 
    })
})










//node pruebas.js 'C:\Users\Colette\Desktop\Labo\CDMX011-md-links'