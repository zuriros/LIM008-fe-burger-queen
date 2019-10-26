import { addElement, callIdButtOfWindow, arrConditional, totalAmount, arrObjt, removingElements, deleteElements} from './control_func.js';
import { templObj } from './productList.js'; 
import { addProducts } from '../data_firebase/firebase_func.js';
// import {forEachElementOfGetFunc} from './control_func.js';

export const buttonMenu = (dataProd) => {
  // console.log('Algo confuso', dataProd);
  const name = callIdButtOfWindow(dataProd.data.tipo);   
  const comidList = document.getElementById(name);
  const divList = document.createElement('div');
  divList.setAttribute('id', dataProd.id);
  const tmplListProduct = `
      
      <h5><img src="${dataProd.data.img}"> ${dataProd.data.nombre} S/.${dataProd.data.precio}</h5>
    `;
  divList.innerHTML = tmplListProduct;
  comidList.appendChild(divList);
  eventShowData(dataProd.id, dataProd.data);  
  return divList;
};


export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);  
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    // console.log('quiero saber que ers', arrConditional(dataProduct));
    
    // console.log('soy el array condiciconal', arrDataProduct);
      
    const callPedidos = document.getElementById('pedidos');  
    callPedidos.innerHTML = '';    
    addEachElement(arrDataProduct, callPedidos);
    // console.log(addEachElement(arrDataProduct, callPedidos));
    
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
    // totalAmount(arrObjt);
  }); 
};  
// este evento es para la función addElement
export const eventAddElement = (arrObjt, btnAdd, inputQuantity, i, inputTotal) => {
  btnAdd.addEventListener('click', () => {    
    inputQuantity.value = arrObjt[`${i}`].cantidad + 1;
    inputTotal = addElement(arrObjt, i);
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
  });
};
// este evento es para la función removingElements
export const eventRemovingElements = ((arrObjt, btnSubtract, inputQuantity, i, inputTotal) => {
  btnSubtract.addEventListener('click', () => {
    inputQuantity.value = arrObjt[`${i}`].cantidad - 1;
    inputTotal = removingElements(arrObjt, i);
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
    
  });
});
// Este evento es para la función deleteElements
export const eventDeleteElements = ((arrObjt, btnDelete, callPedidos, i) => {
  btnDelete.addEventListener('click', () => {
    callPedidos.innerHTML = '';
    deleteElements(arrObjt, i).forEach((elem, i) => {
      callPedidos.appendChild(templObj(elem, i));
    //   document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    });
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);

  });
});

// -----------------------agregar nombre y datos del pedido del cliente a firebase-----------
export const addProductsOnSubmit = (event) => {
  event.preventDefault();
  const inputName = document.getElementById('customer-name');
  // console.log('soy input', inputName);
  // console.log(arrObjt.nombre);
  const pedido = 'pedido';
  if (inputName.value !== '') {
    arrObjt.forEach((ele) => {
      // console.log('aquí estoy', addProducts(inputName.value, ele.nombre, pedido, ele.cantidad).then((ele) => ele));
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
  
export const addEachElement = (arrDataProduct, callPedidos) => {
  // let sumaTotal = 0;
  arrDataProduct.forEach((elem, i) => {  
    callPedidos.appendChild(templObj(elem, i));
    // sumaTotal += elem.cantidad * elem.precio;
  });    
};