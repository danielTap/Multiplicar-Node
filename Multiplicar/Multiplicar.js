const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base,limite = 10) => {
    return  new Promise((resolve,reject) => {
        if(!Number(base)){
            reject(`El valor '${base}' no es un numero`);
            return;
        }
        let contenido = `Tabla del ${base}\n\n`;
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`Tablas/Tabla-${base}.txt`,contenido,(err) =>{
            if (err) 
                reject(err)
            else 
                resolve(`Tabla-${base}.txt`)
        });
    });
};

let listarTabla = (base,limite = 10) => {
    console.log('-----------------------'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('-----------------------'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
    console.log(`\n`);
};

module.exports = {
    crearArchivo,
    listarTabla
}
/*
es igual a 
module.exports.crearArchivo = (base) => {
    return  new Promise((resolve,reject) => {
        let contenido = `Tabla del ${base}\n\n`;
        for (let i = 1; i <= 10; i++) {
            contenido += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`Tablas/Tabla-${base}.txt`,contenido,(err) =>{
            if (err) 
                reject(err)
            else 
                resolve(`Tabla-${base}.txt`)
        });
    });
};

*/