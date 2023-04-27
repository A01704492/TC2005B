-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

USE colors;

CREATE TABLE colors (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    imagen VARCHAR(400) DEFAULT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp()
);

INSERT INTO colors(nombre, descripcion) VALUES
    ('Azul', 'El color azul es un color muy versátil y puede tener diferentes simbolismos dependiendo del contexto cultural y personal en el que se encuentre.'),
    ('Amarillo', 'El color amarillo es un color muy vibrante y llamativo que se asocia a menudo con la alegría, la energía y la felicidad. Simboliza la luz del sol, la creatividad y la inteligencia.'),
    ('Verde', 'El color verde es a menudo asociado con la naturaleza, la frescura y la vida. Simboliza la esperanza, la armonía y el equilibrio, evocando sentimientos de paz y tranquilidad.');

