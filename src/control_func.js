import { addProducts, getFunc } from '../data_firebase/firebase_func.js';
// import { buttonMenu } from './view-controller.js';
export const arrObjt = []; 
// obteniendo la data de getFunc y recorrerlo uno a uno
// getFunc((arrObjFun) => {
//   const name = arrObjFun.filter((ele) => {
//     const dataAccordingToTipe = ele.data.tipo === nameAccordingToTipe;
//     return dataAccordingToTipe;
//   });
//   console.log(name);
  
//   console.log(arrObjFun);
  
//   // arrObjFun.forEach((ele) => { 
//   //   console.log(ele.data.tipo);
   
//   //   // buttonMenu(ele);   
//   // });
// });
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
  // console.log(dataProdTipo);
  
  if (dataProdTipo === 'Desayuno') {
    return 'des-list1';
  } else if (dataProdTipo === 'Resto del día') {
    return 'des-list2';
  } else {
  // if (dataProdTipo === 'Acompañamiento') {
    return 'des-list3';
  }
};
export const arrConditional = (dataProduct) => {  
  // console.log('la data', dataProduct.cantidad);
  // const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  // console.log('soy primer elem', findFirstElem);
  // if (findFirstElem === undefined) {
  if (dataProduct.cantidad === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
  } else {
    dataProduct.cantidad += 1;
  }
  return arrObjt;
};
// -------------------evento para agregar prodcto por botón-----------------------
export const addElement = (arrObjt, /* btnAdd, inputQuantity,*/ i/* , inputTotal*/) => {
  // btnAdd.addEventListener('click', () => {
  // event.preventDefault();
  // console.log(document.querySelector(`.totalProd-${i}`));
  // console.log(arrObjt[`${i}`]);
  let addCantidad = arrObjt[`${i}`].cantidad += 1;
  return addCantidad * arrObjt[`${i}`].precio;
  // inputQuantity.value = arrObjt[`${i}`].cantidad += 1;
  // inputTotal =  inputQuantity.value * arrObjt[`${i}`].precio;
  // document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
  // totalAmount(arrObjt);    
  // });
};
// -------------------evento para disminuir prodcto por botón-----------------------
export const removingElements = (arrObjt, /* btnSubtract, inputQuantityValue,*/ i/* , inputTotal*/) => {
  // btnSubtract.addEventListener('click', () => {
  // if (inputQuantityValue >= 1) {
  // inputQuantityValue = arrObjt[`${i}`].cantidad -= 1;
  let subtractCantidad = arrObjt[`${i}`].cantidad -= 1;
  // inputTotal = arrObjt[`${i}`].cantidad * arrObjt[`${i}`].precio;
  // document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
  if (arrObjt[`${i}`].cantidad <= 0) {
    return arrObjt[`${i}`].cantidad = 0;
  } else {
    return subtractCantidad * arrObjt[`${i}`].precio;
  }
  // } else {
  //   inputQuantityValue = 0;bu
  // } 
  // console.log('cuanto es total', totalAmount(arrObjt));

  // totalAmount(arrObjt);
  // });
};
  
export const deleteElements = (arrObjt, /* btnDelete,  callPedidos,*/ i) => {
  // btnDelete.addEventListener('click', () => {     
  for (let index in arrObjt) {   
    const element = arrObjt[index];
    if (element == arrObjt[`${i}`]) {
      const deleteElement = arrObjt.splice(`${i}`, 1); 
      return arrObjt;
      // callPedidos.innerHTML = '';
      // arrObjt.forEach((elem, i) => {
      //   callPedidos.appendChild(templObj(elem, i));
      // });
    }
  }
    
  // console.log('cuanto es total', totalAmount(arrObjt));
    
  // document.querySelector('#Total').innerHTML = totalAmount(arrObjt);

  //   totalAmount(arrObjt);
  // });
};
// -------------------- calculando el total-------------------------
export const totalAmount = (arrData) => {
  // console.log(arrData);
   
  let sumaTotalSec = 0;
  arrData.forEach((elem, i) => {
    sumaTotalSec += elem.cantidad * elem.precio;
  });
  return sumaTotalSec;
  // document.querySelector('#Total').innerHTML = sumaTotalSec;

  // htmlContent().querySelector('#Total').innerHTML = sumaTotalSec;
}; 

// -------------------función de agregar cada elemento -----------------------

// export const addEachElement = (arrDataProduct, callPedidos) => {
// console.log(arrDataProduct);
// console.log('otro arr', arrObjt);

//   // let sumaTotal = 0;
//   arrDataProduct.forEach((elem, i) => {  
//     // console.log(elem);
//     // console.log(i);
//     callPedidos.appendChild(templObj(elem, i));
//     // return element;
//     // sumaTotal += elem.cantidad * elem.precio;
//   });    
// };

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


// export const sum = (a, b) => {
//   return a + b;
// }
