import { addProducts, getFunc } from '../firebaseDoc/dataFirebase.js';

export const arrObjt = []; 

// ----función para llamar a cada id de desayuno, almuerzo y extras al elgir las opciones del menú---- 
export const callIdOfEachRouter = (dataProdTipo) => {    
  if (dataProdTipo === 'Desayuno') {
    return 'des-list1';
  } else if (dataProdTipo === 'Resto del día') {
    return 'des-list2';
  } else {
    return 'des-list3';
  }
};

export const arrConditional = (dataProduct) => {  
  if (dataProduct.cantidad === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
  } else {
    dataProduct.cantidad += 1;
  }
  return arrObjt;
};
// -------------------función para agregar prodcto por botón-----------------------
export const addElement = (arrObjt, i) => {
  let addCantidad = arrObjt[`${i}`].cantidad += 1;
  return addCantidad * arrObjt[`${i}`].precio;
};
// -------------------función para disminuir prodcto por botón-----------------------
export const removingElements = (arrObjt, i) => {
  let subtractCantidad = arrObjt[`${i}`].cantidad -= 1;
  if (arrObjt[`${i}`].cantidad <= 0) {
    return arrObjt[`${i}`].cantidad = 0;
  } else {
    return subtractCantidad * arrObjt[`${i}`].precio;
  }
};
  
export const deleteElements = (arrObjt, i) => {
  for (let index in arrObjt) {   
    const element = arrObjt[index];
    if (element == arrObjt[`${i}`]) {
      const deleteElement = arrObjt.splice(`${i}`, 1); 
      return arrObjt;
    }
  }
};
// -------------------- calculando el total-------------------------
export const totalAmount = (arrData) => {
  let sumaTotalSec = 0;
  arrData.forEach((elem, i) => {
    sumaTotalSec += elem.cantidad * elem.precio;
  });
  return sumaTotalSec;
}; 

