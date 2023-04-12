-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2023 a las 20:28:44
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lab18`
--

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_ID` int(100) NOT NULL,
  `user_Password` varchar(150) NOT NULL,
  `user_Name` varchar(150) NOT NULL,
  `user_Phone` varchar(10) DEFAULT NULL,
  `user_Mail` varchar(100) NOT NULL,
  `user_WeeklyAgilePoints` int(50) DEFAULT NULL,
  `user_Skill` char(2) DEFAULT NULL,
  `ticket_Assignee` varchar(100) DEFAULT NULL,
  `ticket_Assignee_ID` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_ID`, `user_Password`, `user_Name`, `user_Phone`, `user_Mail`, `user_WeeklyAgilePoints`, `user_Skill`, `ticket_Assignee`, `ticket_Assignee_ID`) VALUES
(69420, '$2a$12$FnpO1SU9uiu3MRPInTThIOg4qoTizzj1qaw3WqPEjj2tw1hQExLIe', 'Diego Vega', '4426060404', 'diego@gmail.com', 0, '3', NULL, NULL);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69421;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
