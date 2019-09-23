import {buttonMenu, eventShowData, templObj} from '../src/control_func.js';

export const objTempl = {
  home: `<div>
   <h1>Menú</h1>
   <a href="#/cocina"><button class="btn btn-warning btn-lg">Cocina</button></a>
   <a href="#/mesas"><button class="btn btn-warning btn-lg">Mesas</button></a>
  </div>`,
  mesas: ` <div>
  <a href="#/"><button class="btn btn-warning btn-lg">Regresar</button></a>
    <figure><img src="" alt=""></figure>
   </div>`,
  desayuno: `<div>
    <h2>Desayuno</h2>
    <section id='des-list1'></section>
    <a href="#/mesas"><button class="btn btn-warning btn-lg">Regresar</button></a>
   </div>
   `,
  almuerzo: `<div>
  <h2>Almuerzo</h2>
  <section id='des-list2'></section>
  <a href="#/mesas"><button>Regresar</button></a>
  </div>
  `,
  extras: `<div>
  <h2>Acompañamiento</h2>
  <section id='des-list3'></section>
  <a href="#/mesas"><button class="btn btn-warning btn-lg">Regresar</button></a>
  </div>
  `,
  errorPag: `<div id="message">
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
  </div>`
};