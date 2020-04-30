// clase 30
// requireds
const fs = require('fs');// obligatorio para poder usar fs.writeFile
const colors = require ('colors');

let listarTabla = (base, limite = 10 )=>{
  console.log('======================='.green);
  console.log(`==tabla de ${base}====`.green);
  console.log('======================='.green);
  for (let i = 1; i <= limite ; i++){
    console.log(`${base} * ${i} = ${base * i}`.red)
  }
}


  let crearArchivo = (base, limite = 10)=>{
    return new Promise ((resolve, reject)=>{

        if(!Number(base)){
          reject (`El valor introducido ${base} no es un nùmero`);
          return;//este return es para que pare la funcion aqui
        }
          let data ='';//pongo un string vacio por que con el for le doy los valores

          for (let i = 1; i <= limite ; i++){
            data +=`${base} * ${i} = ${base * i}\n`;// el \n es un enter
            // el += lo que hace es que guarda todos los resultado en la variable data, si no puciera el + y solo pongo =, lo que haria es que solo guarda la ultima operacion en la variable data ,,,y la menciono arriba del for como una variable vacia primero.
          }

          //const data = new Uint8Array(Buffer.from('Hello Node.js'));
          //el primer parametro es el nombre del archivo con el que lo va a crear, y la ubicacion si quiero guardarlo en un lugar diferente
          // el segundo parametro es lo que va a tener por dentro el archivo
          // y el tercer parametro es el error
          //al poner el nombre del archivo con `${}`, lo que hace es que si vuelve dinamica y si cambio el valor de la base se guarda como un archivo nuevo y no reescribe porque el archivo cambia de nombre
          fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (err) => {

            if (err) 
                reject (err)
            else 
                resolve(`tabla-${base}-al-${limite}.txt`.blue)// este es el mensaje que sale en consola cuando no hay un error, adicinal de resolver el         fs.writeFile
            
          });

   });
}

module.exports = {
  crearArchivo,
  listarTabla
}
//dentro de {} la exprecion va el nombre de como vamos a exportar la funcion, pero por ES6 si lo vamos a exportar con el mismo nombre de la variable no es necesario porner 
//MismoNombre: MismoNombre
