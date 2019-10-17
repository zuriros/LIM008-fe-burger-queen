import { templObj } from './productList.js';
import { addProducts } from '../data_firebase/firebase_func.js';
 
export const arrObjt = []; 
// export const buttonMenu = (dataProd) => {   
//   const name = callIdButtOfWindow(dataProd.data.tipo); 
//   const comidList = document.getElementById(name);
//   const divList = document.createElement('div'); 
//   let nameFood = document.createElement('span');
//   let tipo = document.createElement('span');
//   let precio = document.createElement('span');
//   divList.setAttribute('id', dataProd.id);
//   nameFood.textContent = dataProd.data.nombre;  
//   precio.textContent = dataProd.data.precio;
//   divList.appendChild(nameFood);
//   divList.appendChild(precio);
//   comidList.appendChild(divList);
//   eventShowData(dataProd.id, dataProd.data);
// };

// ----función para llamar a cada boton por su tipo e iidentificar su id(tmpl)---- 
export const callIdButtOfWindow = (dataProdTipo) => {
  console.log(dataProdTipo);
  
  if (dataProdTipo === 'Desayuno') {
    return 'des-list1';
  } 
  if (dataProdTipo === 'Resto del día') {
    return 'des-list2';
  }
  if (dataProdTipo === 'Acompañamiento') {
    return 'des-list3';
  }
};
export const arrConditional = (dataProduct) => {  
  // console.log('la data', dataProduct);
  const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  // console.log('soy primer elem', findFirstElem);
  if (findFirstElem === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
  } else {
    dataProduct.cantidad += 1;
  }
  return arrObjt;
};
// -------------------evento para agregar prodcto por botón-----------------------
export const addElement = (arrObjt,/* btnAdd, inputQuantity,*/ i/*, inputTotal*/) => {
  // btnAdd.addEventListener('click', () => {
    // event.preventDefault();
    // console.log(document.querySelector(`.totalProd-${i}`));
    // console.log(arrObjt[`${i}`]);
   const addCantidad = arrObjt[`${i}`].cantidad += 1;
   return addCantidad * arrObjt[`${i}`].precio;
    // inputQuantity.value = arrObjt[`${i}`].cantidad += 1;
    // inputTotal =  inputQuantity.value * arrObjt[`${i}`].precio;
    // document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    // totalAmount(arrObjt);    
  // });
};
// -------------------evento para disminuir prodcto por botón-----------------------
export const removingElements = (arrObjt, btnSubtract, inputQuantity, i, inputTotal) => {
  btnSubtract.addEventListener('click', () => {
    if (inputQuantity.value >= 1) {
      inputQuantity.value = arrObjt[`${i}`].cantidad -= 1;
      inputTotal = arrObjt[`${i}`].cantidad * arrObjt[`${i}`].precio;
      document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    } else {
      inputQuantity.value = 0;
    } 
    // console.log('cuanto es total', totalAmount(arrObjt));

    totalAmount(arrObjt);
  });
};
  
export const deleteElements = (arrObjt, btnDelete, callPedidos, i) => {
  btnDelete.addEventListener('click', () => {     
    for (let index in arrObjt) {   
      const element = arrObjt[index];
      if (element == arrObjt[`${i}`]) {
        const deleteElement = arrObjt.splice(`${i}`, 1); 
        callPedidos.innerHTML = '';
        arrObjt.forEach((elem, i) => {
          callPedidos.appendChild(templObj(elem, i));
        });
      }
    }
    
    // console.log('cuanto es total', totalAmount(arrObjt));
    
    // document.querySelector('#Total').innerHTML = totalAmount(arrObjt);

    totalAmount(arrObjt);
  });
};
// -------------------- calculando el total-------------------------
export const totalAmount = (arrData) => {
  console.log(arrData);
   
  let sumaTotalSec = 0;
  arrData.forEach((elem, i) => {
    sumaTotalSec += elem.cantidad * elem.precio;
  });
  return sumaTotalSec;
  // document.querySelector('#Total').innerHTML = sumaTotalSec;

  // htmlContent().querySelector('#Total').innerHTML = sumaTotalSec;
}; 
// ------------------función de agregar o quitar elementos--------------------

// const addingOrRemovingElmts = (arrData, i) => {  
//   const btnSubtract = document.getElementById(`subtractElement-${i}`);
//   const btnAddElement = document.getElementById(`addElement-${i}`);
//   let inputQuantity = document.getElementById(`myNumber-${i}`);
//   let inputTotal = document.getElementById(`total-${i}`);
//   btnSubtract.addEventListener('click', () => {
//     if (inputQuantity.value >= 1) {
//       inputQuantity.value = arrData[`${i}`].cantidad -= 1;
//       inputTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
//       document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
//     } else {
//       inputQuantity.value = 0;
//     } 
//     totalAmount(arrData);
//   });

//   btnAddElement.addEventListener('click', () => {
//     inputQuantity.value = arrData[`${i}`].cantidad += 1;
//     inputTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
//     document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
//     totalAmount(arrData);
//   });   
//   totalAmount(arrData);
//   // deleteOrders(arrData, i);
// };
// -----------------------------------función-para-eliminar-pedidos---------------------------------
// const deleteOrders = (dataArr, i) => {
//   const btnDelete = document.getElementById(`deleteElement-${i}`); 
   
//   const callPedidos = document.getElementById('pedidos');
//   btnDelete.addEventListener('click', (event) => {
//     // console.log(btnDelete);
//   console.log('indice', indiceDeProducto);
  
//     if (btnDelete === null) {    
//       callPedidos.innerHTML = '';
//       dataArr.forEach((elem, i) => {
//         callPedidos.appendChild(templObj(elem, i));
//       });
//     } else {
//       const deleteElement = dataArr.splice(`${i}`, 1);
//       callPedidos.innerHTML = '';
//       dataArr.forEach((elem, i) => {
//         callPedidos.appendChild(templObj(elem, i));
//       });
//       console.log('existo');
//       totalAmount(dataArr);
//       console.log('existo tmb');
//       deleteOrders(dataArr, i);
//     }
//   }); 
// };
// -----------------------agregar nombre y datos del pedido del cliente a firebase-----------
export const addProductsOnSubmit = (event) => {
  event.preventDefault();
  const inputName = document.getElementById('customer-name');
  // console.log('soy input', inputName);
  // console.log(arrObjt.nombre);
  const pedido = 'pedido';
  if (inputName.value !== '') {
    arrObjt.forEach((ele) => {
      addProducts(inputName.value, ele.nombre, pedido, ele.cantidad);
    });
    updateOrders(event, inputName);
    // addProducts(inputName.value, arrObjt.nombre);
  } else {
    alert('escriba nombre del cliente');
  }
  // console.log('creo ser l submit', event);
};
// ------------------función para actualizar pedidos al hacer click---------------------------------------
const updateOrders = (event, inputName) => {
  if (event !== undefined) {
    arrObjt.splice(0, arrObjt.length);
    const callingCreatTr = document.getElementById('pedidos');
    const callingTotal = document.getElementById('Total');    
    inputName.value = '';
    callingCreatTr.innerHTML = '';
    callingTotal.innerHTML = 0;
    // console.log('no sé que soy, no estoy segura', callingCreatTr);
    // console.log('yo soy el array de objetos', arrObjt);  
  }
};

// export const sum = (a, b) => {
//   return a + b;
// }
