const fechaInicio = new Date('2022-11-12T00:00:00')

const actualizarContador = setInterval(() => {
  const tiempoTranscurrido = Date.now() - fechaInicio.getTime();

  const diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
  const horasTranscurridas = Math.floor((tiempoTranscurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosTranscurridos = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60));
  const segundosTranscurridos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);
  const mesesTranscurridos = Math.floor(diasTranscurridos / 30);

  const diasRestantes = diasTranscurridos % 30;

  
  if(mesesTranscurridos < 10) document.getElementById('meses').textContent = '0' + mesesTranscurridos;
  else document.getElementById('meses').textContent = mesesTranscurridos;
  if(diasRestantes < 10) document.getElementById('dias').textContent = '0' + diasRestantes;
  else document.getElementById('dias').textContent = diasRestantes;
  if(horasTranscurridas < 10) document.getElementById('horas').textContent = '0' + horasTranscurridas;
  else document.getElementById('horas').textContent = horasTranscurridas;
  if(minutosTranscurridos < 10) document.getElementById('minutos').textContent = '0' + minutosTranscurridos;
  else document.getElementById('minutos').textContent = minutosTranscurridos;
  if(segundosTranscurridos < 10) document.getElementById('segundos').textContent = '0' + segundosTranscurridos;
  else document.getElementById('segundos').textContent = segundosTranscurridos;
}, 1000);

let texto = '0'
let resultado = 113412

const display = document.getElementById('texto');
display.innerText = texto

function funcionBorrar(){
  if (texto.length == 1) texto = '0'
  else if (texto.charAt(texto.length - 1) == ' ') texto = texto.substring(0, texto.length - 3)
  else texto = texto.substring(0, texto.length - 1)
  display.innerText = texto
}

function funcionBorrarTodo(){
  texto = '0'
  resultado = 0
  display.innerText = texto
}

function funcionIgual(){
  if(texto.charAt(texto.length - 1) != ' ') {
    if (eval(texto) % 1 != 0) resultado = (eval(texto)).toFixed(2)
    else resultado =eval(texto)
    texto = resultado.toString()
    display.innerText = texto
  }
}

function funcionTeclaNumero(palabra){
  if ((texto.length == 1 && texto == '0') || (texto.length == 2 && texto == '00')){
    texto = "" + palabra;
  }
  else if (texto.charAt(texto.length - 1) == ' ' && palabra.charAt(palabra.length - 1) == ' ') {
    texto = texto
  }
  else if (palabra == '.' && texto.charAt(texto.length - 1) != ' ' && texto.charAt(texto.length - 1) != '.'){
    texto = texto + palabra
  }
  else {
    textoMemoria = texto
    texto = texto + palabra
  }
  display.innerText = texto
}

