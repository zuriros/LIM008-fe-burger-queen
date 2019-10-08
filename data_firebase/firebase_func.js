
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

export const addProducts = (userName, food, pedido, cantidad) => {
  return firebase.firestore().collection('Menu').add({
    customerName: userName,
    nombre: food,
    tipo: pedido,
    total: cantidad,
    // profilePicUrl: userPhoto,
    // descripcion: textNewNote,
    // likeCounter: 0,
    // userId: userUid,
    // typeShare: privacidad,
    // date: firebase.firestore.FieldValue.serverTimestamp()
  });
};