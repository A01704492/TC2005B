// variables, constantes, consola (log, info, warn, error, assert)

var comida = 'chilaquiles'

let cena = 'tacos'

const precio = 70;

console.log("hola");
console.info("Valor de la comida: " + comida);
console.error("El precio no se puede modificar")
console.warn("No se puede modificar")

console.assert(1 === 1);
console.assert(1 === '1');
console.assert(1 == '1');
console.assert(1 == true);
console.assert(1 === true);

// Alcance de las variables

for (let i = 1; i<= 10; i++){
    console.log (i)
}
        // Aquí ocurre un error, porque la variable i murió al temrinar el ciclo
console.log(i);

for (var i = 1; i<= 10; i++){
    console.log (i)
}
        // Aquí no hay error, la variable i sigue existiendo
console.log(i);


// Alert, promt, confirm

alert('hola')

let nombre = prompt('¿Como te llamas??');
console.log('hola ' + nombre);

let is_hungry = confirm ("Tienes hambre?")
console.log(is_hungry)


// Funciones tradicionales

function numero_tacos(){
    return 5;
}
console.log(numero_tacos());


// Funciones modernas
let cantidad_tacos = () => {
    return 10;
}
console.log(cantidad_tacos());

// HTML dinámico con eventos

let boton = document.getElementById("Buenos Dias");
boton.innerHTML = "¡Buenos dias!";
boton.onclick = () => {
    alert("¡Buenos dias!");
    document.getElementById("ejercicios").innerHTML =
    "Aquí va la respuesta de los ejercicios";
}

// Arreglos
const Arreglo = ["Elemento"];
Arreglo.push("Otro Elemento");
Arreglo["dos"] = 2;
Arreglo.length = 10;
Arreglo[20] = "Fin del arreglo";
console.log(Arreglo);


for(let Elemento in Arreglo){
    console.log(Elemento);
}

for(let Valor of Arreglo){
    console.log(Valor);
}

// Objetos

let Objeto = {
    atributo_1 : "valor 1",
    atributo_2 : 2
}
console.log(Objeto.atributo_1);
console.log(Objeto.atributo_2);
Objeto.atributo_3 = "tres";

for(let Elemento in Objeto){
    console.log(Elemento);
}
for(let Elemento in Objeto){
    console.log(Objeto.Elemento);
}

const arreglo_de_objeto = [{atributo_1: "valor 0", atributo_2:1},{}, Objeto];
console.log(arreglo_de_objeto);

document.getElementById("boton verdes ")
