-- Laboratorio 21: Creación de Consultas Utilizando SQL con Funciones Agregadas y Sub-consultas

-- A modo de referencia, incluimos los esquemas de las tablas que creaste en la práctica anterior y que serán con las que trabajaremos en esta práctica:

-- Materiales(Clave, Descripción, Precio, Impuesto)
-- Proveedores(RFC, RazonSocial)
-- Proyectos(Numero, Denominacion)
-- Entregan(Clave, RFC, Numero, Fecha, Cantidad)

-- Nota: De ser necesario crea los registros adecuados para probar que las consultas funcionan correctamente.
-- Con base en lo que se explica en la lectura sobre funciones agregadas, plantea y ejecuta las siguientes consultas, agregando los alias de columna necesarios para que los resultados resulten legibles:


-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

SELECT SUM(Cantidad) AS CantidadTotal, SUM(Cantidad*Costo*(1+PorcentajeImpuesto/100)) AS ImporteTotal
FROM Entregan
JOIN Materiales ON Entregan.Clave = Materiales.Clave
WHERE YEAR(Fecha) = 1997;

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT Proveedores.RazonSocial, COUNT(Entregan.Clave) AS NumEntregas, SUM(Entregan.Cantidad * Materiales.precio * (1 + Materiales.impuesto/100)) AS ImporteTotal
FROM Proveedores
JOIN Entregan ON Proveedores.RFC = Entregan.RFC
JOIN Materiales ON Entregan.Clave = Materiales.Clave
GROUP BY Proveedores.RFC;

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT Materiales.Clave, Materiales.Descripcion, SUM(Cantidad) AS CantidadTotal, MIN(Cantidad) AS CantidadMinima, MAX(Cantidad) AS CantidadMaxima, SUM(Cantidad*Precio*(1+Impuesto)) AS ImporteTotal
FROM Entregan
JOIN Materiales ON Entregan.Clave = Materiales.Clave
GROUP BY Materiales.Clave, Materiales.Descripcion
HAVING AVG(Cantidad) > 400;

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT Proveedores.RazonSocial, Materiales.Clave, Materiales.Descripcion, AVG(Entregan.Cantidad) AS CantidadPromedio
FROM Proveedores
JOIN Entregan ON Proveedores.RFC = Entregan.RFC
JOIN Materiales ON Entregan.Clave = Materiales.Clave
GROUP BY Proveedores.RFC, Materiales.Clave
HAVING CantidadPromedio >= 500;


-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT Proveedores.RazonSocial, Materiales.Clave, Materiales.Descripcion, AVG(Entregan.Cantidad) AS CantidadPromedio,
    CASE 
        WHEN AVG(Entregan.Cantidad) < 370 THEN 'Menor a 370'
        WHEN AVG(Entregan.Cantidad) > 450 THEN 'Mayor a 450'
    END AS Grupo
FROM 
    Proveedores
    JOIN Entregan ON Proveedores.RFC = Entregan.RFC
    JOIN Materiales ON Entregan.Clave = Materiales.Clave
GROUP BY 
    Proveedores.RFC, Materiales.Clave
HAVING 
    Grupo IS NOT NULL;


-- Utilizando la sentencia
-- INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
-- Considerandofes, los valores numéricos se escriben directam que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstroente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.

INSERT INTO tabla Materiales VALUES
(2010, 'Metano', 500, 16.5)
(2020, 'Butano', 700, 14.5)
(2030, 'Benceno', 1200, 16.5)
(2040, 'Vanadio', 150, 17.5)
(2050, 'Metilamina', 1750, 19.5);

-- Con base en lo que se explica en la lectura sobre consultas con roles y subconsultas, plantea y ejecuta las siguientes consultas:



-- Clave y descripción de los materiales que nunca han sido entregados.

SELECT Materiales.Clave, Materiales.Descripcion
FROM Materiales
LEFT JOIN Entregan
ON Materiales.Clave = Entregan.Clave
WHERE Entregan.Clave IS NULL

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT DISTINCT Proveedores.RazonSocial
FROM Proveedores
JOIN Entregan ON Proveedores.RFC = Entregan.RFC
JOIN Proyectos ON Entregan.Numero = Proyectos.Numero
WHERE Proyectos.Denominacion IN ('Vamos México', 'Querétaro Limpio')
GROUP BY Proveedores.RFC
HAVING COUNT(DISTINCT Proyectos.Numero) = 2;

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT Descripción 
FROM Materiales
WHERE Clave NOT IN (
  SELECT Clave FROM Entregan
  WHERE Numero = 'CIT Yucatán'
);

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

SELECT p.RazonSocial, AVG(e.Cantidad) AS PromedioCantidadEntregada
FROM Entregan e
JOIN Proveedores p ON e.RFC = p.RFC
WHERE p.RFC <> 'VAGO780901'
GROUP BY p.RazonSocial
HAVING AVG(e.Cantidad) > (
  SELECT AVG(Cantidad)
  FROM Entregan
  WHERE RFC = 'VAGO780901'
)

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.

SELECT RFC, RazonSocial
FROM Proveedores
WHERE RFC IN (
    SELECT RFC
    FROM Entregan
    WHERE Numero = 5005
        AND YEAR(Fecha) = 2000
    GROUP BY RFC
    HAVING SUM(Cantidad) > (
        SELECT SUM(Cantidad)
        FROM Entregan
        WHERE Numero = 5005
            AND YEAR(Fecha) = 2001
            AND RFC = Entregan.RFC
        GROUP BY RFC
    )
);
