const db = require('../util/database');

module.exports = class Escuderia {

    constructor(nuevaEscuderia) {
      this.nombre = nuevaEscuderia.nombre || 'Audi';
      this.descripcion = nuevaEscuderia.descripcion || 'Proximamente';
      this.imagen = nuevaEscuderia.imagen || 'https://media.revistagq.com/photos/63134ce322595362b0c1df7d/16:9/pass/audi-f1.jpg';
    }
  
    save() {
      return db.execute(`
        INSERT INTO escuderia (nombre_escuderia, descripcion_escuderia, imagen_escuderia) 
        VALUES (?, ?, ?)
      `, [this.nombre, this.descripcion, this.imagen]);
    }
  
    static fetchAll() {
      return db.execute('SELECT * FROM escuderia')
    }
  }