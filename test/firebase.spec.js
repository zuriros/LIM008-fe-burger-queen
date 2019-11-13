import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Menu: {
      __doc__: {
        comida1: {
          nombre: 'Queso',
          precio: 1,
          tipo: 'Acompañamiento'
            
        },
        comida2: {
          nombre: 'Hamburguesa simple pollo',
          precio: 10,
          tipo: 'Resto del día' 
        },
      },
    },
    Pedidos: {
      __doc__: {
        pedido: {
          costumerName: 'Mafe',
          date: '5 de noviembre de 2019 a las 18:24:53 UTC-5',
          order: [{
            cantidad: 6,
            nombre: 'Hamburguesa doble res'}],
          status: 'pendiente'
        }
      }
    }
  }
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { addProducts, getFunc, getPedido } from '../firebaseDoc/dataFirebase.js';
import { forEachElementOfGetFunc } from '../src/controller.js';

const newArr = [
  {cantidad: 6,
    nombre: 'Hamburguesa doble res'
  }];
describe('addProducts', () => {
  it('debería agregar la data a firebase', (done) => {
    return addProducts('zuri', newArr, new Date(), 'pendiente').then((data) => {
      const callback = (objts) => {        
        const findObjAdd = objts.find((ele) => {
          return ele.data.customerName === 'zuri';       
        });
        const result = findObjAdd.data.customerName;        
        expect(result).toBe('zuri');
        done();
      };
      getPedido(callback);
    });
  });
});
describe('getFunc', () => {
  it('debería traer la data de firebase', (done) => {
    return getFunc(data => {
      const result = data.length;
      expect(result).toBe(2);
      done();
    });
  });
});