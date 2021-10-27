const showMdFiles = [
    'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/ARCHIVO.markdown',
    'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
    'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo2.md',
    'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/nivel3/nivel4/archivo4.md'
];

const showMdPath = [
  'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
];

const showLinks = [
    {
        href: 'https://nodejs.org/api/path.html',
        text: 'Path',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'Linea de comando CLI',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
      },
      {
        href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
        text: '¿Qué es Node.js y para qué sirve? - drauta.com',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
      }
];

const showValidateLinks = [
    {
        href: 'https://nodejs.org/api/path.html',
        text: 'Path',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
        status: 200,
        message: 'OK'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'Linea de comando CLI',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
        status: 200,
        message: 'OK'
      },
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
        status: 200,
        message: 'OK'
      },
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
        status: 200,
        message: 'OK'
      },
      {
        href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
        text: '¿Qué es Node.js y para qué sirve? - drauta.com',
        file: 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md',
        status: 404,
        message: 'FAIL'
      }
];

const showStats = {Total: 5, Online: 4, Broken: 1, Unique: 4  };

module.exports = {
    showMdFiles, showMdPath, showLinks, showValidateLinks, showStats
}