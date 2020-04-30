const argv = require('./config/yargs.js').argv//estoy accediento al objeto argv y le estoy dando ese valor a la const argv
//const colors = require ('colors');


//despues de un let o un const los {}, significan destructuracio
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');

//console.log('Base',argv.base)//'Base', es un string que quiero imprimir en terminal
//console.log('Limite',argv.limite)
let comando = argv._[0];// el _ es como yards define el nombre del arreglo y entre [0] es la posicion a la que quiero acceder,, que lo que queremos es que cuando ejecute en terminal node 02-app.js xxxx  ,, identifique esa primer parabra que escribo xxxx y recorra el switch,,, osea que si no es la palabra listar o crear salga el mensaje de default.

switch (comando){
  case 'listar'://listar es la posicion [0] de let comando ejecuta este
    listarTabla(argv.base, argv.limite)
  break;

  case 'crear'://crear es la posicion [0] del array, se ejecuta este codigo
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch((err)=>console.log(err));;
  break;

  default:
    console.log( 'Comando no reconocido');
}


//en el word de Recursos de nodejs se explica bien el argv
//node tiene argumentos predefinidos que nos permiten interactuar con la terminal con comandos, y la idea es darle el valor a la variable base desde terminal
//console.log(process.argv);



//////// CREANDO COMUNICACION DEL TERMINAL CON EL PROYECTO (process.argv)/////
//let argv2 = process.argv;// me trae los argumentos cuando ejecute node 02-app.js desde terminal
//let parametro = argv2[2];// me trae el argumento en la posiciondos,, que es un string
//let base = parametro.split('=')[1];// al separar el string en la posicion [1], que es un numero, aqui la variable base toma ese valor como numero y no como un string

//////// CREANDO COMUNICACION DEL TERMINAL CON EL PROYECTO con yargs////////

//let argv2 = process.argv;//sin yargs


console.log(argv);//con yargs
//console.log(argv2);// sin yargs



