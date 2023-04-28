-- Progettazione Web 
DROP DATABASE if exists pacman; 
CREATE DATABASE pacman; 
USE pacman; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pacman
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;

insert into`user` values
  (100001, 'pweb', md5('test')),
  (100002, 'filippo', md5('filippo')),
  (100003, 'francesco', md5('francesco')),
  (100004, 'franco', md5('franco')),
  (100005, 'gabriele', md5('gabriele')),
  (100006, 'gianfranco', md5('gianfranco')),
  (100007, 'gingi', md5('gingi')),
  (100008, 'giulio', md5('giulio')),
  (100009, 'luca', md5('luca'));


  
DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `user` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `score` int(11) DEFAULT 0,
  `ghostKilled` int(11) default 0,
  `duration` int(11) default 0,
  PRIMARY KEY (`user`, `date`, `time`),  
    FOREIGN KEY (`user`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;
INSERT INTO game VALUES
  (100001, '2022-05-10', '15:24:18', 400, 0, 203),
  (100007, '2022-06-25', '08:51:12', 120, 2, 417),
  (100003, '2022-08-04', '11:15:34', 780, 0, 296),
  (100005, '2022-09-19', '22:47:42', 520, 1, 180),
  (100008, '2022-10-31', '16:32:09', 980, 0, 600),
  (100002, '2022-11-15', '07:59:01', 190, 3, 242),
  (100006, '2022-12-05', '18:43:27', 670, 1, 361),
  (100004, '2023-01-20', '10:09:58', 310, 1, 212),
  (100009, '2023-02-28', '21:55:04', 930, 0, 389),
  (100001, '2023-03-15', '11:23:47', 530, 2, 420),
  (100003, '2023-04-01', '19:12:36', 250, 4, 312),
  (100002, '2023-04-07', '08:45:13', 690, 1, 452),
  (100004, '2023-04-13', '16:33:59', 870, 2, 509),
  (100005, '2023-04-19', '03:21:45', 120, 0, 180),
  (100006, '2023-04-25', '12:09:32', 430, 3, 283),
  (100008, '2023-05-01', '21:57:18', 750, 1, 422),
  (100007, '2023-05-07', '06:45:04', 980, 0, 600),
  (100009, '2023-05-13', '15:32:51', 310, 4, 315),
  (100003, '2023-05-19', '00:20:37', 560, 0, 235),
  (100001, '2023-05-25', '09:08:24', 170, 2, 328),
  (100002, '2023-05-31', '18:56:10', 800, 1, 363),
  (100004, '2023-06-06', '05:43:57', 420, 0, 180),
  (100005, '2023-06-12', '14:31:43', 960, 3, 477),
  (100006, '2023-06-18', '23:19:30', 690, 1, 426),
  (100008, '2023-06-24', '08:07:16', 240, 4, 308),
  (100007, '2023-06-30', '16:55:03', 910, 0, 600),
  (100009, '2023-07-06', '01:42:49', 580, 2, 362),
  (100003, '2023-07-12', '10:30:36', 150, 4, 312),
  (100001, '2023-07-18', '19:18:22', 730, 3, 399),
  (100002, '2023-07-24', '04:06:09', 350, 1, 294),
  (100004, '2023-07-30', '12:53:55', 480, 0, 180),
  (100005, '2023-08-05', '21:41:42', 820, 2, 478),
  (100006, '2023-08-11', '06:29:28', 250, 1, 282),
  (100008, '2023-08-17', '15:17:15', 980, 0, 600),
  (100007, '2023-08-23', '00:05:01', 120, 3, 233),
  (100009, '2023-08-29', '08:52:48', 680, 4, 324),
  (100003, '2023-09-04', '17:40:34', 940, 0, 600),
  (100001, '2023-09-10', '02:28:21', 530, 2, 420),
  (100002, '2023-09-16', '11:16:07', 120, 1, 207);