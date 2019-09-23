
export const templObj = (Obj, i) => {
  const creatTr = document.createElement('tr');
  const templFood = `<tr> 
       <td>${Obj.nombre}</td>
       <td><input type="number" id="myNumber-${i}" value="${Obj.cantidad}">
       <button id="subtractElement-${i}" class="btn-drec" data-indice = "${i}" title="inc stock">-</button>
       <button id="addElement-${i}" class="btn-inc" title="inc stock">+</button></td>
       <td id="total-${i}" class="totalProd-${i}">${Obj.cantidad * Obj.precio}</td>
       <td><button id="deleteElement-${i}" class="btn-inc" title="inc stock">X</button></td>
       </tr> `;
  creatTr.innerHTML = templFood ;
  return creatTr; 
};

const arrObjt = []; 
const addEachElement = (arrDataProduct, callPedidos, sumaTotal) => {
  arrDataProduct.forEach((elem, i) => {      
    callPedidos.appendChild(templObj(elem, i));
    sumaTotal += elem.cantidad * elem.precio;
    addingOrRemovingElmts(arrDataProduct, i);
  });    
};
export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    const callPedidos = document.getElementById('pedidos');
    callPedidos.innerHTML = '';
    let sumaTotal = 0;
    addEachElement(arrDataProduct, callPedidos, sumaTotal);
    document.querySelector('#Total').innerHTML = sumaTotal;
  });
};  

export const buttonMenu = (dataProd) => {   
  const name = callIdButtOfWindow(dataProd.data.tipo); 
  const comidList = document.getElementById(name);
  // console.log(comidList);
  console.log(dataProd);
  
  let butt = document.createElement('BUTTON'); 
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  butt.setAttribute('id', dataProd.id);
  nameFood.textContent = dataProd.data.nombre;  
  precio.textContent = dataProd.data.precio;
  butt.appendChild(nameFood);
  butt.appendChild(precio);
  comidList.appendChild(butt);
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
// ------------------función de agregar o quitar elementos--------------------

const addingOrRemovingElmts = (arrData, i) => {  
  const btnSubtract = document.getElementById(`subtractElement-${i}`);
  const btnAddElement = document.getElementById(`addElement-${i}`);
  let inputQuantity = document.getElementById(`myNumber-${i}`);
  let inputTotal = document.getElementById(`total-${i}`);
  btnSubtract.addEventListener('click', () => {
    if (inputQuantity.value >= 1) {
      inputQuantity.value = arrData[`${i}`].cantidad -= 1;
      inputTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
      document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    } else {
      inputQuantity.value = 0;
    } 
    totalAmount(arrData);
  });

  btnAddElement.addEventListener('click', () => {
    inputQuantity.value = arrData[`${i}`].cantidad += 1;
    inputTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    totalAmount(arrData);
  });   
  totalAmount(arrData);
  deleteOrders(arrData, i);
};

// -------------------- claculando el total-------------------------
const totalAmount = (arrData) => { 
  let sumaTotal = 0;
  arrData.forEach((elem, i) => {
    sumaTotal += elem.cantidad * elem.precio;
  });
  document.querySelector('#Total').innerHTML = sumaTotal;
}; 
// -----------------------------------función-para-eliminar-pedidos---------------------------------
const deleteOrders = (dataArr, i) => {
  const btnDelete = document.getElementById(`deleteElement-${i}`);  
  const callPedidos = document.getElementById('pedidos');
  if (btnDelete === null) {
    callPedidos.innerHTML = '';
    dataArr.forEach((elem) => {
      callPedidos.appendChild(templObj(elem, i));
    });
  } else {
    btnDelete.addEventListener('click', () => {
      const deleteElement = dataArr.splice(`${i}`, 1);
      callPedidos.innerHTML = '';
      dataArr.forEach((elem) => {
        callPedidos.appendChild(templObj(elem, i));
      });
      totalAmount(dataArr);
      deleteOrders(dataArr, i);
    });   
  }
};
