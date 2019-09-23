
import {buttonMenu} from '../src/control_func.js';

// obteniendo la data de firebase
export const getFunc = (breakOrLunch) => {  
  const db = firebase.firestore();
  return db.collection('Menu').where('tipo', '==', breakOrLunch).get().then((snapshot) => { 
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
    });
  });
};

