// requireds
const fs = require('fs');// obligatorio para poder usar fs.writeFile


let base = 2;
let data ='';//pongo un string vacio por que con el for le doy los valores

for (let i = 1; i <= 10 ; i++){
  data +=`${base} * ${i} = ${base * i}\n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
//el primer parametro es el nombre del archivo con el que lo va a crear, y la ubicacion si quiero guardarlo en un lugar diferente
// el segundo parametro es lo que va a tener por dentro el archivo
// y el tercer parametro es el error
//al poner el nombre del archivo con `${}`, lo que hace es que si vuelve dinamica y si cambio el valor de la vase se guarda como un archivo nuevo y no reescribe porque el archivo cambia de nombre
fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {

  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
});