import { deleteElements, arrObjt, totalAmount} from './control_func.js';
import {addProductsOnSubmit, eventAddElement, eventRemovingElements, eventDeleteElements} from './view-controller.js';
// import { arrObjt, templObj} from './control_func.js';

export const templObj = (Obj, i) => {
  const creatTr = document.createElement('tr');  
  const templFood = `
       <td>${Obj.nombre}</td>
       <td id = 'numbers'><input type="number" id="myNumber-${i}" value="${Obj.cantidad}">
       <button id="subtractElement-${i}" class="btn-drec" data-indice = "${i}" title="inc stock">-</button>
       <button id="addElement-${i}" class="btn-inc" title="inc stock">+</button></td>
       <td id="total-${i}" class="totalProd-${i} total-product">${Obj.cantidad * Obj.precio}</td>
       <td><button id="deleteElement-${i}" class="btn-delete" data-indic = "${i}" title="inc stock">X</button></td>
    `;

    // console.log('existo????', obj);
    
  creatTr.innerHTML = templFood;
  // evento de los tres botones +, -, x.  
  const btnAdd = creatTr.querySelector(`#addElement-${i}`);  
  const btnSubtract = creatTr.querySelector(`#subtractElement-${i}`);
  const btnDelete = creatTr.querySelector(`#deleteElement-${i}`);
  let inputQuantity = creatTr.querySelector(`#myNumber-${i}`);
  let inputTotal = creatTr.querySelector(`.totalProd-${i}`);
  const callPedidos = document.getElementById('pedidos');
  // const callPedidos = htmlContent().querySelector('#pedidos');
  // -------------------función para agregar prodcto por botón-----------------------
  // console.log('soy el boton mas', btnAdd);
  
  // btnAdd.addEventListener('click', addElement(arrObjt, inputQuantity, i, inputTotal, event));
  // console.log(arrObjt);  
  eventAddElement(arrObjt, btnAdd, inputQuantity, i, inputTotal);
  // -----------------función para disminuir producto por botón-----------------------    
  // removingElements(arrObjt, btnSubtract, inputQuantity, i, inputTotal);
  eventRemovingElements(arrObjt, btnSubtract, inputQuantity, i, inputTotal);

  // -------------------------Evento para eliminar producto--------------------------
  eventDeleteElements(arrObjt, btnDelete, callPedidos, i);

  // deleteElements(arrObjt, btnDelete, callPedidos, i);
// console.log('soy evento', event);

  return creatTr;
};


export const htmlContent = () => {
  // const sectionId = document.getElementById('templTableList');  
  // const creatElement = document.createElement('div'); 
  const body = document.getElementById('templContainer'); 
  const tmplHtml = ` 
  <header>
  <div class="firstNav-color">
  <nav class="firstNav containerBody">
    <section>
      <h2>Burger Queen</h2>
    </section>
    <section >
      <h2>Cerrar</h2>
    </section>
  </nav>
</div>
<div class="secondNav-color">
  <nav class="secondNav">
    <ul>
      <li><a href="#/desayuno">Desayuno</a></li>
      <li><a href="#/almuerzo">Almuerzos</a></li>
      <li><a href="#/extras">Acompañamientos</a></li>    
    </ul>
  </nav>
</div>
</header>

<main>
    <section id='productsList'></section>
    <section id='templTableList'>
      <div class = 'containerBody'>
        <form action="">
        <label>Nombre</label>
        <input id = 'customer-name' type='text'></form>  
        <div>
          <table>
            <thead>
              <tr>
               <th>Producto</th>
               <th>Cantidad</th>
               <th>Precio</th>
               <th></th>
              </tr>
            </thead>
           <tbody id ="pedidos"></tbody>
           <tfoot>
             <tr> 
              <td>Total</td> 
              <td></td>
              <td><span id='Total'>S/.0</span></td>
             </tr>
           </tfoot>
          </table>
         <input id = 'submit-kitchen' type="submit" value="Enviar a cocina"></input>    
        </div>
       </div>
    </section>
</main>
    <footer class = "footer">
      <div class="">
        <p class="m-0">Creado por @zuriros 2019</p>
      </div>
    </footer>
  `;
  // creatElement.appendChild(tableContent);
  body.innerHTML = tmplHtml;
  
  const inputSubmitKitchen = body.querySelector('#submit-kitchen');
  
  inputSubmitKitchen.addEventListener('click', addProductsOnSubmit);  
  return body;
};


// export const funcCallPedidos = (creatElement) => {
//   const callPedidos = creatElement.querySelector('#pedidos');
//   return callPedidos;
// };