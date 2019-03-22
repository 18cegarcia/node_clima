const argv =require ('./config/yargs').argv;
const procesos  =require ('./request/procesos');

let resp = procesos.getInfo(argv.direccion)
    .then(console.log);





