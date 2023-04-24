const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || 'John Doe';
        this.user_email = nuevo_usuario.user_email || 'johndoe@gmail.com';
        this.user_password = nuevo_usuario.user_password || 'johndoejohndoe';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((user_password_cifrado) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, user_email, user_password)
            values (?, ?, ?)
            `, [this.nombre, this.user_email, user_password_cifrado]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT * 
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }

    // static fetchPrivilegios(username) {
    //     return db.execute(`
    //         SELECT p.nombre
    //         FROM usuarios u, usuario_rol ur, roles r, rol_privilegio rp, privilegios p 
    //         WHERE u.id = ur.idUsuario AND ur.idRol = r.id AND rp.idRol = r.id 
    //             AND rp.idPrivilegio = p.id AND u.username = ?
    //     `, [username]);
    // }

}