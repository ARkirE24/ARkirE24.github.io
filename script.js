
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