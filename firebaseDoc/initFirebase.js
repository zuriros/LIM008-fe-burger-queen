import { initRouter } from '../src/router_func.js';
// Initialize Firebase
const initFirebase = () => {
  const config = {
    apiKey: 'AIzaSyAP8qgYLelKLSceXYf7_6JnRqI1xhPaomo',
    authDomain: 'burger-queen-c806e.firebaseapp.com',
    databaseURL: 'https://burger-queen-c806e.firebaseio.com',
    projectId: 'burger-queen-c806e',
    storageBucket: 'burger-queen-c806e.appspot.com',
    messagingSenderId: '156052892794'
  };
  firebase.initializeApp(config);
  initRouter();
};
window.onload = initFirebase;