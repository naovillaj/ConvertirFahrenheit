

function convertirF(){

	var x = document.getElementById("fahrenheit"); 
	document.getElementById("celsius").value=(9/5)*x.value+32;

}

function convertirC(){

	var x = document.getElementById("celsius"); 
	document.getElementById("fahrenheit").value=(x.value-32)*(5/9);

}



