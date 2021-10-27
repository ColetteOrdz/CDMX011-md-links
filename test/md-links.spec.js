//const mdLinks = require('../');
const filesFn = require('../mdFiles.js')
const linksFn = require('../findLinks.js')
const validateFn = require('../linksValid.js')
const statisticsFn =  require('../linksStatistics.js')
const {showMdFiles, showMdPath, showLinks, showValidateLinks, showStats} = require('./mockResults.js')
const route = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'

describe('Corroborate if the path exists', () => {

  it('Should be a funtion', () => {
    expect(typeof filesFn.findFiles).toBe('function');
  });
  it('Should return the mdFiles', () => {
    expect(filesFn.findFiles(route)).toStrictEqual(['C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md']);
  });
});

describe('Corroborate if the are links in the mdfile', () => {

  it('Should be a funtion', () => {
    expect(typeof linksFn.getLinks).toBe('function');
  });
  it('Should return the links in the mdFile', () => {
    expect(linksFn.getLinks(showMdPath)).toBe(showLinks);
  });
});

describe('Validate the links in the mdfile', () => {

  it('Should be a funtion', () => {
    expect(typeof validateFn.validate).toBe('function');
  });
  it('Should return the links status in the mdFile', () => {
    //mockear axios :)
  });
});
