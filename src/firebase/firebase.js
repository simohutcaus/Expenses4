import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8GfQtIzq7HROjVpCWeKzLkYjZ-qqpmh4",
    authDomain: "expensify-c97a4.firebaseapp.com",
    databaseURL: "https://expensify-c97a4.firebaseio.com",
    projectId: "expensify-c97a4",
    storageBucket: "expensify-c97a4.appspot.com",
    messagingSenderId: "611921736865"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({

        name: 'Simon H',
        age: 35,
        isSingle: false,
        location: {
            city: 'Sydney',
            country: 'AU'
        }

  });

  //database.ref().set('this is data');

  database.ref('age').set(27);
  database.ref('location/city').set('Brisbane');
  database.ref('attributes/height').set('180cm');
  database.ref('attributes/weight').set(80);