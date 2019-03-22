const lugar = require('./peticiones');
const clima = require('./clima');

/*
let resultado = lugar.getLugar(argv.direccion)
    .then(console.log)
    .catch(console.log)
console.log(resultado.lat);
//clima.getClima(resultado.lat,resultado.lng)



*/
const getInfo = async (direccion) => {
    try {
        const cords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);
        return `el clima es de  ${cords.direccion} es de ${temp}.`;
    } catch (e) {
        return `no se pudo determinar el ${direccion}.`;

    }
}


module.exports = {
    getInfo
}