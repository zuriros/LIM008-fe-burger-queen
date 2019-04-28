
export const templObj = (Obj) => {
  const creatTr = document.createElement('tr');
  const templFood = `    
       <td>${Obj.nombre}</td>
       <td><input type="number" id="myNumber" value="${Obj.cantidad}"><button class="btn-inc" title="inc stock">-</button><button class="btn-inc" title="inc stock">+</button></td>
       <td>${Obj.cantidad * Obj.precio}</td>
       <td><button class="btn-inc" title="inc stock">X</button></td>
     `;
  creatTr.innerHTML = templFood ;
  return creatTr;
};

const arrObjt = []; 

export const eventShowData = (idButton, dataProduct) => {
  const callIdButt = document.getElementById(idButton);
  callIdButt.addEventListener('click', () => { 
    const arrDataProduct = arrConditional(dataProduct);
    console.log(arrDataProduct);
    //  arrObjt.push(dataProduct);
    const callPedidos = document.getElementById('pedidos');
    callPedidos.innerHTML = '';
    let sumaTotal = 0;
    arrDataProduct.forEach((elem) => {
      callPedidos.appendChild(templObj(elem));
      sumaTotal += elem.cantidad * elem.precio;
    });
    document.querySelector('#Total').innerHTML = sumaTotal;
  });
};  

export const buttonMenu = (dataProd) => {
  // console.log(dataProd);
    
  const comidList = document.getElementById('des-list');
  
  let butt = document.createElement('BUTTON'); 
  let nameFood = document.createElement('span');
  let tipo = document.createElement('span');
  let precio = document.createElement('span');
  // agregando el id y el firbase id en el button.
  butt.setAttribute('id', dataProd.id);
  nameFood.textContent = dataProd.data.nombre;  
  precio.textContent = dataProd.data.precio;
  
  butt.appendChild(nameFood);
  butt.appendChild(precio);
  comidList.appendChild(butt);

  eventShowData(dataProd.id, dataProd.data);
};
  
const arrConditional = (dataProduct) => {
  const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  if (findFirstElem === undefined) {
    dataProduct.cantidad = 1;
    arrObjt.push(dataProduct);
    console.log('confuse');   
  } else {
    dataProduct.cantidad += 1;
    console.log('existe el elemento');
  }
  return arrObjt;
};
  
