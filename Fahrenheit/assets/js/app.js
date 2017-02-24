

function convertirF(){

	var x = document.getElementById("fahrenheit").value; 
	if (x !== ""){
		document.getElementById("celsius").value=((9/5)*x +32).toFixed(2);
	}
	

}

function convertirC(){

	var x = document.getElementById("celsius").value;
	if (x !== ""){
	document.getElementById("fahrenheit").value=((x-32)*(5/9)).toFixed(2);
	}

}



