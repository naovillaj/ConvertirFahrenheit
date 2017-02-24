function sumarDosNumeros(){
	test(9, suma(4,5));
	test(-8, suma(-18, 10));
	test(1234, suma(1000, 234));
}

function sumaDosStrings(){
	test(9, suma("4","5"))
}

function sumaUnNumero(){
	test(5,suma(5));
	test(10,suma(10));
}


function test(expected, result){
	if (expected === result){
		console.log("Verde");
	} else {
		console.log("Rpjo");
	}
}

function testAll(){
	sumarDosNumeros();
	sumaDosStrings();
	sumaUnNumero();
}


//Ejecuta todo
testAll();