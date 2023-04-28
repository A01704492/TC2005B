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

    static find(valor_busqueda) {
      return db.execute(
          `SELECT e.id_escuderia, e.nombre_escuderia, e.descripcion_escuderia, e.imagen_escuderia
          FROM escuderias e
          WHERE e.nombre_escuderia LIKE ? OR e.descripcion_escuderia LIKE ?
          `, 
          [ '%' + valor_busqueda + '%', '%' + valor_busqueda + '%', 
              '%' + valor_busqueda + '%']
      );
    }
  }