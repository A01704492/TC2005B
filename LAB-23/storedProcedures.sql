-- Procedure para creación de Nueva Escudería (LAB Escuderías)

CREATE PROCEDURE 'crear_Escuderia'(
    IN e.nombre VARCHAR(10),
    IN e.descripcion VARCHAR(100)
)

BEGIN
    INSERT INTO escuderias (nombre, descripcion)
    VALUES (e.nombre, e.descripcion);
END

-- Procedure para creación de Epics (Proyecto)

CREATE PROCEDURE 'crear_Epic'(
    IN e.ID INT(100),
    IN e.link VARCHAR(30),
    IN e.link_summary VARCHAR(400),
    IN e.userID INT(100),
    IN e.ticketID INT(100),
    IN e.projectID INT(100)
)

BEGIN
    INSERT INTO epics (epic_ID, epic_link, epic_link_summary, userID, ticketID, projectID)
    VALUES(e.ID, e.link, e.link_summary, e.userID, e.ticketID, e.projectID);
END

-- Procedure para creación de Users (Proyecto)

CREATE PROCEDURE 'crear_Project'(
    IN p.ID INT(100),
    IN p.Name VARCHAR(200),
    IN p.repot_ID INT(100)
)

BEGIN
    INSERT INTO projects (project_ID, project_Name, repot_ID)
    VALUES(p.ID, p.Name, p.repot_ID);
END
