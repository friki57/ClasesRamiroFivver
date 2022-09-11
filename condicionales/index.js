var texto = document.getElementById("texto")
var boton = document.getElementById("boton")
var Resultado = document.getElementById("Resultado")
var texto2 = document.getElementById("texto2")
function Aumentar20() {
var numero = parseFloat(texto.value)
numero = numero*1.2
Resultado.innerHTML = numero

}
function Mayordeedad() {
var edad = parseInt(texto.value)
if (edad>=18) {
Resultado.innerHTML = "Eres Mayor"
}
else{
Resultado.innerHTML = "Eres Menor"
}
}
function ParoImpar() {
var numero= parseInt(texto.value)
if (numero % 2 == 0) {
Resultado.innerHTML = "PAR"
}
else{
Resultado.innerHTML = "IMPAR"
}
}
function Division() {
var numero1 = parseInt(texto.value)
var numero2 = parseInt(texto2.value)
var Div = 0
if( numero1>numero2){
Div= numero1/numero2
}
else{
Div = numero2/numero1
}
Resultado.innerHTML = Div
}
// boton.addEventListener("click", Aumentar20)
// boton.addEventListener("click", Mayordeedad)
// boton.addEventListener("click", ParoImpar)
boton.addEventListener("click", Division)
