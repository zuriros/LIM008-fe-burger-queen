
import { buttonMenu } from '../src/template.js';

// obteniendo la data de firebase
export const getFunc = (desOrAlm) => {  
  const db = firebase.firestore();
  return db.collection('Menu').where('tipo', '==', desOrAlm).get().then((snapshot) => { 
    const arrObj = [];  
    snapshot.docs.forEach(doc => {
      const objDocum = {
        id: doc.id,
        data: doc.data()
      };    
      arrObj.push(objDocum);
    });
    arrObj.forEach((ele) => {
      buttonMenu(ele);
      // console.log('ver ele', ele);      
    });
  });
};

// const eventShowData = (idButton) => {
// document.getElementById('8cF6pXRj7tzHlqchlW5M').addEventListener('click', () => {
//   document.getElementById('hola').innerHTML = 'holaaass';
// });
// };  
// eventShowData('8cF6pXRj7tzHlqchlW5M');

// functLi('Jugo de frutas natural');

// getFunc('Desayuno');


// Creando una función para llamar a mi data según la elección
  
// const desOrAlmuer = (route) => {
//   if (route === '#/desayuno') {
//     return getFunc('Desayuno');
//   } else {
//     return getFunc('Resto del día');
//   }
// };
//  desOrAlmuer('#/desayuno');
//  const db = firebase.firestore();

// db.collection('Menu').get().then((snapshot) => {
//   const arrObj = [];
//   snapshot.docs.forEach(doc => {
//     arrObj.push(doc.data());
//   });
//    console.log(arrObj);
   
// });