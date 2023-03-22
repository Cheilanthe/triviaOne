  var participante = window.prompt("Ingresa tu nombe");
  alert ('Hola ' + participante + '\n ¡Que comience el juego!');



/*Se establece la dinámica de los botones*/
function mostrar(){
document.getElementById('capitales').style.display = 'block';
document.getElementById('boton2').style.display= 'none';
}
function mostrar2(){
document.getElementById('monedas').style.display = 'block';
document.getElementById('boton1').style.display= 'none';
}
function ocultar(){
document.getElementById('capitales').style.display = 'none';
document.getElementById('boton2').style.display= 'block';
}

function ocultar2(){
document.getElementById('monedas').style.display = 'none';
document.getElementById('boton1').style.display= 'block';
}
/*es la función para contabilizar respuestas correctas y result*/
function resultadoscap (){
 var r1, r2, calificacion; 
  if (document.getElementById('r11').checked==true)
  r1=1
    else
  r1=0
  if (document.getElementById('r21').checked==true)
  r2=1
    else
  r2=0;
  calificacion = r1+r2;
  alert("¿Estas seguro?")
  alert("Total de respuestas correctas: " + calificacion + " " + 
       "\n Total de respuestas incorrectas: " + (2-calificacion));
}

function resultadosmoneda (){
 var r1, r2, calificacion; 
  if (document.getElementById('r41').checked==true)
  r1=1
    else
  r1=0
  if (document.getElementById('r52').checked==true)
  r2=1
    else
  r2=0;
  calificacion = r1+r2;
  alert("¿Estas seguro?")
  alert("Total de respuestas correctas: " + calificacion + " " + 
       "\n Total de respuestas incorrectas: " + (2-calificacion));
}