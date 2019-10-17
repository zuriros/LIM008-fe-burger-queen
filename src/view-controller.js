import { addElement, callIdButtOfWindow, arrConditional, totalAmount, arrObjt } from './control_func.js';
import { templObj } from './productList.js'; 

export const buttonMenu = (dataProd) => {
  // console.log('Algo confuso', dataProd);
  const name = callIdButtOfWindow(dataProd.data.tipo);   
  const comidList = document.getElementById(name);
  const divList = document.createElement('div');
  divList.setAttribute('id', dataProd.id);
  const tmplListProduct = `
      <h5>${dataProd.data.nombre} S/.${dataProd.data.precio}</h5>
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
    // console.log('soy el array condiciconal', arrDataProduct);
      
    const callPedidos = document.getElementById('pedidos');  
    callPedidos.innerHTML = '';    
    addEachElement(arrDataProduct, callPedidos);
    document.querySelector('#Total').innerHTML = totalAmount(arrObjt);
    // totalAmount(arrObjt);
  }); 
};  
// este evento es para la función addElement
export const eventAddElement = (arrObjt, btnAdd, inputQuantity, i, inputTotal) => {
  btnAdd.addEventListener('click', () => {    
    inputQuantity.value = arrObjt[`${i}`].cantidad;
    inputTotal = addElement(arrObjt, i);
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
  });
};

export const addEachElement = (arrDataProduct, callPedidos) => {
  let sumaTotal = 0;
  arrDataProduct.forEach((elem, i) => {  
    callPedidos.appendChild(templObj(elem, i));
    sumaTotal += elem.cantidad * elem.precio;
  });    
};