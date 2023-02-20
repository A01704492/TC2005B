// Ejercicio 1

let boton = document.getElementById("ejercicio1");
boton.innerHTML = "Cuadrado y Cubo";
boton.onclick = () => {

    const number = prompt("Escribe un número:");

    let table = "<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for(let i = 1; i <= number; i++){
        const cuadrado = i ** 2;
        const cubo = i ** 3;

        table += `<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`;
    }

    table += "</table>";

    document.getElementById("ejercicio1").innerHTML = table;
}

// Ejercicio 2

var randNum1 = Math.floor(Math.random()*100)+1;
var randNum2 = Math.floor(Math.random()*100)+1;
var resultado = randNum1 + randNum2;

let boton2 = document.getElementById("ejercicio2");
boton2.innerHTML = randNum1 + '+' +randNum2 + '?';
boton2.onclick = () => {

    var tiempoI = new Date().getTime();
    var respuesta = prompt("Digita la respuesta de la suma: ");

    var tiempoF = new Date().getTime();
    var tiempoT = tiempoF - tiempoI;

    if(resultado == respuesta){
        document.write("Respuesta Correcta <br><br>Tiempo empleado: ", tiempoT, " milisegundos");
    }
    else{
        document.write("Respuesta Incorrecta <br><br>Tiempo empleado: ", tiempoT, " milisegundos");
    }
    
}

// Ejercicio 3

document.getElementById("ejercicio3");

let arreglo = [];

function contador(arreglo){
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for(let i = 0; i <  arreglo.length; i++){
        if(arreglo[i] < 0){
            negativos++;
        }
        else if(arreglo[i] === 0){
            ceros++;
        }
        else{
            positivos++;
        }
    }
    return [negativos, ceros, positivos];
}

let arregloConsola = [-30, 4, 0, -48, 0, 44];
let resultadoContador = contador(arregloConsola);
console.log(resultadoContador);

// Ejercicio 4

function promedios(matriz){
    let promediosM = []

    for(let i = 0; i < matriz.length; i++){
        let fila = matriz[i];
        let suma = 0;

        for(let j = 0; j < fila.length; j++){
            suma += fila[j];
        }

        promediosM.push(suma/fila.length);
    }

    return promediosM;
}

let matrizConsola = [
    [9.4, 9.2, 8.3],
    [7.4, 5.9, 9.6],
    [7.7, 8.7, 9.9]
  ];
let resultadoPromedio = promedios(matrizConsola);
console.log(resultadoPromedio);


// Ejercicio 5

function inverso(numero){
    let numeroStr = numero.toString();
    let inversoStr = "";

    for(let i = numeroStr.length - 1; i >= 0; i--){
        inversoStr += numeroStr[i];
    }
    return parseInt(inversoStr);
}

let numeroConsola = 5372942;
let resultadoInverso = inverso(numeroConsola);
console.log(resultadoInverso);

// Ejercicio 6

function factorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }  

let boton6 = document.getElementById("ejercicio6");
boton6.innerHTML = "Factorial";
boton6.onclick = () => {
    let numeroFactorial = prompt("Inserta un número del que quieras conocer su factorial: ")
    
    document.write("El número factorial de ", numeroFactorial, " es: ", factorial(numeroFactorial));
    
}
