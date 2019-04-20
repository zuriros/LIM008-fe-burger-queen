const buttonMenu = (dataProd) => {
  const comidList = document.getElementById('des-list');
  let butt = document.createElement('BUTTON'); 
  console.log(butt);
   
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  // agregando el id y el firbase id en el button.
  butt.setAttribute('id', dataProd.id);
  nameFood.textContent = dataProd.data.nombre;   
  // tipo.textContent = dataProd.data.tipo;
  precio.textContent = dataProd.data.precio;

  butt.appendChild(nameFood);
  // butt.appendChild(tipo);
  butt.appendChild(precio);
  //  console.log(comidList.appendChild(butt));
  comidList.appendChild(butt);
};


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