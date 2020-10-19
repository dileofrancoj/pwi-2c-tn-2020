-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2017 a las 01:18:34
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sucursal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `trabajo` varchar(200) NOT NULL,
  `edad` int(2) NOT NULL,
  `salario` int(5) NOT NULL,
  `mail` varchar(140) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(001, 'Juan', 'Hagan', 'Programador Senior', 32, 1200, 'juan_hagan@bignet.com'),
(002, 'Gonzalo', 'Pillial', 'Programador Senior', 32, 1100, 'g_pillial@bignet.com'),
(003, 'Ana', 'Dharma', 'Desarrollador Web', 27, 900, 'ana@bignet.com'),
(004, 'Ana', 'Dharma', 'Desarrollador Web', 27, 900, 'ana@bignet.com'),
(005, 'Alfredo', 'Fernandez', 'Programador', 31, 750, 'af@bignet.com'),
(006, 'Juan', 'Aguero', 'Programador', 34, 800, 'juan@bignet.com'),
(007, 'Eduardo', 'Sacan', 'Programador', 25, 750, 'eddie@bignet.com'),
(008, 'Alejandro', 'Nanda', 'Programador', 32, 700, 'alenanda@bignet.com'),
(009, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 900, 'hernan@bignet.com'),
(010, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 850, 'ps@bignet.com'),
(011, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 750, 'arturo@bignet.com'),
(012, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 1100, 'jimena@bignet.com'),
(013, 'Roberto', 'Luis', 'Administrador de Sistemas', 35, 1000, 'roberto@bignet.com'),
(014, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 9000, 'daniel@bignet.com'),
(015, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 1200, 'miguel@bignet.com'),
(016, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 900, 'monica@bignet.com'),
(017, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 700, 'alicia@bignet.com'),
(018, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 720, 'jose@bignet.com'),
(019, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 2000, 'sabrina@bignet.com'),
(020, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 2200, 'pedro@bignet.com'),
(021, 'Mariano', 'Dharma', 'Presidente', 28, 3000, 'mariano@bignet.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
