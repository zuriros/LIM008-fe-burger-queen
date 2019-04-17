

const comidList = document.querySelector('#des-list');
const functLi = (dataProd) => {
  let butt = document.createElement('BUTTON');  
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  // agregando el id y el firbase id en el button.
  butt.setAttribute('data-id', dataProd.id);

  nameFood.textContent = dataProd.data.nombre;  
  tipo.textContent = dataProd.data.tipo;
  precio.textContent = dataProd.data.precio;

  butt.appendChild(nameFood);
  butt.appendChild(tipo);
  butt.appendChild(precio);
  comidList.appendChild(butt);
};

// obteniendo la data de firebase
const db = firebase.firestore();
export const arrObj = [];
db.collection('Menu').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    const objDocum = {
      id: doc.id,
      data: doc.data()
    };    
    arrObj.push(objDocum);
  });
  arrObj.forEach((ele) => {
    functLi(ele);
  });
});

  
//  const db = firebase.firestore();

// db.collection('Menu').get().then((snapshot) => {
//   const arrObj = [];
//   snapshot.docs.forEach(doc => {
//     arrObj.push(doc.data());
//   });
//    console.log(arrObj);
   
// });
