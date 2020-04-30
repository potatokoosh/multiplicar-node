// clase 30 SIN YARGS
// Clase 33 Con  yargs

const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

//const argv = require('yargs').argv;// se trae el argv con el paquete yargs
const argv = require('yargs')
//el primer argumento de command es el nombre que le queremos dar al argumento
//el segundo argumento es una ayuda al usuario
// el tercer argumento es un objeto {}, que es donde indicamos los parametros o los flags que queremos que reciba ese command,, y podemos pober atributos como que sea un obajeto oblicagorio por eso ponemos {demand: true, alias: 'abreviatura'}
    .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar',opts)
    .help()
    .argv;

    module.exports = {
      argv
    }