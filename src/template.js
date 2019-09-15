import {buttonMenu, eventShowData, templObj} from '../src/control_func.js';

export const objTempl = {
  home: `<div>
   <h1>Menú</h1>
   <a href="#/cocina"><button class="btn btn-warning btn-lg">Cocina</button></a>
   <a href="#/mesas"><button class="btn btn-warning btn-lg">Mesas</button></a>
  </div>`,
  mesas: ` <div>
  <a href="#/desayuno"><button class="btn btn-warning btn-lg">Desayuno</button></a>
  <a href="#/almuerzo"><button class="btn btn-warning btn-lg">Almuerzos</button></a>
  <a href="#/"><button class="btn btn-warning btn-lg">Regresar</button></a>
    <figure><img src="" alt=""></figure>
   </div>`,
  desayuno: ` <div>
    <h2>Desayuno</h2>
    <section id='des-list'></section>
    
    <a href="#/mesas"><button class="btn btn-warning btn-lg">Regresar</button></a>

   </div>
   <div>
    <form action="">Nombre:<input type="text"></form>  
   <div>
    <h4>Agregar producto <br><input type="text"></h4>
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
      <td><span id='Total'>S/.</span></td>
     </tr>
    </tfoot>
    
    </table>
     
    <button>Enviar a cocina</button>    
   </div>
  </div>`,

  
  almuerzo: `  <div>
  <h2>Almuerzo y cena</h2>
  <div>
  <section id='des-list'>
    <h3>Hamburguesa Simple</h3>
    
 </div>
 <div>
    <h3>Hamburguesa Doble</h3>
     
 </div>
 <div>
    <h3>Acompañamientos</h3>
    
  </div>
  <div>
    <h3>Para tomar</h3>   
  </div>
  </section>

  <a href="#/mesas"><button>Regresar</button></a>


</div>
<div>
    <form action="">Nombre:<input type="text"></form>  
   <div>
    <h4>Agregar producto <br><input type="text"></h4>
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
      <td></td>
     </tr>
    </tfoot>
    
    </table>
     
    <button>Enviar a cocina</button>    
   </div>
  </div>`,
  errorPag: `<div id="message">
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
  </div>`
};