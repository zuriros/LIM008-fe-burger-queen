
// import {buttonMenu} from '../src/view-controller.js';
// import {forEachElementOfGetFunc} from '../src/control_func.js';
// obteniendo la data de firebase
export const getFunc = (callback) => {  
  const db = firebase.firestore();
  return db.collection('Menu').get().then((snapshot) => { 
    // .where('tipo', '==', breakOrLunch)
    const arrObj = [];      
    snapshot.docs.forEach(doc => {
      // console.log(doc);
      const objDocum = {
        id: doc.id,
        data: doc.data()
      };          
      arrObj.push(objDocum);
    });    
    // console.log('aquí estoy');
    
    // console.log(arrObj);
    
    callback(arrObj); 
    // arrObj.for 
    // });
  });
};

export const addProducts = (userName, food, pedido, cantidad) => {
  return firebase.firestore().collection('Menu').add({
    customerName: userName,
    nombre: food,
    tipo: pedido,
    total: cantidad,
  });
};     