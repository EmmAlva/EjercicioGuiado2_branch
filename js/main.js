function IMC(talla,peso){
  var datos =  document.getElementById("datos");
  var peso = document.getElementById('peso').value;
  var talla = document.getElementById("talla").value;
  alert(Math.round(peso/ Math.pow(talla,2)));
}
