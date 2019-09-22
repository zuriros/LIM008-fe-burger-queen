
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
export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    // console.log('nuevo arr', addingOrRemovingElmts(arrObjt));
    //  arrObjt.push(dataProduct);
    // console.log('soy data', dataProduct);
    console.log('soy array data', arrDataProduct);
    // console.log('soy el total', dataProdAll); 
    const callPedidos = document.getElementById('pedidos');
    callPedidos.innerHTML = '';
    // console.log('que soy yooooo', callPedidos.innerHTML);
    
    let sumaTotal = 0;
    arrDataProduct.forEach((elem, i) => {      
      callPedidos.appendChild(templObj(elem, i));
      sumaTotal += elem.cantidad * elem.precio;
      addingOrRemovingElmts(arrDataProduct, i);
      // deleteOrders(arrDataProduct, i);
    });
    // console.log(callPedidos);
    
    document.querySelector('#Total').innerHTML = sumaTotal;
  });
  // console.log('soy la otra data', dataProduct);
};  

export const buttonMenu = (dataProd) => {
// console.log('tengo id????', dataProd);
    
  const comidList = document.getElementById('des-list');
  let butt = document.createElement('BUTTON'); 
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  // agregando el id y el firbase id en el button.
  butt.setAttribute('id', dataProd.id);
  // console.log('yo soy', dataProd.data.nombre);
  // console.log('yo soy', dataProd.id);
  nameFood.textContent = dataProd.data.nombre;  
  precio.textContent = dataProd.data.precio;
  
  butt.appendChild(nameFood);
  butt.appendChild(precio);
  comidList.appendChild(butt);

  eventShowData(dataProd.id, dataProd.data);
};
  
const arrConditional = (dataProduct) => {
  // console.log('tengo id?', dataProduct);
  
  const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  
  if (findFirstElem === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
    // console.log('confuse');   
  } else {
    dataProduct.cantidad += 1;
    // console.log('existe el elemento');
  }
  // console.log('array', arrObjt);
  return arrObjt;
};
// ------------------función de agregar o quitar elementos--------------------

const addingOrRemovingElmts = (arrData, i) => {  
  const btnSubtract = document.getElementById(`subtractElement-${i}`);
  const btnAddElement = document.getElementById(`addElement-${i}`);
  let inputQuantity = document.getElementById(`myNumber-${i}`);
  let inputTotal = document.getElementById(`total-${i}`);

  // let sumaTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
  btnSubtract.addEventListener('click', () => {
    //  let indiceArr = event.target.dataset.indice; 
    // let sumaTotal = 0;
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
    // if (inputQuantity.value >= 1) {
    inputQuantity.value = arrData[`${i}`].cantidad += 1;
    inputTotal = arrData[`${i}`].cantidad * arrData[`${i}`].precio;
    document.querySelector(`.totalProd-${i}`).innerHTML = inputTotal;
    totalAmount(arrData);
  //   } else {
  //     inputQuantity.value = arrData[`${i}`].cantidad += 1;} 
  // console.log('me actualizo?', arrData);
  });
  
  //  console.log('me actualizo?', arrData);
   
  totalAmount(arrData);
  deleteOrders(arrData, i);
};

// -------------------- claculando el total-------------------------
const totalAmount = (arrData) => {
  // console.log('aquí', arrData);
 
  let sumaTotal = 0;
  arrData.forEach((elem, i) => {
  // callPedidos.appendChild(templObj(elem /*, dataProdAll*/, i));
    sumaTotal += elem.cantidad * elem.precio;
  });
  document.querySelector('#Total').innerHTML = sumaTotal;
}; 
// console.log('nuevo arr', addingOrRemovingElmts(arrObjt));
// -----------------------------------función-para-eliminar-pedidos---------------------------------
const deleteOrders = (dataArr, i) => {
  const btnDelete = document.getElementById(`deleteElement-${i}`);  
  const callPedidos = document.getElementById('pedidos');
  console.log('soy null', btnDelete);
  if (btnDelete === null) {
    callPedidos.innerHTML = '';
    // console.log(btnDelete);
    dataArr.forEach((elem) => {
      callPedidos.appendChild(templObj(elem, i));
    });
  } else {
    btnDelete.addEventListener('click', () => {
      // debugger;
      const deleteElement = dataArr.splice(`${i}`, 1);
      callPedidos.innerHTML = '';
      // console.log(btnDelete);
      dataArr.forEach((elem) => {
        callPedidos.appendChild(templObj(elem, i));
      });
      totalAmount(dataArr);
      deleteOrders(dataArr, i);
    });   
  }
};
