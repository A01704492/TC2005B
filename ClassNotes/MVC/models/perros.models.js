const perros = [
    { 
        nombre: 'Duquesa',
        raza: "Beagle", 
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0009_beagle_0.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        nombre: 'Wilson',
        raza: "Golden",
        imagen: "https://cdn.pixabay.com/photo/2018/01/03/13/54/golden-retiver-3058383_640.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        nombre: 'Spike',
        raza: "Husky",
        imagen: "https://m.media-amazon.com/images/I/51+z8sSyAuL.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: "Chilakil",
        raza: 'Chihuahua',
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'Pugberto',
        raza: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    } 
];

module.exports = class Perro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_perro) {
        this.nombre = nuevo_perro.nombre || 'Firulais';
        this.raza = nuevo_perro.raza || 'Delmer';
        this.imagen = nuevo_perro.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nuevo_perro.descripcion || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        perros.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return perros;
    }

}