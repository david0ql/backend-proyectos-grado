-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2022 a las 17:36:00
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cds_gestion_proyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `correo_estudiante` varchar(255) NOT NULL,
  `id_idea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ideas`
--

CREATE TABLE `ideas` (
  `id_idea` int(11) NOT NULL,
  `nombre_idea` varchar(255) NOT NULL,
  `id_azure_docente_correo` varchar(100) NOT NULL,
  `id_tipo_idea` int(11) NOT NULL,
  `aprovado` tinyint(1) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ideas`
--

INSERT INTO `ideas` (`id_idea`, `nombre_idea`, `id_azure_docente_correo`, `id_tipo_idea`, `aprovado`, `fecha_creacion`) VALUES
(1, 'Proyecto CDs', 'vermen@correo.uts.edu.co', 2, 0, '2022-09-28 01:39:25'),
(2, 'Backend Chat', 'vermen@correo.uts.edu.co', 2, 1, '2022-09-28 01:39:51'),
(3, 'Backend Inmobiliaria', 'vermen@correo.uts.edu.co', 2, 1, '2022-09-28 01:40:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ideas_favoritas`
--

CREATE TABLE `ideas_favoritas` (
  `id_ideaFav` int(11) NOT NULL,
  `correo_estudiante` varchar(255) NOT NULL,
  `id_idea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idea_tomada`
--

CREATE TABLE `idea_tomada` (
  `id_idea_tomada` int(11) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `estado_pago` tinyint(1) NOT NULL,
  `cooldown` datetime NOT NULL,
  `id_azure_estudiante_correo` varchar(100) NOT NULL,
  `id_idea` int(11) NOT NULL,
  `fecha_aceptado` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `idea_tomada`
--

INSERT INTO `idea_tomada` (`id_idea_tomada`, `estado`, `estado_pago`, `cooldown`, `id_azure_estudiante_correo`, `id_idea`, `fecha_aceptado`) VALUES
(1, '1', 1, '2022-09-28 01:40:15', 'josedavid@gbs.com.co', 1, '2022-09-28 01:40:28'),
(2, '1', 1, '2022-09-28 01:41:00', 'jhank@uts.edu.co', 2, '2022-09-28 01:41:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_ideas`
--

CREATE TABLE `tipo_ideas` (
  `id_tipo_idea` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_ideas`
--

INSERT INTO `tipo_ideas` (`id_tipo_idea`, `nombre`) VALUES
(1, 'Proyectos de investigacion'),
(2, 'Proyectos de desarrollo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_administrativos`
--

CREATE TABLE `usuarios_administrativos` (
  `id_usuario_administrativo` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios_administrativos`
--

INSERT INTO `usuarios_administrativos` (`id_usuario_administrativo`, `correo`) VALUES
(1, 'admin1@correo.uts.edu.co'),
(2, 'admin2@correo.uts.edu.co');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `foreign cart` (`id_idea`);

--
-- Indices de la tabla `ideas`
--
ALTER TABLE `ideas`
  ADD PRIMARY KEY (`id_idea`),
  ADD KEY `ideas_fk_id_tipo_idea` (`id_tipo_idea`);

--
-- Indices de la tabla `ideas_favoritas`
--
ALTER TABLE `ideas_favoritas`
  ADD PRIMARY KEY (`id_ideaFav`),
  ADD KEY `Foreign favs` (`id_idea`);

--
-- Indices de la tabla `idea_tomada`
--
ALTER TABLE `idea_tomada`
  ADD PRIMARY KEY (`id_idea_tomada`),
  ADD KEY `idea_tomada_fk_id_idea` (`id_idea`);

--
-- Indices de la tabla `tipo_ideas`
--
ALTER TABLE `tipo_ideas`
  ADD PRIMARY KEY (`id_tipo_idea`);

--
-- Indices de la tabla `usuarios_administrativos`
--
ALTER TABLE `usuarios_administrativos`
  ADD PRIMARY KEY (`id_usuario_administrativo`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ideas`
--
ALTER TABLE `ideas`
  MODIFY `id_idea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ideas_favoritas`
--
ALTER TABLE `ideas_favoritas`
  MODIFY `id_ideaFav` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `idea_tomada`
--
ALTER TABLE `idea_tomada`
  MODIFY `id_idea_tomada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_ideas`
--
ALTER TABLE `tipo_ideas`
  MODIFY `id_tipo_idea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios_administrativos`
--
ALTER TABLE `usuarios_administrativos`
  MODIFY `id_usuario_administrativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `foreign cart` FOREIGN KEY (`id_idea`) REFERENCES `ideas` (`id_idea`);

--
-- Filtros para la tabla `ideas`
--
ALTER TABLE `ideas`
  ADD CONSTRAINT `ideas_fk_id_tipo_idea` FOREIGN KEY (`id_tipo_idea`) REFERENCES `tipo_ideas` (`id_tipo_idea`);

--
-- Filtros para la tabla `ideas_favoritas`
--
ALTER TABLE `ideas_favoritas`
  ADD CONSTRAINT `Foreign favs` FOREIGN KEY (`id_idea`) REFERENCES `ideas` (`id_idea`);

--
-- Filtros para la tabla `idea_tomada`
--
ALTER TABLE `idea_tomada`
  ADD CONSTRAINT `idea_tomada_fk_id_idea` FOREIGN KEY (`id_idea`) REFERENCES `ideas` (`id_idea`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
