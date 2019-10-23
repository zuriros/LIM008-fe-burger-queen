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
          nameCostumer: 'Estela',
          nombre: 'Hamburguesa simple pollo',
          tipo: 'pedido',
          total: 1 
        },
      }
    }
  }
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
import { addProducts, getFunc } from '../data_firebase/firebase_func.js';
import { forEachElementOfGetFunc } from '../src/control_func.js';
describe('addProducts', () => {
  it('debería agregar la data a firebase', (done) => {
    return addProducts('zuri', 'Hamburguesa doble pollo', 'pedido', 2).then((data) => {
      const callback = (objts) => {
        const findObjAdd = objts.find((ele) => {
          return ele.data.tipo === 'pedido' && ele.data.customerName === 'zuri';       
        });
        const result = findObjAdd.data.customerName;        
        expect(result).toBe('zuri');
        done();
      };
      getFunc(callback);
    });
  });
});