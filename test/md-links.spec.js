const axios = jest.fn()
//jest.mock('axios');

const mdLinksFn = require('../mdlinks.js')
const filesFn = require('../mdFiles.js')
const linksFn = require('../findLinks.js')
const validateFn = require('../linksValid.js')
const statisticsFn =  require('../linksStatistics.js')
const { showMdFiles, showMdPath, showLinksA3, showLinks, 
        showBrokenLink, showValidateLinks, showBrokenStatus, showStats, 
        mdShowLinks, mdShowValid, mdShowStats, mdShowAll } = require('./mockResults.js')

const route = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md'
const routeDir = 'C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2'


describe('Corroborate if the path exists and obtain the mdfiles path', () => {

  it('Should be a function', () => {
    expect(typeof filesFn.findFiles).toBe('function');
  });
  it('Should return the path with a mdfile', () => {
    expect(filesFn.findFiles(route)).toStrictEqual(['C:/Users/Colette/Desktop/Labo/CDMX011-md-links/nivel1/nivel2/archivo3.md']);
  });
  it('Should return the md files path with a directory', () => {
    expect(filesFn.findFiles(routeDir)).toStrictEqual(showMdFiles);
  });
});

describe('Corroborate if the are links in the mdfile', () => {

  it('Should be a function', () => {
    expect(typeof linksFn.getLinks).toBe('function');
  });
  it('Should return the links in the mdFile', async () => {
    const resolve = await linksFn.getLinks(showMdPath)
    expect(resolve[0]).toStrictEqual(showLinksA3)
  });
});

describe('Validate the links in the mdfile', () => {

  it('Should be a function', () => {
    expect(typeof validateFn.validate).toBe('function');
  });
  it('Should return the links status of the mdFile (with internet conection)', async () => {
    axios.mockResolvedValue(showLinks);
    const resolve = await validateFn.validate(showLinks)
    expect(resolve).toStrictEqual(showValidateLinks)
  });
  it('Should return the FAIL status of the broken link (with internet conection)', async () => {
    axios.mockResolvedValue(showBrokenLink);
    const resolve = await validateFn.validate(showBrokenLink)
    expect(resolve).toStrictEqual(showBrokenStatus)
  });
  //Hacer test con axios mockeado//
});

describe('Show statistics of links in md file', () => {

  it('Should be a function', () => {
    expect(typeof statisticsFn.statistics).toBe('function');
  });
  it('Should return the stats of the links', async () => {
    const resolve = await statisticsFn.statistics(showValidateLinks)
    expect(resolve).toStrictEqual(showStats)
  });
});


describe('Mdlinks function with path and options', () => {

  it('Should be a function', () => {
    expect(typeof mdLinksFn.mdLinks).toBe('function');
  });
  it('Should return only the links in the path', async () => {
    await mdLinksFn.mdLinks('./nivel1/nivel2/archivo3.md').then((resolve) => {
      expect(resolve).toStrictEqual(mdShowLinks)
    });
  });
  it('Should return the validation of the links', async () => {
    await mdLinksFn.mdLinks('./nivel1/nivel2/archivo3.md', '--validate').then((resolve) => {
      expect(resolve).toStrictEqual(mdShowValid)
    });
  });
  it('Should return the stats of the links', async () => {
    await mdLinksFn.mdLinks('./nivel1/nivel2/archivo3.md', '--stats').then((resolve) => {
      expect(resolve).toStrictEqual(mdShowStats)
    });
  });
  it('Should return the stats of the links', async () => {
    await mdLinksFn.mdLinks('./nivel1/nivel2/archivo3.md', '--validate', '--stats').then((resolve) => {
      expect(resolve).toStrictEqual(mdShowAll)
    });
  });
})