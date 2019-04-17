import { objTempl } from './template.js';

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
};

window.addEventListener('load', hashTmpl(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => hashTmpl(window.location.hash);


// window.onload = () => {
//   const callId = document.getElementById('templContainer');
//   callId.innerHTML = objTempl.home;
// };


