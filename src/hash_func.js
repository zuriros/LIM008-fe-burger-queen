import { objTempl } from './template.js';
import { getFunc } from '../data_firebase/firebase_func.js';


const hashTmpl = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return showTemplate('#/home');
  } else if (hash === '#/cocina' || hash === '#/mesas' || hash === '#/desayuno' || hash === '#/almuerzo') {
    return showTemplate(hash);
  } else {
    return showTemplate('#/errorPag');
  }
};

const showTemplate = (hashTm) => {
  const cutHash = hashTm.substr(2, hashTm.length - 2);    
  const callSect = document.getElementById('templContainer');
  callSect.innerHTML = objTempl[cutHash];
  switch (cutHash) {
  case 'desayuno':
    return getFunc('Desayuno');
    break;
  case 'almuerzo':
    return getFunc('Resto del día');
    break;
  default:
    break;
  }
};

window.addEventListener('load', hashTmpl(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => hashTmpl(window.location.hash);


const eventShowData = (idButton) => {
  document.getElementById(idButton).addEventListener('click', () => {
    document.getElementById('hola').innerHTML = 'holaaass';
  });
};  
eventShowData('8cF6pXRj7tzHlqchlW5M');