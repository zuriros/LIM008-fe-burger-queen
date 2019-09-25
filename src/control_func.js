const arrObjt = []; 

export const templObj = (Obj, i) => {
  const creatTr = document.createElement('tr');
  const templFood = `
       <td>${Obj.nombre}</td>
       <td><input type="number" id="myNumber-${i}" value="${Obj.cantidad}">
       <button id="subtractElement-${i}" class="btn-drec" data-indice = "${i}" title="inc stock">-</button>
       <button id="addElement-${i}" class="btn-inc" title="inc stock">+</button></td>
       <td id="total-${i}" class="totalProd-${i}">${Obj.cantidad * Obj.precio}</td>
       <td><button id="deleteElement-${i}" class="btn-delete" data-indic = "${i}" title="inc stock">X</button></td>
    `;

  creatTr.innerHTML = templFood;
  // evento de los tres botones +, -, x.  
  const btnAdd = creatTr.querySelector(`#addElement-${i}`);  
  const btnSubtract = creatTr.querySelector(`#subtractElement-${i}`);
  const btnDelete = creatTr.querySelector(`#deleteElement-${i}`);
  let inputQuantity = creatTr.querySelector(`#myNumber-${i}`);
  let inputTotal = creatTr.querySelector(`.totalProd-${i}`);
  const callPedidos = document.getElementById('pedidos');
  // -------------------función para agregar prodcto por botón-----------------------
  addElement(arrObjt, btnAdd, inputQuantity, i, inputTotal);
  // -----------------función para disminuir producto por botón-----------------------    
  removingElements(arrObjt, btnSubtract, inputQuantity, i, inputTotal);
  // -------------------------Evento para eliminar producto--------------------------
  deleteElements(arrObjt, btnDelete, callPedidos, i);
  return creatTr;
};

export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    const callPedidos = document.getElementById('pedidos');
    callPedidos.innerHTML = '';
    let sumaTotal = 0;
    addEachElement(arrDataProduct, callPedidos, sumaTotal);
    totalAmount(arrObjt);
  });
};  
const addEachElement = (arrDataProduct, callPedidos, sumaTotal) => {
  arrDataProduct.forEach((elem, i) => {      
    callPedidos.appendChild(templObj(elem, i));
    sumaTotal += elem.cantidad * elem.precio;
  });    
};

export const buttonMenu = (dataProd) => {   
  const name = callIdButtOfWindow(dataProd.data.tipo); 
  const comidList = document.getElementById(name);
  let divList = document.createElement('div'); 
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  divList.setAttribute('id', dataProd.id);
  nameFood.textContent = dataProd.data.nombre;  
  precio.textContent = dataProd.data.precio;
  divList.appendChild(nameFood);
  divList.appendChild(precio);
  comidList.appendChild(divList);
  eventShowData(dataProd.id, dataProd.data);
};
// ----función para llamar a cada boton por su tipo e iidentificar su id(tmpl)---- 
const callIdButtOfWindow = (dataProdTipo) => {
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
const arrConditional = (dataProduct) => {  
  const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  if (findFirstElem === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
  } else {
    dataProduct.cantidad += 1;
  }
  return arrObjt;
};
 // -------------------evento para agregar prodcto por botón-----------------------
const addElement = (arrObjt, btnAdd, inputQuantity, i, inputTotal) => {
  btnAdd.addEventListener('click', () => {
    inputQuantity.value = arrObjt[`${i}`].cantidad += 1;
    inputTotal = arrObjt[`${i}`].cantidad * arrObjt[`${i}`].precio;
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    totalAmount(arrObjt);    
  });
};
 // -------------------evento para disminuir prodcto por botón-----------------------
const removingElements = (arrObjt, btnSubtract, inputQuantity, i, inputTotal) => {
  btnSubtract.addEventListener('click', () => {
    if (inputQuantity.value >= 1) {
      inputQuantity.value = arrObjt[`${i}`].cantidad -= 1;
      inputTotal = arrObjt[`${i}`].cantidad * arrObjt[`${i}`].precio;
      document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    } else {
      inputQuantity.value = 0;
    } 
    totalAmount(arrObjt);
  });
};

const deleteElements = (arrObjt, btnDelete, callPedidos, i) => {
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
    totalAmount(arrObjt);
  });
}
// -------------------- calculando el total-------------------------
const totalAmount = (arrData) => { 
  let sumaTotalSec = 0;
  arrData.forEach((elem, i) => {
    sumaTotalSec += elem.cantidad * elem.precio;
  });
  document.querySelector('#Total').innerHTML = sumaTotalSec;
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
