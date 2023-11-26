async function obtenerRespuesta(url, message, opciones){

    await fetch(url, {
      "method": "GET",
    }).then(response => {

      if (response.status==200) {
        return response.json();
      }

    }).then((data) => {
      
      message.reply(`${data.image} ${data.name}`);
      message.reply(opciones);
    
    }).catch(err => {
      
      console.log(err);
    
    });
  
}

function enteroRandom(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}


module.exports = {
  obtenerRespuesta,
  enteroRandom,
}