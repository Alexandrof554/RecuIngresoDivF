function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantMat;
    let notPromAl;
    let edad;
    let notaMaxFisica;
    let nombreFisica;
    let edadMaxF;
    let nombreFemen;
    let contFisica = 0;
    let contQuimica = 0;
    let contSistemas = 0;
    let contAlumnos = 0;
    let contMat = 0;
    let nombreMaxMat;
    let edadMaxMat;
    let flagMaxMat;

    for (cont = 1 ; cont <= 500 ; cont++){

        edad = parseInt(prompt("Ingrese su edad: "));
        while (isNaN(edad) || edad <= 0) {
            edad = parseInt(prompt("ERROR, ingrese su edad: "));
		}

        sexo = prompt("Ingrese sexo: m/f/no binario").toLowerCase();
        while (sexo != "m" && sexo != "f" && sexo != "no binario") {
        	sexo = prompt("Error, Ingrese sexo: m/f/no binario").toLowerCase();
		}

        carrera = prompt("Ingrese carrera: Quimica/Fisica/Sistemas");
        while (carrera != "Quimica" &&carrera != "Fisica" &&carrera != "Sistemas") {
        carrera = prompt("Error, Ingrese carrera: Quimica/Fisica/Sistemas");
		}

        contAlumnos++;

        notPromAl = parseInt(prompt("Ingrese nota promedio: "));
        while (isNaN(notPromAl) || notPromAl <= 10 || notPromAl >= 0) {
            notPromAl = parseInt(prompt("ERROR, Ingrese nota promedio: "));
		}

        cantMat = parseInt(prompt("Ingrese nota promedio: "));
        while (isNaN(cantMat) || cantMat <= 5 || cantMat > 0) {
            cantMat = parseInt(prompt("ERROR, Ingrese nota promedio: "));
        }    

        //a
        if (flagFisica || (carreta == "Fisica" && notaMaxFisica < notPromAl) ){
            notaMaxFisica = notPromAl;
            nombreFisica = nombre;
        }
        
        //b)
        if (sexo == "f" && edadMaxF < edad){
            edadMaxF = edad;
            nombreFemen = nombre;
        }

        //c)
        if (carrera == "Fisica"){
            contFisica++;
            if (contMat > cantMat){
                contMat = cantMat;
                nombreMaxMat = nombre;
                edadMaxMat = edad;
                flagMaxMat = 0;
            }
        }else if (carrera == "Quimica"){
            contQuimica++;
        }else{
            contSistemas++;
            if (contMat > cantMat){
                contMat = cantMat;
                nombreMaxMat = nombre;
                edadMaxMat = edad;
                flagMaxMat = 0;
            }
        }


        
    }
    //final for.

    //a)
    alert("El nombre del mejor promedio de fisica es: " + nombreFisica);

    //b)
    alert("La alumna mas joven es: " + nombreFemen);
    //c)
    if (contFisica != 0){
		promF = contAlumnos / contFisica;
	}
			
	if (contQuimica != 0){
		promQ = contAlumnos / contQuimica;
	}

	if ( contSistemas != 0){
		promS = contAlumnos / contSistemas ;
	}
	alert(`a- promedios Fisica: %${promF}, Quimica: %${promQ}, Sistemas: %${promS}`);


    //d)

    if (flagMaxMat){
        alert("La persona con mas materias es: " + nombreMaxMat + ", edad " + edadMaxMat);
    }else{
        alert("no se ingresaron estudiantes de Sistemas o Fisica.");
    }





}
