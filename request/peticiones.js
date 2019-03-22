const axios = require ('axios');

const getLugar =async (dir) =>{
    const encodedUrl = encodeURI(dir);
    const instance = axios.create ({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers:{'X-RapidAPI-Key':'9c0fc709b1mshee52c1fcb5e195cp1e33fajsnd775f671fef9'}
    });

const resp = await  instance.get();
if (resp.data.Results.length===0){
    throw  new  Error (`No hay resultados para el pais ${direccion}`)
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const lng = data.lon;

    return{
        direccion,
        lat,
        lng
    }
}

module.exports={
    getLugar
}