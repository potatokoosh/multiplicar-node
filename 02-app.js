// clase 30
//despues de un let o un const los {}, significan destructuracio
const {crearArchivo} = require('./multiplicar/multiplicar.js');


let base = 's';

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch((err)=>console.log(err));