
function mostrar()
{
	let edad;
	let seguir;
	let nombre;
	let sexo;
	let puesto;
	let sueldo;
	let flagSuelF;
	let contAnalista;
	let contQa;
	let contProgram;
	let sueldoF = 0;
	let sueldoM = 0;
	let sueldoNB = 0;
	let maxSuelF;
	let contNBmas2men55;

	do{
	nombre = prompt("Ingrese su nombre: ");
	edad = parseInt(prompt("Ingrese su edad: "));
        while (isNaN(edad) || edad <= 0) {
            edad = parseInt(prompt("ERROR, ingrese su edad: "));
		}
	sexo = prompt("Ingrese sexo: m/f/no binario").toLowerCase();
        while (sexo != "m" && sexo != "f" && sexo != "no binario") {
        	sexo = prompt("Error, Ingrese sexo: m/f/no binario").toLowerCase();
		}
	puesto = prompt("Ingrese puesto de trabajo: programador/analista/Qa").toLowerCase();
        while (puesto != "programador" && puesto != "analista" && puesto != "Qa") {
        	puesto = prompt("Error, Ingrese puesto de trabajo: m/analista/Qa").toLowerCase();
		}
	sueldo = parseInt(prompt("Ingrese sueldo: "));
        while (isNaN(sueldo) || sueldo <= 70000 || sueldo >= 15000) {
            sueldo = parseInt(prompt("ERROR, Ingrese sueldo: "));
		}
	
	//a) contador

	if (puesto == "programador"){
		contProgram++;
		contProgram += sueldo; 
	}else if( puesto == "analista"){
		contAnalista++;
		contAnalista += sueldo;
	}else{
		contQa++;
		contQa += sueldo;
		if (sueldo >= 20000 && sueldo <= 55000){
			contNBmas2men55++;
		}
	}
	
	//b)sexo mayore sueldo

	switch (sexo){
		case "f":
			sueldoF = suedo;
			break;
		case "m":
			sueldoM = sueldo;
			break;
		case "no binario":
			sueldoNB = sueldo;
			break;
	}	
	
	//c)
	if (flagsuelF && sexo == "f"){
		maxSuelF = sueldo;
		flagSuelF = 0;
	}

	seguir = prompt("Ingresar otro s/n").toLowerCase();
	}while(seguir == "s");



	//a
	if (contAnalista != 0){
		promA = acumAnalista / contAnalista;
	}
			
	if (contProgram != 0){
		promP = acumProgram / contaProgram;
	}

	if (contQa != 0){
		promQ = acumQa / contaQa;
	}
	alert(`a- promedios analista: %${promA}, programador %${promP}, Qa %${promQ}`);


	//b)

	if (sueldoF > sueldoNB && sueldoF > sueldoM){
		maySueldo = "Femenino";
	}else if (sueldoNB >=sueldoF && sueldoNB > sueldoM){
		maySueldo = "No binario";
	}else{
		maySueldo = "Masculino";
	}
	alert("b- Mayor sueldo: " + maySueldo);

	//c)
	if (flagSuelF){
		alert("No se ingresaron empleados femeninos.");
	}else{
		alert("El mayor sueldo femeninos es: " + maxSuelF);
	}

	//d)

	alert("Cantidad de no binarios entre 20000 y 55000: " + contNBmas2men55);



}
