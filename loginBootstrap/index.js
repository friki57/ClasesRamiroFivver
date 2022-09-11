// ------------------------- Variables ------------------------
//Comillas si es texto sin comillas es numero o una variable

let nombre = "Erick";

nombre = "hola " + nombre;

// alert(nombre)


// ---------------- Condicionales --------------
nombre = "Erick";
if(nombre == "Erick")
{
  console.log("Hola")
}
else {
  console.log("No te conozco")
}

var num = 3;

if(num>0)
{
  console.log("numero positivo")
}
else {
  console.log("numero negativo")
}

// Ciclos Repetitivos

var num = 1;
while (num<=10) {
  //console.log(num);
  num = num + 1;
}

for (var i = 1; i <= 10; i++) {
  // console.log(i);
}

var boton = document.getElementById('boton');
boton.addEventListener("click",()=>
{
  var correo = document.getElementById("correo");
  var contra = document.getElementById("contra");
  console.log("El correo es: " + correo.value
  + " y la contraseña es: " + contra.value);
  if(correo.value == "aranibarerick@gmail.com"
    && contra.value == "contra")
  {
    alert("Bienvenido de nuevo Erick")
  }
  else {
    alert("Correo o contraseña equivocados")
  }
});
