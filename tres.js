function mostrar()
{
	let nombreClie;
	let cantLamp;
	let marca;
	let precio;
	let precioTotal;
	let seguir;
	let precioDescAr = 0;
	let precioDescFe = 0;
	let flagDesc;
	let contFeli = 0;
	let contArge = 0;
	let contIllu = 0;
	let contCant = 0;
	let precioTotalConDescuento;
	let precioTotDesc;

	do{
		nombreClie = prompt("Ingrese su nombre: ");
		cantLamp = prompt("Ingrese cantidad de lamparas: ");
			while (isNaN(cantLamp)){
				cantLamp = prompt("Error, ingrese cantidad de lamparas: ");
			}
		marca = prompt("Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis");
			while (marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis") {
				marca = prompt("Error, Ingrese sexo: FelipeLamparas/ArgentinaLuz/Illuminatis");
			}
		precio = prompt("Ingrese precio: ");
			while (isNaN(precio)){
				precio = prompt("Error, ingrese precio: ");
			}

		switch(marca){
			case "FelipeLamparas":
				if(cantLamp > 5){
					precioDescFe += precio * 0,10;
					flagDesc = 0;
				}
				contfeli++;
				break;
			case "ArgentinaLuz":
				if (cantidad >= 3){
					precioDescAr += precio * 0,05;
					flagDesc = 0;
				}
				contArge++;
				break;
			case "Illuminatis":
				contIllu++;
				break;
		}

		precioTotal += precio;
			alert("Precio total: " + precioTotal);

		contCant++;

		seguir = prompt("Desea ingresar otro articulo: s/n").toLowerCase;
	}while(seguir == "s");

	
	//a)
	precioTotalConDescuento = precioTotal - precioTotDesc;

	alert("la empresa recauda: " + precioTotalConDescuento);

	//b)
	if (flagDesc){
		precioTotDesc = precioDescAr + precioDescFe;
		alert("La empresa perdio en desuentos: " + precioTotDesc);
	}else{
		alert("No se agregaron productos con descuento.");
	}	
	
	//c)
	
	if (contArge != 0){
		promA = contCant / contArge;
	}
			
	if (contFeli != 0){
		promF = contCant / contFeli;
	}

	if (contIllu != 0){
		promI = contCant / contIllu;
	}
	alert(`a- promedios Argentina Luz: %${promA}, Felipe Lamparas %${promF}, Illuminatis %${promI}`);

	//d)
	
	if (contArge > contIllu && contArge > contFeli){
		mayCantVendidas = "Argentina Luz";
	}else if (contIllu >=contArge && contIllu > contFeli){
		mayCantVendidas = "Felipe Lamparas";
	}else{
		mayCantVendidas = "Illuminatis";
	}
	alert("d- mayor cant vendidas: " + mayCantVendidas);



}
