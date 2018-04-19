// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBmYGfO4dvdlCOdX62gtgQMTVwwqtxevn4',
    authDomain: 'game-batchelb.firebaseapp.com',
    databaseURL: 'https://game-batchelb.firebaseio.com/',
    projectId: 'game-batchelb',
    storageBucket: 'game-batchelb.appspot.com"',
    messagingSenderId: '33022761481'
  }
};