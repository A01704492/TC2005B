const db = require('../util/database');

module.exports = class Escuderia {

    constructor(nuevaEscuderia) {
      this.nombre = nuevaEscuderia.nombre || 'Audi';
      this.descripcion = nuevaEscuderia.descripcion || 'Proximamente';
    }
  
    save() {
      return db.execute(`
        INSERT INTO escuderia (nombre, descripcion) 
        VALUES (?, ?)
      `, [this.nombre, this.descripcion]);
    }
  
    static fetchAll() {
      return db.execute('SELECT * FROM escuderia')
    }
  }