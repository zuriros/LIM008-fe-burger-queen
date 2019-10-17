// import { sum } from '../src/control_func.js';
import { arrConditional, callIdButtOfWindow, totalAmount, addElement} from '../src/control_func.js';
const objeto = { nombre: 'Papas fritas', precio: 5, tipo: 'Acompañamiento'};
const objCantidad = { nombre: 'Papas fritas', precio: 5, tipo: 'Acompañamiento', cantidad: 1};
const objData = {id: '8cF6pXRj7tzHlqchlW5M',
  data: {
    nombre: 'Café con leche',
    precio: 7,
    tipo: 'Desayuno'
  }};
const estructuraBoton = `<div>
<h5>Café con leche S/.7</h5>
</div>`;
const arrData = [
    {nombre: 'Café con leche', precio: 7, tipo: 'Desayuno', cantidad: 1},
    {nombre: 'Sándwich Jamón y queso', precio: 10, tipo: 'Desayuno', cantidad: 2},
    {nombre: 'Jugo de frutas natural', precio: 7, tipo: 'Desayuno', cantidad: 1}
  ];


describe('callIdButtOfWindow', () => {
  it('debería mostrar la data según la vista elegida', () => {
    expect(callIdButtOfWindow('Desayuno')).toBe('des-list1');
    expect(callIdButtOfWindow('Resto del día')).toBe('des-list2');
    expect(callIdButtOfWindow('Acompañamiento')).toBe('des-list3');
  });
});
// const sum = require('./src/control_func.js');
describe('arrConditional', () => {
  it('Debería agregar la propieddad "cantidad" y agregar su valor al objeto', () => {
    // primero traer el array con objetos
    arrConditional(objeto); 
    expect(objeto.cantidad).toBe(1);
  });
  //   it('agregar su valor al objeto'), () => {
    
  //   }; 
  // const secondObjeto = { nombre: 'Papas fritas', precio: 5, tipo: 'Acompañamiento', cantidad: 1};
  // arrConditional(secondObjeto); 

  // expect(secondObjeto.cantidad).toBe(2);
// });
});  

describe('addElement', () => {
  it('debería calcular el total despues de agregar 1 a cada elemto', () => {
    const i = 1;
    expect(addElement(arrData, i)).toBe(30);
  });

});

describe('totalAmount', () => {
  it('debería sumar el total de todos los productos agregados', () => {
    expect(totalAmount(arrData)).toBe(44);
  });
});
// test('arrConditional()', () => {
//     // it('Debería agregar la propieddad "cantidad" y agregar su valor al objeto', () => {
//       // primero traer el array con objetos
//       arrConditional(objeto); 
//       expect(objeto.cantidad).toBe(1);
//     //   arrConditional(objetoWhitCantidad); 
//     //   expect(objetoWhitCantidad.cantidad).toBe(2);
//     });

// it('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });