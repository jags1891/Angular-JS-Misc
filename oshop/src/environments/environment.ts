// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDGzuzAVAGTIFKc1ljpmhXjhtWPGRRYdOM',
    authDomain: 'oshop-e8670.firebaseapp.com',
    databaseURL: 'https://oshop-e8670.firebaseio.com',
    projectId: 'oshop-e8670',
    storageBucket: '',
    messagingSenderId: '906494491444'
  }

};

/**
 * install firebase:
 * npm i  --save firebase@4.2.0 angularfire2@4.0.0-rc.1
 * sudo npm i g firebase-tools (For Deployment)
 * firebase login
 * firebase init
 */
