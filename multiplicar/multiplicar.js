// clase 30
// requireds
const fs = require('fs');// obligatorio para poder usar fs.writeFile

  let crearArchivo = (base)=>{
    return new Promise ((resolve, reject)=>{

        if(!Number(base)){
          reject (`El valor introducido ${base} no es un nùmero`);
          return;//este return es para que pare la funcion aqui
        }
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

            if (err) 
                reject (err)
            else 
                resolve(`tabla-${base}.txt`)
            
          });

   });
}

module.exports = {
  crearArchivo
}
//dentro de {} la exprecion va el nombre de como vamos a exportar la funcion, pero por ES6 si lo vamos a exportar con el mismo nombre de la variable no es necesario porner 
//MismoNombre: MismoNombre
