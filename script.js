function sumarDos() {
    // Obtener el valor del input
    var input = document.getElementById('numberInput').value;
    const errorMessage = document.getElementById("errorMessage");
    // Convertir el valor a un número
    var numero = parseFloat(input);

    // Verifica si el número es negativo o mayor a 1000
    if (input < 0 || input > 100000001) {
        errorMessage.textContent = 'Por favor, introduce un número entre 0 y 100000000.'; // Mensaje de error
        return; // Detiene la ejecución de la función
    }

    errorMessage.textContent = '';

    var cantidadOro = 0;
    var cantidadDiamante = 0;
    var cantidadRubi = 0;

    for (var i = 0; i < numero; i++) {
        var numeroAleatorio = Math.random();
        if (0 <= numeroAleatorio && numeroAleatorio < 0.2) {
            cantidadDiamante = cantidadDiamante + 1;
        } if (0.2 <= numeroAleatorio && numeroAleatorio < 0.5) {
            cantidadRubi = cantidadRubi + 1;
        } if (0.5 <= numeroAleatorio && numeroAleatorio <= 1) {
            cantidadOro = cantidadOro + 1;
        }
    }

    var probaOro = cantidadOro / numero;
    var probaDiam = cantidadDiamante / numero;
    var probaRubi = cantidadRubi / numero;

    var esperadaOro = numero / 2;
    var esperadoDiam = numero / 5;
    var esperadoRubi = numero * 3 / 10;

    var clasicaOro = 1/2;
    var clasicaDiam = 3/10;
    var clasicaRubi = 1/5;

    // Mostrar el resultado
    document.getElementById('esperadoOro').innerHTML = esperadaOro;
    document.getElementById('esperadoDiam').innerHTML = esperadoDiam;
    document.getElementById('esperadoRubi').innerHTML = esperadoRubi;

    document.getElementById('clasicaOro').innerHTML = clasicaOro;
    document.getElementById('clasicaDiam').innerHTML = clasicaDiam;
    document.getElementById('clasicaRubi').innerHTML = clasicaRubi;

    document.getElementById('cantidadOro').innerHTML = cantidadOro;
    document.getElementById('cantidadDiam').innerHTML = cantidadDiamante;
    document.getElementById('cantidadRubi').innerHTML = cantidadRubi;

    document.getElementById('probaOro').innerHTML = probaOro;
    document.getElementById('probaDiam').innerHTML = probaDiam;
    document.getElementById('probaRubi').innerHTML = probaRubi;

}

function sumarCuatro() {
    // Obtener el valor del input
    var input = document.getElementById('numberInput').value;
    const errorMessage = document.getElementById("errorMessage");
    // Convertir el valor a un número
    var numero = parseFloat(input);

    // Verifica si el número es negativo o mayor a 1000
    if (input < 0 || input > 100000001) {
        errorMessage.textContent = 'Por favor, introduce un número entre 0 y 100000000.'; // Mensaje de error
        return; // Detiene la ejecución de la función
    }

    errorMessage.textContent = '';

    var cantidadOro = 0;
    var cantidadDiamante = 0;
    var cantidadRubi = 0;

    for (var i = 0; i < numero; i++) {
        var numeroAleatorio = Math.random();
        if (0 <= numeroAleatorio && numeroAleatorio < 0.2) {
            cantidadDiamante = cantidadDiamante + 1;
        } if (0.2 <= numeroAleatorio && numeroAleatorio < 0.5) {
            cantidadRubi = cantidadRubi + 1;
        } if (0.5 <= numeroAleatorio && numeroAleatorio <= 1) {
            cantidadOro = cantidadOro + 1;
        }
    }

    var probaOro = cantidadOro / numero;
    var probaDiam = cantidadDiamante / numero;
    var probaRubi = cantidadRubi / numero;

    var esperadaOro = numero / 2;
    var esperadoDiam = numero / 5;
    var esperadoRubi = numero * 3 / 10;

    var clasicaOro = 1/2;
    var clasicaDiam = 3/10;
    var clasicaRubi = 1/5;


    document.getElementById('cantidadOro').innerHTML = cantidadOro;
    document.getElementById('cantidadDiam').innerHTML = cantidadDiamante;
    document.getElementById('cantidadRubi').innerHTML = cantidadRubi;

    document.getElementById('probaOro').innerHTML = probaOro;
    document.getElementById('probaDiam').innerHTML = probaDiam;
    document.getElementById('probaRubi').innerHTML = probaRubi;

}

function sumarTres() {
    // Obtener el valor del input
    var input = document.getElementById('numberInput').value;
    // Convertir el valor a un número
    var numero = parseFloat(input);

    var var1 = 0;
    var var2 = 0;

    for (var i = 0; i < numero; i++) {
        var numeroAleatorio = Math.random();
        if (numeroAleatorio > 0.5) {
            var1 = var1 + 1;
        } else {
            var2 = var2 + 1;
        }
    }

    var resultado = var1 / numero;
    var divsion = numero / 2;
    var proba = divsion / numero;
    // Mostrar el resultado
    document.getElementById('result').innerHTML = 
    'Cantidad de Caras Esperadas: ' + divsion + '<br>' + 
    'Cantidad de Caras Obtenidas: ' + var1 + '<br>' + 
    'Probabilidad Teórica: ' + proba + '<br>' + 
    'Probabilidad Frecuencial: ' + resultado;
}
