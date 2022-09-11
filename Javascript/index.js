//String es texto y Number o Int(enteros) o Float(decimales) son numeros


var salida = document.getElementById('salida')
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var boton = document.getElementById('boton')

boton.addEventListener("click",
()=>
{
  salida.innerHTML = parseInt(num1.value) + parseInt(num2.value)
})

var reloj = document.getElementById('reloj')
setInterval(()=>
{
  reloj.innerHTML = new Date().toString()
}, 1000)

var nombres = ["erick", "ramiro", "luis", "marcos"]
var arreglo = document.getElementById('arreglo')

var textoFinal = ""
for (var i = 0; i < nombres.length; i++) {
  textoFinal += " - " + nombres[i]
}
arreglo.innerHTML = textoFinal




var carrito = []
function objetoProducto() //clase
{
  nombre = ""
  precio = 0
}
var producto = document.getElementById('producto')
var precioInput = document.getElementById('precio')
var añadir = document.getElementById('añadir')
añadir.addEventListener("click", ()=>
{
  var x = new objetoProducto() //Instancia u objeto
  x.nombre = producto.value
  x.precio = parseFloat(precioInput.value)
  carrito.push(x)

  var textoFinal = ""
  for (var i = 0; i < carrito.length; i++) {
    textoFinal += "Producto: " + carrito[i].nombre +
     " - Precio: " +carrito[i].precio + "\n"
  }
  arreglo.innerHTML = textoFinal

  var total = document.getElementById('total')
  var suma = 0;

  for (var i = 0; i < carrito.length; i++) {
    suma += carrito[i].precio
  }

  total.innerHTML = suma
})

Anydesk





// setTimeout(
//   ()=> //funcion a ejecutar
//   {
//     //salida.innerHTML = "Hola Erick"
//   }
//   ,
//   2000 //Tiempo en mimlissegundos
// )
// var num = 0;
// var intervalo = setInterval(
//   ()=>
//   {
//     num++
//     salida.innerHTML = "Hola " + num
//     if(num == 10)
//     {
//       clearInterval(intervalo)
//     }
//   }
//   ,
//   1000
// )
