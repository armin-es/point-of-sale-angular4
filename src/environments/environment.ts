import * as firebase from 'firebase/app';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDlGfoPe6kh16NiZhWeNYi_3jZpuQFxkX4",
    authDomain: "cafe-pos-angular4.firebaseapp.com",
    databaseURL: "https://cafe-pos-angular4.firebaseio.com",
    projectId: "cafe-pos-angular4",
    storageBucket: "cafe-pos-angular4.appspot.com",
    messagingSenderId: "576036822394"
  }
};
