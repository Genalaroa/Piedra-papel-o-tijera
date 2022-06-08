


let nombre = prompt ('Introduce el nombre con el que deseas jugar ');
alert ('Bienvenid@ a priedra, papel o tijera  ' +nombre+ '  te deseo mucha suerte!');



const roca_div = document.getElementById ("piedra");
const papper_div = document.getElementById ("papel");
const tije_div = document.getElementById ("tijera");

  function boteleccion () { 

    const eleccion = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random () *3);
    return eleccion [random];
    
  }


  function jugar (eleccionUsuario){ 

    const eleccionBot = boteleccion ();
    console.log (nombre+ '  a escogido  ' +eleccionUsuario);
    console.log ('El bot a escogido  ' +eleccionBot);
  }



  function opciones() { 

  
    roca_div.addEventListener('click', function(){
      jugar("piedra");
    });

    papper_div.addEventListener('click', function() {
      jugar("papel");
    });

    tije_div.addEventListener('click', function() {
      jugar("tijera");
    });

  }

  opciones();




