 function IMC(){
 	var datos =  document.getElementById("datos");
	var peso = document.getElementById("peso").value;//al ser "string" convertir con parseInt o parseFloat
	var estatura = document.getElementById("estatura").value;
		console.log(peso);
		if(peso !== "" || estatura !== "" ){
			var imc= peso/Math.pow(estatura,2);//var imc= peso.toFixed(2)/Math.pow(estatura,2) --> no imprime asi, por qué?? Al parecer porque los valores que se ingresasn son "string" y toFixed no funciona con ese tipo de variable :/
			alert(imc.toFixed(2));
		}
		else
		alert("Ingrese sus datos");

		//var imc = (peso/Math.pow(estatura,2));

		}
/*

function IMC(){
  var datos =  document.getElementById("datos");
  var peso = document.getElementById('peso').value;
  var talla = document.getElementById("estatura").value;
  alert(Math.round(peso/ Math.pow(talla,2)));
}
*/


