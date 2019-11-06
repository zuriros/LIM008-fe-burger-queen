import { addElement, callIdOfEachRouter, arrConditional, totalAmount, arrObjt, removingElements, deleteElements} from './control_func.js';
import { templObj } from './productList.js'; 
import { addProducts } from '../data_firebase/firebase_func.js';
// import {forEachElementOfGetFunc} from './control_func.js';

export const creatDivMenuOfEachfood = (dataProd) => {
  const nameId = callIdOfEachRouter(dataProd.data.tipo);   
  const callIdName = document.getElementById(nameId);    
  const creatDivList = document.createElement('div');
  creatDivList.setAttribute('id', dataProd.id);
  const tmplListProduct = `
      <h5><img src="${dataProd.data.img}"> ${dataProd.data.nombre } &nbsp &nbsp S/.${dataProd.data.precio}</h5>
    `;
  creatDivList.innerHTML = tmplListProduct;
  callIdName.appendChild(creatDivList);
  eventShowData(dataProd.id, dataProd.data);  
  return creatDivList;
};


export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);  
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    const callPedidos = document.getElementById('pedidos');  
    callPedidos.innerHTML = '';    
    addEachElement(arrDataProduct, callPedidos);    
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
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
    });
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
  });
});

// -----------------------agregar nombre y datos del pedido del cliente a firebase-----------
export const addProductsOnSubmit = (event) => {
  event.preventDefault();
  const inputName = document.getElementById('customer-name');
  const newArrPedido = [];
  const date = new Date();  
  if (inputName.value !== '') {
    const status = 'pendiente';
    arrObjt.forEach((obj) => {
      const newObj = {
        nombre: obj.nombre,
        cantidad: obj.cantidad
      };
      newArrPedido.push(newObj);
    });    
    addProducts(inputName.value, newArrPedido, date, status);
    updateOrders(event, inputName);
  } else {
    alert('escriba nombre del cliente');
  }
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
  }
};
  
export const addEachElement = (arrDataProduct, callPedidos) => {
  arrDataProduct.forEach((elem, i) => {  
    callPedidos.appendChild(templObj(elem, i));
  });    
};