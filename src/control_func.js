
export const templObj = (Obj) => {
  const creatTr = document.createElement('tr');
  const templFood = `    
       <td>${Obj.nombre}</td>
       <td>cantidad</td>
       <td>${Obj.precio}</td>
       <td>x</td>
     `;
  creatTr.innerHTML = templFood ;
  return creatTr;
};

const arrObjt = []; 

export const eventShowData = (idButton, dataProduct) => {
  
  const callIdButt = document.getElementById(idButton);
  callIdButt.addEventListener('click', () => { 
    arrCondi(idButton, dataProduct);
    //  arrObjt.push(dataProduct);
    const callPedidos = document.getElementById('pedidos');
    callPedidos.appendChild(templObj(dataProduct));
  });
  return arrObjt;
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
  
const arrCondi = (idButton, dataProduct) => {
  const findFirstElem = arrObjt.find((element) => (element === dataProduct));
  if (findFirstElem === undefined) {
    arrObjt.push(dataProduct);
      console.log('confuse');   
  } else {
    
    console.log('quieo entender');
  }
  return arrObjt;
};
  
