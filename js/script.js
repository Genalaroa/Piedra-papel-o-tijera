


let nombre = prompt ('Introduce el nombre con el que deseas jugar ');


  Swal.fire({
    title: 'Bienvenid@ a priedra, papel o tijera  ' +nombre+ '  te deseo mucha suerte!',
    showClass: {
      popup: 'animate__animated animate__rollIn'
    },
    hideClass: {
      popup: 'animate__animated animate__rollOut'
    }
  })





const roca_div = document.getElementById ("piedra");
const papper_div = document.getElementById ("papel");
const tije_div = document.getElementById ("tijera");
let marcadorUsuario = 0;
let marcadoBot = 0;
const marcadorUsuario_span = document.getElementById("marcadorUsuario");
const marcadorBot_span = document.getElementById("marcadorBot");
const eleccion = ['piedra', 'papel', 'tijera'];
const resultado_h3 = document.querySelector("#resultado2")


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
            resultado_h3.innerHTML= "GANAS! Has escogido "+usuariochoose + " que gana a " +eleccionBot+ ".";
            
            marcadorUsuario++;
          }
          if (eleccionBot=="papel") {
            resultado_h3.innerHTML= "PIERDES! Has escogido "+usuariochoose + " que pierde contra " +eleccionBot+ ".";
            
            marcadoBot++;
          }

          if (eleccionBot=="piedra") {
            resultado_h3.innerHTML= "EMPATE! Has escogido "+usuariochoose + " que empata con " +eleccionBot+ ".";
          }
    }



    if (usuariochoose=="papel") {

          if (eleccionBot=="tijera") {
            resultado_h3.innerHTML= "PIERDES! Has escogido "+usuariochoose + " que pierde contra " +eleccionBot+ ".";
            
            marcadoBot++;
        }

          if (eleccionBot=="papel") {
            resultado_h3.innerHTML= "EMPATE! Has escogido "+usuariochoose + " que empata con " +eleccionBot+ ".";
            
          }

          if (eleccionBot=="piedra") {
            resultado_h3.innerHTML= "GANAS! Has escogido "+usuariochoose + " que gana a " +eleccionBot+ ".";
            
            marcadorUsuario++;
          }
    }



    if (usuariochoose=="tijera") {

          if (eleccionBot=="tijera") {
            resultado_h3.innerHTML= "EMPATE! Has escogido "+usuariochoose + " que empata con " +eleccionBot+ ".";
            
          }

          if (eleccionBot=="papel") {
            resultado_h3.innerHTML= "GANAS! Has escogido "+usuariochoose + " que gana a " +eleccionBot+ ".";
            
            marcadorUsuario++;
          }

          if (eleccionBot=="piedra") {
            resultado_h3.innerHTML= "PIERDES! Has escogido "+usuariochoose + " que pierde contra " +eleccionBot+ ".";
            
            marcadoBot++;
      }
    }


  
          marcadorUsuario_span.innerHTML=marcadorUsuario;
          marcadorBot_span.innerHTML=marcadoBot;
          
      console.log (usuariochoose +"||"+  eleccionBot );
  
  }

  

  




