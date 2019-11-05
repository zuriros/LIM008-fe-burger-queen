
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

export const addProducts = (userName, food, pedido, cantidad) => {
  return firebase.firestore().collection('Menu').add({
    customerName: userName,
    nombre: food,
    tipo: pedido,
    total: cantidad,
  });
};     