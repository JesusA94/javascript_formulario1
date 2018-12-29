//1.- Validar que los datos no esten vacíos, que la cédula y la nota solo reciban números, 
//que la nota tenga un valor entre 0 y 100.
document.formulario.cedula.onkeypress=function(e)
{
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
  if (tecla==8) return true; 
  patron = /[0-9-]/;
  te = String.fromCharCode(tecla);
  return patron.test(te);
}
document.formulario.nota.onkeypress=function(e)
{
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
  if (tecla==8) return true; 
  patron = /[0-9-]/;
  te = String.fromCharCode(tecla);
  return patron.test(te);
}
document.formulario.nombre.onkeypress=function(e)
{
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
    if (tecla==8) return true; 
	patron =/[A-Za-z\s]/;
    te = String.fromCharCode(tecla); 
    return patron.test(te);
}

document.formulario.cedula.onblur=validarCedula;
document.formulario.nombre.onblur=validarNombre;
document.formulario.nota.onblur=validarNota;

function validarCedula()
{
  var cedula = document.formulario.cedula.value;
  if (cedula=="")
  {
    document.getElementById("campoCedula").innerHTML="Complete este campo";
    return false
  }
  else
  {
    document.getElementById("campoCedula").innerHTML="";
    return true
  }
}

function validarNombre()
{
  var nombre = document.formulario.nombre.value;
  if(nombre=="")
  {
    document.getElementById("campoNombre").innerHTML="Complete este campo";
    return false;
  }
  else
  {
    document.getElementById("campoNombre").innerHTML="";
    return true;
  }
}
 
function validarNota()
{
  var nota = document.formulario.nota.value;
  if(nota=="" ||nota < 0 || nota>100)
  {
    document.getElementById("campoNota").innerHTML="La Nota tiene que ser entre 0 y 100";
    return false;
  }
  else
  {
    document.getElementById("campoNota").innerHTML="";
    return true;
  }
}
//2.- Definir una función constructora para crear un objeto de la clase Alumno, que tenga 
//los atributos: cedula, nombre y nota
function Alumno(cedula, nombre, nota)
{
  this.cedula = cedula;
  this.nombre = nombre;
  this.nota = nota;
}
//3.- Definir la función constructora para crear un objeto de la clase Seccion, que tenga los atributos:
//número, curso y alumnos (un arreglo de la clase Alumno). 
//Programar en la clase Sección un método que calcule el promedio de notas de los alumnos de la sección
function Seccion(numero,curso,alumnos)
{
  this.numero = numero;
  this.curso = curso;
  this.alumnos = alumnos;
  this.PromedioNotas=function()
  {
      var promedio
      var acumulador=0
      for (let cont=0; cont< alumnos.length; cont++)
      {
        acumulador=acumulador+parseInt(alumnos[cont].nota)
      }
      promedio=acumulador/alumnos.length
      return promedio
  }
}
//4.- Crear un objeto de la clase Seccion al cargarse la página, con un número y un nombre de curso arbitrarios.
//Mostrar en algún lugar de la página el número de la sección, el nombre del curso y el promedio de la sección
var seccion=new Seccion("2761","JavaScript Nivel III",[])
document.getElementById("titulo-seccion").innerHTML = "Sección: " + seccion.numero + " " + seccion.curso

//5.- Cuando el usuario haga click en un botón para agregar al alumno a la sección y los datos sean válidos, 
//se debe crear un objeto de la clase Alumno usando los datos obtenidos del formulario, para luego agregar al alumno
// a la sección. Mostrar en algún de la página los datos del nuevo alumno y el promedio actualizado de la sección
document.getElementById("agregar").onclick=function()
{
  if(validarCedula() && validarNombre() && validarNota())
    {
      var ced = document.formulario.cedula.value;
      var nom = document.formulario.nombre.value;
      var not = document.formulario.nota.value;
      var datos = new Alumno(ced,nom,not);
      seccion.alumnos.push(datos)
      document.getElementById("alumnoCedula").innerHTML+=ced+ "<br>";
      document.getElementById("alumnoNombre").innerHTML+=nom+ "<br>";
      document.getElementById("alumnoNota").innerHTML+=not+ "<br>";
      document.getElementById("promedio").innerHTML="Promedio de la Seccion: " + seccion.PromedioNotas()
      formulario.reset()
    }
}