import { readPage, renderPage } from './templateEngine.js';

const homepage = readPage('./public/pages/homepage/homepage.html');

export const homepagePage = renderPage(homepage, { tabTitle: 'Home' });

const javascriptTopics = readPage('./public/pages/topics/topics.html');

export const javascriptTopicsPage = renderPage(javascriptTopics, { tabTitle: 'Javascript Topics' });

const jsbasics = readPage('./public/pages/jsbasics/jsbasics.html');

export const jsBasicsPage = renderPage(jsbasics, { tabTitle: 'Javascript/Node Basics' });

const declarations = readPage('./public/pages/declarations/declarations.html');

export const declarationsPage = renderPage(declarations, { tabTitle: 'Delcarations' });

const objects = readPage('./public/pages/objects/objects.html');

export const objectsPage = renderPage(objects, { tabTitle: 'Javascript Objects' });

const arrays = readPage('./public/pages/arrays/arrays.html');

export const arraysPage = renderPage(arrays, {
  tabTitle: 'Arrays',
  cssLinks: '<link rel="stylesheet" href="/pages/arrays/arrays.css">',
  scriptLinks: '<script src="/pages/arrays/arrays.js"></script>',
});

const functions = readPage('./public/pages/functions/functions.html');

export const functionsPage = renderPage(functions, { tabTitle: 'Javascript Functions' });

const gitBasics = readPage('./public/pages/gitBasics/gitBasics.html');

export const gitBasicsPage = renderPage(gitBasics, { tabTitle: 'Git Terminal' });

const firstExpressServer = readPage('./public/pages/firstExpressServer/firstExpressServer.html');

export const firstExpressServerPage = renderPage(
  firstExpressServer,
  {
    tabTitle: 'My First Express Server',
    scriptLinks: '<script src="/pages/firstExpressServer/firstExpressServer.js"></script>',
  },
);

const firstRestApi = readPage('./public/pages/firstRestApi/firstRestApi.html');

export const firstRestApiPage = renderPage(firstRestApi, { tabTitle: 'My First Rest Api' });

const apiExample = readPage('./public/pages/apiExample/apiExample.html');

export const apiExamplePage = renderPage(apiExample, { tabTitle: 'Full REST API example' });

const frontendJs = readPage('./public/pages/frontendJs/frontendJs.html');

export const frontendJsPage = renderPage(frontendJs, {
  tabTitle: 'Frontend JavaScript',
  scriptLinks: '<script src="/pages/frontendJs/frontendJs.js"></script>',
  cssLinks: '<link rel="stylesheet" href="/pages/frontendJs/frontendJs.css">',
});

const signIn = readPage('./public/pages/signIn/signIn.html');

export const signInPage = renderPage(signIn, {
  tabTitle: 'Frontend JavaScript',
  cssLinks: '<link rel="stylesheet" href="/pages/signIn/signIn.css">',
  scriptLinks: '<script src="/pages/signIn/signIn.js"></script>',
});

const privatePage = readPage('./private/private.html');

export const privatePagePage = renderPage(privatePage, { tabTitle: 'Members Only' });

const firstHTMLServer = readPage('./public/pages/firstHTMLServer/firstHTMLServer.html');

export const firstHTMLServerPage = renderPage(firstHTMLServer, { tabTitle: 'My First HTML Server' });
