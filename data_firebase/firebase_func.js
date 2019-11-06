
// obteniendo la data de firebase
export const getFunc = (callback) => {  
  const db = firebase.firestore();
  return db.collection('Menu').get().then((snapshot) => { 
    const arrObj = [];      
    snapshot.docs.forEach(doc => {
      const objDocum = {
        id: doc.id,
        data: doc.data()
      };          
      arrObj.push(objDocum);
    });    
    callback(arrObj); 
  });
};

export const getPedido = (callback) => {  
  const db = firebase.firestore();
  return db.collection('Pedidos').get().then((snapshot) => { 
    const arrObj = [];      
    snapshot.docs.forEach(doc => {
      const objDocum = {
        id: doc.id,
        data: doc.data()
      };          
      arrObj.push(objDocum);
    });    
    callback(arrObj); 
  });
};

export const addProducts = (userName, arr, date, status) => {
  return firebase.firestore().collection('Pedidos').add({
    customerName: userName,
    order: arr,
    date,
    status,
  });
};     