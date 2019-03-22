

const argv =require ('yargs').options({
    direccion:{
        alias:'d',
        desc:'direccon de la ciuidad para obtener el clima'
    }
}).argv;

module.exports={
    argv
};