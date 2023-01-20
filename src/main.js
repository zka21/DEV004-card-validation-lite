//obtener elemento por ID

const numeroTarjeta = document.getElementById("cardnumber"); // input
const botonValidar = document.getElementById("botonValidar"); // button 
let tarjetaValida  = document.getElementById("tarjetaValida");
botonValidar.addEventListener("click", isValid);
numeroTarjeta.addEventListener("input", validarCantidadDeDigitos)


function validarCantidadDeDigitos() {
  // Esta funcion tiene que validad que haya 16 digitos ni mas ni menos
  //1 saber cuantos digitos tiene numeroTarjeta.value (check)
  //2 comparar el numero de digitos con 16 (check)

  let digitos = String(numeroTarjeta.value);

  if (digitos.length >= 16) {
    digitos = digitos.slice(0, 16);
    numeroTarjeta.value = parseInt(digitos);
    botonValidar.disabled = false;
  } else {
    botonValidar.disabled = true;
  }

}


function isValid() {
  //ALGORITMO DE LUHN
  //Que el valor del input se vuelva en un string  
  const digitos = String(numeroTarjeta.value);
  const arrayDigitos = []
  let digitosInvertido = []

  //Que ese string se vuelva en un array 
  for (let i = 0; i < digitos.length; i++) {
    arrayDigitos.push(parseInt(digitos[i]));
  }

  digitosInvertido = arrayDigitos.reverse();

  for (let i = 1;i<=15;i=i+2){
    let producto=0;
    let exceso ="";
    producto=digitosInvertido[i]*2;
    
    if (producto>=10) {
      exceso=String(producto);
      producto=parseInt(exceso[0])+parseInt(exceso[1]);
    }
    digitosInvertido[i]=producto
    
  }
let suma =0;
for (let n of digitosInvertido){
  suma += n;
}

  console.log(suma);
  let resultado = 0;
  if(suma % 10 == 0 ){
    resultado = "La tarjeta ingresada es valida.";
  } else{
    resultado = "La tarjeta ingresada no es valida.";
  }
 document.getElementById("tarjetaValida").innerHTML = resultado;

}


