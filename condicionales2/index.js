var texto = document.getElementById("texto")
var boton = document.getElementById("boton")
var Resultado = document.getElementById("Resultado")
var texto2 = document.getElementById("texto2")
var texto3 = document.getElementById("texto3")
function Aumentar20() {
var numero = parseFloat(texto.value)
numero = numero * 1.2
Resultado.innerHTML = numero

}
function Mayordeedad() {
var edad = parseInt(texto.value)
if (edad >= 18) {
Resultado.innerHTML = "Eres Mayor"
}
else {
Resultado.innerHTML = "Eres Menor"
}
}
function ParoImpar() {
var numero = parseInt(texto.value)
if (numero % 2 == 0) {
Resultado.innerHTML = "PAR"
}
else {
Resultado.innerHTML = "IMPAR"
}
}
function Division() {
var numero1 = parseInt(texto.value)
var numero2 = parseInt(texto2.value)
var Div = 0
if (numero1 > numero2) {
Div = numero1 / numero2
}
else {
Div = numero2 / numero1
}
Resultado.innerHTML = Div
}
function Division0() {


var numero1 = parseInt(texto.value)
var numero2 = parseInt(texto2.value)
if (numero2 == 0) {
Resultado.innerHTML = "ERROR"


} else {
Div = numero1 / numero2


Resultado.innerHTML = Div
}



}
function Contrasena(){
var palabra =(texto.value)
var nombre = (texto2.value)
if(palabra == "contra"){
Resultado.innerHTML = "BIENVENIDO " + nombre
}
else{
Resultado.innerHTML = "ERROR"
}









}

function Promedio(){
var numero = parseInt(texto.value)
var numero1 = parseInt(texto2.value)
var numero2 = parseInt(texto3.value)
var suma = numero + numero1 + numero2
var division = suma/3
if(division > 50){
Resultado.innerHTML = "APROBADO"
}
else{

Resultado.innerHTML = "DESAPROBADO"
}








}


// boton.addEventListener("click", Aumentar20)
// boton.addEventListener("click", Mayordeedad)
// boton.addEventListener("click", ParoImpar)
// boton.addEventListener("click", Division)
// boton.addEventListener("click", Division0)
// boton.addEventListener("click", Contrasena)
boton.addEventListener("click", Promedio)
