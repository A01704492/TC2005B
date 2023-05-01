-- --------------------------------
-- Construcción de consultas a partir de una especificación
-- Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.
-- --------------------------------

SELECT m.descripcion 
FROM materiales AS m JOIN entregan AS e ON m.clave = e.clave
WHERE e.fecha >= '01/01/00' AND e.fecha > '01/01/01';

-- ¿Por qué aparecen varias veces algunas descripciones de material?
-- Porque estos materiales se entregaron varias veces durante el año 2000


-- --------------------------------
-- Uso del calificador distinct
-- Agrega la palabra distinct inmediatamente después de la palabra select a la consulta que planteaste antes.
-- --------------------------------

SELECT DISTINCT m.descripcion 
FROM materiales AS m JOIN entregan AS e ON m.clave = e.clave
WHERE e.fecha >= '01/01/00' AND e.fecha > '01/01/01';

-- ¿Qué resultado obtienes en esta ocasión?
-- Los materiales ahora se muestran solo una vez


-- --------------------------------
-- Ordenamientos
-- Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas, ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.
-- --------------------------------

SELECT p.numero, p.denominacion, e.fecha, e.cantidad
FROM proyectos AS p, entregan AS e
ORDER BY p.numero, e.fecha DESC;


-- --------------------------------
-- Uso de expresiones
-- Plantea la misma consulta agregando el gasto total de los materiales entregados.
-- --------------------------------

SELECT e.fecha, m.descripcion, m.precio, e.cantidad, m.precio*e.cantidad AS 'Gran Total'
FROM entregan AS e, materiales AS m
WHERE e.clave - m.clave;


-- --------------------------------
-- Operadores de cadena
SELECT * FROM productos where Descripcion LIKE 'Si%'
-- --------------------------------

-- ¿Qué resultado obtienes? Se muestran los materiales que en su descripción contegan el sufijo 'si'.
-- Explica que hace el símbolo '%'. Sirve para dar a entender que se debe buscar las palabras que terminen en 'si'.
-- ¿Qué sucede si la consulta fuera : LIKE 'Si' ? No mostraría nada.
-- ¿Qué resultado obtienes? Ninguno
-- Explica a qué se debe este comportamiento. Ya que el LIKE retornaría materiales que su descripción sea estrictamente 'si'.

SELECT (Apellido + ', ' + Nombre) as Nombre FROM Personas;
DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

-- ¿Qué resultado obtienes de ejecutar el siguiente código?
-- ¿Para qué sirve DECLARE? Se utiliza para asignar un valor a una variable o para recuperar un valor de una variable.
-- ¿Cuál es la función de @foo? Almacena un valor tipo string
-- ¿Que realiza el operador SET? Asigna valor a una variable

-- Ahora explica el comportamiento, función y resultado de cada una de las siguientes consultas:

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
-- Busca los RFC de la tabla Entregan que comiencen con las letras A-D.

SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
-- Retorna los RFC que NO comiencen con la letra A.

SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
-- Retorna los Numeros de la tabla Entregan que terminen con 6.


-- --------------------------------
-- Operadores Lógicos.
-- --------------------------------

SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010;

-- ¿Cómo filtrarías rangos de fechas? Usando BETWEEN

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' AND Entregan.RFC = Proveedores.RFC)

-- ¿Qué hace la consulta?
-- ¿Qué función tiene el paréntesis ( ) después de EXISTS? Indica que inicia una subconsulta


-- --------------------------------
-- Operador IN
-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN
-- --------------------------------

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010 AND
RFC NOT IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' AND Entregan.RFC = Proveedores.RFC)

-- ¿Qué hace la siguiente sentencia? Explica por qué.
SELECT TOP 2 * FROM Proyectos
-- Retorna los dos primeros registros de la tabla proyectos.

-- ¿Qué sucede con la siguiente consulta? Explica por qué.
SELECT TOP Numero FROM Proyectos
-- Arroja un error ya que no se especifica el rango


-- --------------------------------
-- Modificando la estructura de un tabla existente
-- ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado?
-- --------------------------------

SELECT SUM(e.cantidad*m.precio*(1+m.impuesto)) AS neto
FROM entregan AS e
JOIN materiales AS m ON e.clave = m.clave;

-- --------------------------------
-- Creación de vistas
-- Comprueba lo anterior, creando vistas para cinco de las consultas que planteaste anteriormente en la práctica . Posteriormente revisa cada vista creada para comprobar que devuelve el mismo resultado.
-- --------------------------------

-- --------------------------------
-- A continuación se te dan muchos enunciados de los cuales deberás generar su correspondiente consulta.
-- En el reporte incluye la sentencia, una muestra de la salida (dos o tres renglones) y el número de renglones que SQL Server reporta al final de la consulta.
-- --------------------------------

-- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".

SELECT materiales.clave, materiales.descripcion
FROM materiales
INNER JOIN entregan ON materiales.clave = Entregan.clave
INNER JOIN proyectos ON entregan.numero = Proyectos.numero
WHERE Proyectos.denominacion = 'México sin ti no estamos completos';

-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".

SELECT materiales.clave, materiales.descripcion
FROM materiales
INNER JOIN entregan ON materiales.Clave = entregan.clave
INNER JOIN proveedores ON entregan.RFC = proveedores.RFC
WHERE proveedores.razonsocial = 'Acme tools';

-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.

SELECT Entregan.RFC
FROM Entregan
INNER JOIN Proyectos ON Entregan.Numero = Proyectos.Numero
WHERE YEAR(Entregan.Fecha) = 2000
GROUP BY Entregan.RFC
HAVING AVG(Entregan.Cantidad) >= 300;

-- El Total entregado por cada material en el año 2000.

SELECT Materiales.Clave, SUM(Entregan.Cantidad) AS TotalEntregado
FROM Materiales
INNER JOIN Entregan ON Materiales.Clave = Entregan.Clave
INNER JOIN Proyectos ON Entregan.Numero = Proyectos.Numero
WHERE YEAR(Entregan.Fecha) = 2000
GROUP BY Materiales.Clave;

-- La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)

CREATE VIEW TotalVendido2001 AS
SELECT Clave, SUM(Cantidad) AS TotalVendido
FROM Entregan
WHERE YEAR(Fecha) = 2001
GROUP BY Clave;

-- Productos que contienen el patrón 'ub' en su nombre.

SELECT Clave, Descripcion
FROM Materiales
WHERE Descripcion LIKE '%ub%';

-- Denominación y suma del total a pagar para todos los proyectos.

SELECT Proyectos.Numero, Proyectos.Denominacion, SUM(Entregan.Cantidad * Materiales.Precio) AS TotalAPagar
FROM Proyectos
JOIN Entregan ON Proyectos.Numero = Entregan.Numero
JOIN Materiales ON Entregan.Clave = Materiales.Clave
GROUP BY Proyectos.Numero;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).

CREATE VIEW ProveedoresTelevisa AS
SELECT DISTINCT Proveedores.RFC, Proveedores.RazonSocial
FROM Proveedores
JOIN Entregan ON Proveedores.RFC = Entregan.RFC
JOIN Proyectos ON Entregan.Numero = Proyectos.Numero
WHERE Proyectos.Denominacion = 'Televisa en acción';

CREATE VIEW ProveedoresCoahuila AS
SELECT DISTINCT Proveedores.RFC, Proveedores.RazonSocial
FROM Proveedores
JOIN Entregan ON Proveedores.RFC = Entregan.RFC
JOIN Proyectos ON Entregan.Numero = Proyectos.Numero
WHERE Proyectos.Denominacion = 'Educando en Coahuila';

SELECT DISTINCT 'Televisa en acción' AS Proyecto, ProveedoresTelevisa.RFC, ProveedoresTelevisa.RazonSocial
FROM ProveedoresTelevisa
LEFT JOIN ProveedoresCoahuila ON ProveedoresTelevisa.RFC = ProveedoresCoahuila.RFC
WHERE ProveedoresCoahuila.RFC IS NULL;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).

SELECT DISTINCT p.Denominacion, pr.RFC, pr.RazonSocial
FROM Proveedores pr
INNER JOIN Entregan e ON pr.RFC = e.RFC
INNER JOIN Proyectos p ON e.Numero = p.Numero
WHERE p.Denominacion = 'Televisa en acción' 
AND pr.RFC NOT IN (
    SELECT DISTINCT pr2.RFC
    FROM Proveedores pr2
    INNER JOIN Entregan e2 ON pr2.RFC = e2.RFC
    INNER JOIN Proyectos p2 ON e2.Numero = p2.Numero
    WHERE p2.Denominacion = 'Educando en Coahuila'
)

-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.

SELECT DISTINCT m.Precio, m.Descripcion
FROM Materiales m
INNER JOIN Entregan e ON m.Clave = e.Clave
INNER JOIN Proyectos p ON e.Numero = p.Numero
INNER JOIN Proveedores pr ON e.RFC = pr.RFC
WHERE p.Denominacion = 'Televisa en acción'
AND pr.RFC IN (
    SELECT DISTINCT pr2.RFC
    FROM Proveedores pr2
    INNER JOIN Entregan e2 ON pr2.RFC = e2.RFC
    INNER JOIN Proyectos p2 ON e2.Numero = p2.Numero
    WHERE p2.Denominacion = 'Educando en Coahuila'
)

