import { objTempl } from './template.js';
import { getFunc } from '../data_firebase/firebase_func.js';
import { htmlContent } from './productList.js';
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
    return getFunc('Desayuno');
    break;
  case 'almuerzo':
    return getFunc('Resto del día');
    break;
  case 'extras':
    return getFunc('Acompañamiento');
    break;
  default:
    break;
  }
};

window.addEventListener('load', hashTmpl(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => hashTmpl(window.location.hash);
