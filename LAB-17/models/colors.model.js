const db = require('../util/database');

module.exports = class Escuderia {

    constructor(nuevaEscuderia) {
        this.escuderia = nuevaEscuderia.escuderia;
        this.descripcion = nuevaEscuderia.descripcion;
    }

    save() {
        return db.execute(`
            INSERT INTO colors (nombre, descripcion) 
            values (?, ?)
        `, [this.escuderia, this.descripcion]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM escuderia')
    }
}