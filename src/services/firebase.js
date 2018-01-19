import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD_Suh23sX4rIScTOU5EWPDha4EfRb9uK4',
  authDomain: 'head2head-1afb0.firebaseapp.com',
  databaseURL: 'https://head2head-1afb0.firebaseio.com',
  projectId: 'head2head-1afb0',
  storageBucket: 'head2head-1afb0.appspot.com',
  messagingSenderId: '260904282492',
};

firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
