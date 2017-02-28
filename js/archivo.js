function resultado(){
var peso = document.getElementById("peso").value;//al ser "string" convertir con parseInt o parseFloat
var estatura = document.getElementById("estatura").value;
console.log(peso);
if(peso !== "" || estatura !== "" ){
	var imc= peso/Math.pow(estatura,2);//var imc= peso.toFixed(2)/Math.pow(estatura,2) --> no imprime asi, por qué?? Al parecer porque los valores que se ingresasn son "string" y toFixed no funciona con ese tipo de variable :/
	alert(imc.toFixed(2));
}
else
alert("Error");

//var imc = (peso/Math.pow(estatura,2));

}