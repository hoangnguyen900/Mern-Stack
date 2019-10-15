CREATE DATABASE  IF NOT EXISTS `quizzz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `quizzz`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: quizzz
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer_record`
--

DROP TABLE IF EXISTS `answer_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_record` (
  `user_id` int(11) NOT NULL,
  `question_table_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `choice_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`question_table_id`,`question_id`),
  KEY `FK_record_choices_idx` (`choice_id`),
  KEY `FK_record_question_idx` (`question_id`),
  KEY `FK_record_table_idx` (`question_table_id`),
  CONSTRAINT `FK_record_choices` FOREIGN KEY (`choice_id`) REFERENCES `question_choices` (`id`),
  CONSTRAINT `FK_record_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `FK_record_table` FOREIGN KEY (`question_table_id`) REFERENCES `question_table` (`id`),
  CONSTRAINT `FK_record_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer_record`
--

LOCK TABLES `answer_record` WRITE;
/*!40000 ALTER TABLE `answer_record` DISABLE KEYS */;
INSERT INTO `answer_record` (`user_id`, `question_table_id`, `question_id`, `choice_id`) VALUES (1,1,1,1),(1,1,2,4),(1,1,3,7);
/*!40000 ALTER TABLE `answer_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` double NOT NULL DEFAULT '30',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` (`id`, `question`, `time`) VALUES (1,'what is dota',20),(2,'aaa',20),(3,'bbb',20),(4,'what is a?',20),(5,'what is n in math?',20),(6,'tesing quiz',30),(232,'here is the test from react',30),(233,'test',30),(234,'here is the test from react',30),(235,'here is the test from react',30),(236,'here is the test from react',30),(237,'here is the test from react',30),(238,'here is the test from react',30),(239,'here is the test from react',30),(240,'here is the test from react',30),(241,'haha',30),(242,'haha',30),(243,'what is dota',20),(244,'what is dota',20),(245,'what is dota',20),(246,'what is dota',20),(247,'what is dota',20),(248,'what is dota',20),(249,'what is dota',20),(250,'what is dota',20),(251,'what is dota',20),(252,'what is dota',20),(253,'what is dota',20),(254,'what is dota',20),(255,'here is the test from react',30),(256,'here is the test from react1111',30),(257,'test',30),(258,'here is the test from react',30),(259,'redux',30),(260,'test',30),(261,'here is the test from react',30),(262,'redux',30),(263,'here is the test from react',30),(264,'here is the test from react',30),(265,'redux',30),(266,'here is the test from react',30),(267,'test',30),(268,'123',30),(269,'123123',30),(270,'redux',30),(271,'asdasd',30),(272,'aaaaa',30),(273,'123',30),(274,'redux',30),(275,'123123',30),(276,'redux',30),(277,'test',30),(278,'redux',30),(279,'redux',30),(280,'redux',30),(295,'here is the test from react ',30),(296,'here is the test from react',30),(297,'here is the test from react',30),(298,'Tt',30),(299,'Tt',30),(300,'here is the test from react',30);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_choices`
--

DROP TABLE IF EXISTS `question_choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_choices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `answer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_right` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`,`question_id`),
  KEY `FK_question_choice_question_idx` (`question_id`),
  CONSTRAINT `FK_question_choice_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=390 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_choices`
--

LOCK TABLES `question_choices` WRITE;
/*!40000 ALTER TABLE `question_choices` DISABLE KEYS */;
INSERT INTO `question_choices` (`id`, `question_id`, `answer`, `is_right`) VALUES (1,1,'1',1),(2,1,'0',0),(3,1,'00',0),(4,2,'1',1),(5,2,'0',0),(6,3,'0',0),(7,3,'1',1),(8,4,'0',0),(9,4,'1',1),(10,5,'0',0),(11,5,'1',1),(298,239,'123',0),(299,239,'123',0),(300,240,'123',0),(301,240,'123',0),(302,243,'aaa',1),(303,244,'aaa',1),(304,245,'aaa',1),(305,246,'aaa',1),(306,247,'aaa',1),(307,248,'aaa',1),(308,249,'aaa',1),(309,250,'aaa',1),(310,251,'aaa',1),(311,252,'aaa',1),(312,253,'aaa',1),(313,254,'aaa',1),(314,255,'123',0),(315,255,'123',1),(316,255,'123',0),(317,256,'123',0),(318,256,'123',0),(319,256,'123',1),(320,257,'123',0),(321,257,'aa',1),(322,258,'123',0),(323,258,'123',1),(324,259,'aaaa',0),(325,259,'aaa',1),(326,260,'aa',1),(327,260,'1',0),(328,261,'haha',0),(329,261,'lol tris',1),(330,262,'testing ',1),(331,262,'aa',1),(332,263,'aa',1),(333,263,'123',0),(334,264,'123',1),(335,264,'123',0),(336,265,'123',1),(337,266,'aa',0),(338,267,'123',1),(339,268,'aaa',1),(340,269,'aaaa',0),(341,270,'aaa',0),(342,270,'aaa',1),(343,271,'aaa',1),(344,271,'aaaa',0),(345,272,'aa',1),(346,273,'1',0),(347,274,'test',0),(348,275,'123',0),(349,276,'aaa',0),(350,277,'123',0),(351,278,'aaa',1),(352,279,'aa',1),(353,279,'aaa',0),(354,280,'aaa',0),(355,280,'1',1),(356,280,'as',0),(378,295,'test',0),(379,295,'right',1),(380,296,'123',0),(381,296,'aa',1),(382,297,'aa',1),(383,297,'aa',0),(384,298,'rr',1),(385,298,'Rr',0),(386,299,'Looo',0),(387,299,'llll',0),(388,300,'123',1),(389,300,'123',0);
/*!40000 ALTER TABLE `question_choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_table`
--

DROP TABLE IF EXISTS `question_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` int(6) DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `grade_begin` int(11) DEFAULT NULL,
  `grade_end` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `played` int(11) DEFAULT NULL,
  `subject_id` int(11) NOT NULL,
  `image` longblob,
  `is_public` tinyint(1) DEFAULT NULL,
  `admin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_GameTable_QuizzzSubject` (`subject_id`),
  KEY `FK_table_user_idx` (`admin`),
  CONSTRAINT `FK_table_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  CONSTRAINT `FK_table_user` FOREIGN KEY (`admin`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_table`
--

LOCK TABLES `question_table` WRITE;
/*!40000 ALTER TABLE `question_table` DISABLE KEYS */;
INSERT INTO `question_table` (`id`, `code`, `title`, `grade_begin`, `grade_end`, `level`, `played`, `subject_id`, `image`, `is_public`, `admin`) VALUES (1,NULL,'DOTA',1,4,1,1000,1,NULL,1,1),(2,NULL,'1',NULL,NULL,1,1,1,NULL,1,1),(3,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(4,NULL,'Testing for quiz 2',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(5,NULL,'Testing for quiz 3',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(6,NULL,'Testing for quiz 4',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(7,NULL,'Testing for quiz 5',NULL,NULL,NULL,NULL,1,NULL,NULL,1),(8,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(9,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(10,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(11,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(12,NULL,'Testing for quiz 2',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(14,NULL,'Testing for quiz 2',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(15,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(16,NULL,'Testing for quiz 4',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(17,NULL,'Ttt',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(18,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,1),(19,NULL,'hello from postman',NULL,NULL,NULL,NULL,1,NULL,NULL,3),(20,NULL,'hello from postman',NULL,NULL,NULL,NULL,1,NULL,NULL,3),(21,NULL,'Testing for quiz',NULL,NULL,NULL,NULL,2,NULL,NULL,3);
/*!40000 ALTER TABLE `question_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questiontable_question`
--

DROP TABLE IF EXISTS `questiontable_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questiontable_question` (
  `question_table_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`question_table_id`,`question_id`),
  KEY `_idx` (`question_id`),
  KEY `idGameTable_idx` (`question_table_id`),
  CONSTRAINT `FK_table_question_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `FK_table_question_table` FOREIGN KEY (`question_table_id`) REFERENCES `question_table` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questiontable_question`
--

LOCK TABLES `questiontable_question` WRITE;
/*!40000 ALTER TABLE `questiontable_question` DISABLE KEYS */;
INSERT INTO `questiontable_question` (`question_table_id`, `question_id`) VALUES (1,1),(1,2),(1,3),(1,280),(1,295),(1,296),(16,297),(17,298),(17,299),(21,300);
/*!40000 ALTER TABLE `questiontable_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `icon` longblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` (`id`, `title`, `icon`) VALUES (1,'game',NULL),(2,'education',NULL);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sysdiagrams`
--

DROP TABLE IF EXISTS `sysdiagrams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sysdiagrams` (
  `name` varchar(160) NOT NULL,
  `principal_id` int(11) NOT NULL,
  `diagram_id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `definition` longblob,
  PRIMARY KEY (`diagram_id`),
  UNIQUE KEY `UK_principal_name` (`principal_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sysdiagrams`
--

LOCK TABLES `sysdiagrams` WRITE;
/*!40000 ALTER TABLE `sysdiagrams` DISABLE KEYS */;
/*!40000 ALTER TABLE `sysdiagrams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `grades` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_QuizzzSubject` (`subject_id`),
  CONSTRAINT `FK_User_QuizzzSubject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `grades`, `subject_id`, `email`, `password`) VALUES (1,'hoang','nguyen','1',2,'hoangnguyen@gmail.com','123'),(2,'tri','ha','2',1,NULL,NULL),(3,'hao','nguyen','1',2,'test@gmail.com','123'),(4,'hao','nguyen','1',2,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'quizzz'
--

--
-- Dumping routines for database 'quizzz'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-15 15:59:06
