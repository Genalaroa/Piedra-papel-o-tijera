


let nombre = prompt ('Introduce el nombre con el que deseas jugar ');
alert ('Bienvenid@ a priedra, papel o tijera  ' +nombre+ '  te deseo mucha suerte!');



const roca_div = document.getElementById ("piedra");
const papper_div = document.getElementById ("papel");
const tije_div = document.getElementById ("tijera");
let marcadorUsuario = 0;
let marcadoBot = 0;
const marcadorUsuario_span = document.getElementById("marcadorUsuario");
const marcadorBot_span = document.getElementById("marcadorBot");
const eleccion = ['piedra', 'papel', 'tijera'];



  function boteleccion () { 
    const random = Math.floor(Math.random () *3);
    return eleccion [random];
    
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



  function jugar (usuariochoose){ 

    const eleccionBot = boteleccion ();

    if (usuariochoose=="piedra") {

          if (eleccionBot=="tijera") {
            alert(usuariochoose+" gana a "+eleccionBot+" Tu ganas!");
            marcadorUsuario++;
          
          }
          if (eleccionBot=="papel") {
          
            alert(eleccionBot+" gana a "+usuariochoose+" Perdiste!");
            marcadoBot++;
          }
          if (eleccionBot=="piedra") {
            
            alert(usuariochoose+" empata con "+eleccionBot+" Empate!");
          }
          
    }


    if (usuariochoose=="papel") {

      if (eleccionBot=="tijera") {
        
        alert(eleccionBot+" gana a "+usuariochoose+" Perdiste!");
        marcadoBot++;
      }
      if (eleccionBot=="papel") {
      
        alert(usuariochoose+" empata con "+eleccionBot+" Empate!");
      }
      if (eleccionBot=="piedra") {
      
        alert(usuariochoose+" gana a "+eleccionBot+" Tu ganas!");
        marcadorUsuario++;
      }
      

}

if (usuariochoose=="tijera") {

  if (eleccionBot=="tijera") {
    
    alert(usuariochoose+" empata con "+eleccionBot+" Empate!");
  }
  if (eleccionBot=="papel") {
    
    alert(usuariochoose+" gana a "+eleccionBot+" Tu ganas!");
    marcadorUsuario++;
  }
  if (eleccionBot=="piedra") {
  
    alert(eleccionBot+" gana a "+usuariochoose+" Perdiste!");
    marcadoBot++;
  }
}
  

          marcadorUsuario_span.innerHTML=marcadorUsuario;
          marcadorBot_span.innerHTML=marcadoBot;
          
      console.log (usuariochoose +"||"+  eleccionBot );
   // 
  }




