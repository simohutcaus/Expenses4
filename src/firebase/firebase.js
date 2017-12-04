import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB0MVdk3N6xgDb65-BSmfQwXIYR24YaFd8",
    authDomain: "expenses4-8b624.firebaseapp.com",
    databaseURL: "https://expenses4-8b624.firebaseio.com",
    projectId: "expenses4-8b624",
    storageBucket: "",
    messagingSenderId: "720555727417"
  };

  firebase.initializeApp(config);

 
  const database = firebase.database();


 database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


database.ref('expenses').on('child_changed', (snapshot) => {

  console.log(snapshot.key, snapshot.val());

});


database.ref('expenses').on('child_added', (snapshot) => {

  console.log(snapshot.key, snapshot.val());

});



  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  //   console.log(snapshot.val());
  //   snapshot.forEach((childSnapshot) => {

  //     expenses.push({

  //       id: childSnapshot.key,
  //       ...childSnapshot.val()

        

  //     });

  //   });

  //   console.log(expenses);
  // });


  // database.ref('expenses').push({

  //   description: 'Rent',
  //   note: '',
  //   amount: 109500,
  //   createdAt: 94844985943935

  // });




  // const firebaseNotes = {
  //   notes: {
      
  //   }
  // }

  // const notes = [{
  //   id: '12',
  //   title: 'first note',
  //   body: 'testing this out'
  // }, {

  //   id: '712',
  //   title: 'second note',
  //   body: 'testing this out'
  // }
  
  // ];

  // database.ref('notes').set(notes);
  // console.log(notes);


//   database.ref().on('value', (snapshot) => {

//     console.log(snapshot.val());

//   });

// setTimeout (() => {
//   database.ref('age').set(28);
// }, 3500);

// setTimeout (() => {
//   database.ref('age').set(28);
// }, 7000);

// setTimeout (() => {
//   database.ref('age').set(28);
// }, 10500);



  // database.ref('')
  // .once('value')
  // .then ((snapshot)=> {
  //   const val = snapshot.val();
  //   console.log(val);

  // }).catch((e)=> {

  //   console.log('error', e);

  // });



// //database.child('isSingle').remove();

// database.ref('isSingle')
// .remove()
// .then (() => {

// console.log('data removed');

// }).catch((e) => {

// console.log('error occured', e);

// });

// database.ref().update({

//   name: 'Darren S',
//   age: 34,
//   job: 'Contracts Admin',
//   isSingle: null

// });




//   database.ref().set({

//         name: 'Simon H',
//         age: 35,
//         isSingle: false,
//         location: {
//             city: 'Sydney',
//             country: 'AU'
//         }

//   }).then(() => {
  
//     console.log('data is saved');

// }).catch((e) => {

// console.log('this failed', e);

// });

