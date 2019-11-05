import { deleteElements, arrObjt, totalAmount} from './control_func.js';
import {addProductsOnSubmit, eventAddElement, eventRemovingElements, eventDeleteElements} from './view-controller.js';

export const templObj = (Obj, i) => {
  const creatTr = document.createElement('tr');  
  const templFood = `
       <td>${Obj.nombre}</td>
       <td id = 'numbers'><input  id="myNumber-${i}" value="${Obj.cantidad}">
       <span id="subtractElement-${i}" class="btn-drec icon-circle-down" data-indice = "${i}" title="inc stock"></span>
       <span id="addElement-${i}" class="btn-inc icon-circle-up" title="inc stock"></span></td>
       <td id="total-${i}" class="totalProd-${i} total-product">${Obj.cantidad * Obj.precio}</td>
       <td><span id="deleteElement-${i}" class="btn-delete icon-bin" data-indic = "${i}" title="inc stock"></span></td>
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
  
 
  eventAddElement(arrObjt, btnAdd, inputQuantity, i, inputTotal);
  // -----------------función para disminuir producto por botón-----------------------    
  eventRemovingElements(arrObjt, btnSubtract, inputQuantity, i, inputTotal);

  // -------------------------Evento para eliminar producto--------------------------
  eventDeleteElements(arrObjt, btnDelete, callPedidos, i);
  return creatTr;
};


export const htmlContent = () => {
  
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
  body.innerHTML = tmplHtml;
  const inputSubmitKitchen = body.querySelector('#submit-kitchen');
  inputSubmitKitchen.addEventListener('click', addProductsOnSubmit);  
  return body;
};
