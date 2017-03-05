function resultado(){
var peso = document.getElementById("peso").value;
var estatura = document.getElementById("estatura").value;
console.log(peso);

var imc= peso/Math.pow(estatura,2);
	alert(imc.toFixed(2));

}
