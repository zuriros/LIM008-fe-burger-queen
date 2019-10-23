import { objTempl } from './template.js';
import { getFunc } from '../data_firebase/firebase_func.js';
import { htmlContent } from './productList.js';
import { buttonMenu } from './view-controller.js';

const hashTmpl = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return showTemplate('#/home');
  } else if (hash === '#/cocina' || hash === '#/mesas' || hash === '#/desayuno' || hash === '#/almuerzo' || hash === '#/extras') {
    return showTemplate(hash);
  } else {
    return showTemplate('#/errorPag');
  }
  const callSect = document.getElementById('templContainer'); 
  return callSect.appendChild(htmlContent());
};

const showTemplate = (hashTm) => {
  const cutHash = hashTm.substr(2, hashTm.length - 2);     
  // const callSect = document.getElementById('templContainer'); 
  const callSectProductList = htmlContent().querySelector('#productsList');
  // callSect.appendChild(htmlContent());
  // callSect.innerHTML = callSectProductList.appendChild(objTempl[cutHash]);
  // callSect.innerHTML = objTempl[cutHash];
  // callSect.innerHTML = htmlContent();
  // callSect.appendChild(htmlContent());
  // callSectProductList.innerHTML = '';
  callSectProductList.innerHTML = objTempl[cutHash];

  switch (cutHash) {
  case 'desayuno':
  // console.log('hash', getFunc('Desayuno').then(ele => ele));
    getFunc((arrObjFun) => {
      const name = arrObjFun.filter((ele) => {
        const dataAccordingToTipe = ele.data.tipo === 'Desayuno';
        return dataAccordingToTipe;
      });  
      name.forEach((ele) => {      
        buttonMenu(ele);   
      });
    });
    // return getFunc('Desayuno');    
    break;
  case 'almuerzo':
    getFunc((arrObjFun) => {
      const name = arrObjFun.filter((ele) => {
        const dataAccordingToTipe = ele.data.tipo === 'Resto del día';
        return dataAccordingToTipe;
      });  
      name.forEach((ele) => {      
        buttonMenu(ele);   
      });
    });
    // return getFunc('Resto del día');
    break;
  case 'extras':
    getFunc((arrObjFun) => {
      const name = arrObjFun.filter((ele) => {
        const dataAccordingToTipe = ele.data.tipo === 'Acompañamiento';
        return dataAccordingToTipe;
      });  
      name.forEach((ele) => {      
        buttonMenu(ele);   
      });
    });
    // return getFunc('Acompañamiento');
    break;
  default:
    break;
  }
};

window.addEventListener('load', hashTmpl(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => hashTmpl(window.location.hash);
