-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: localSports
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `eventId` smallint(255) unsigned NOT NULL,
  `sportId` smallint(10) unsigned NOT NULL,
  `date` date NOT NULL,
  `locationId` smallint(11) unsigned NOT NULL,
  `leagueId` smallint(255) unsigned NOT NULL,
  `organizerId` smallint(255) unsigned NOT NULL,
  `reviewId` smallint(255) unsigned NOT NULL,
  `price` varchar(5) NOT NULL,
  PRIMARY KEY (`eventId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,1,'2019-11-12',1,1,1,1,'3'),(2,1,'2019-11-12',1,2,1,2,'3');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoriteSports`
--

DROP TABLE IF EXISTS `favoriteSports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoriteSports` (
  `favoriteSportId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `sportId` int(11) NOT NULL,
  PRIMARY KEY (`favoriteSportId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoriteSports`
--

LOCK TABLES `favoriteSports` WRITE;
/*!40000 ALTER TABLE `favoriteSports` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoriteSports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leagues`
--

DROP TABLE IF EXISTS `leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leagues` (
  `leagueId` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `leagueName` varchar(100) DEFAULT NULL,
  `leagueType` text,
  PRIMARY KEY (`leagueId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'Bronze Intermediate','Vivian O. Hoffman'),(2,'Et Libero Proin LLP','Cruz U. Atkinson'),(3,'Dolor Nulla Semper Associates','Melissa P. Buck'),(4,'Lobortis Inc.','Sopoline R. Bryan'),(5,'Feugiat Placerat Velit Associates','Zeph J. Gilliam');
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `locationID` int(11) NOT NULL AUTO_INCREMENT,
  `locationName` varchar(100) NOT NULL,
  `lat` int(15) NOT NULL,
  `lon` int(15) NOT NULL,
  PRIMARY KEY (`locationID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Irvine Great Park',-77,136),(2,'Veeh Ranch Park',-24,-39),(3,'Mountain Ranch Park',-24,-150),(4,'Ultricies Ornare Limited',63,23),(5,'Mauris Ut Quam Incorporated',-36,174),(6,'Vivamus Nibh Dolor Ltd',36,-153),(7,'Vitae Inc.',82,-47),(8,'A Scelerisque Sed Consulting',28,-142),(9,'Varius Ultrices Consulting',-34,-150),(10,'Parturient Montes Industries',49,-28);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizer`
--

DROP TABLE IF EXISTS `organizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organizer` (
  `organizerId` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`organizerId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizer`
--

LOCK TABLES `organizer` WRITE;
/*!40000 ALTER TABLE `organizer` DISABLE KEYS */;
INSERT INTO `organizer` VALUES (1,'TaShya','Morse','malesuada.malesuada@Crasconvallisconvallis.net','(401) 661-0553'),(2,'Dillon','Ward','Aliquam@arcuMorbisit.net','(557) 297-3072'),(3,'Martena','Baldwin','et.magna.Praesent@elementum.com','(969) 613-2930'),(4,'Shellie','Miller','Morbi.metus.Vivamus@Sednullaante.edu','(615) 500-8859'),(5,'Hedy','England','sed.hendrerit@ultricesVivamus.edu','(875) 287-8481'),(6,'Cyrus','Fulton','mi@Quisqueporttitor.com','(168) 895-4644'),(7,'Kalia','Buchanan','aliquet@nequevenenatis.co.uk','(777) 418-8113'),(8,'Imani','Carpenter','at.lacus@fringillaeuismod.edu','(983) 772-3724'),(9,'Acton','Owen','sagittis@dictumultricies.com','(395) 366-1535'),(10,'Fallon','Middleton','est.ac@Integeraliquamadipiscing.edu','(989) 855-5893');
/*!40000 ALTER TABLE `organizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `reviewId` int(11) NOT NULL AUTO_INCREMENT,
  `eventId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `review` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rating` int(5) NOT NULL,
  PRIMARY KEY (`reviewId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sports` (
  `sportId` int(11) NOT NULL AUTO_INCREMENT,
  `sportType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`sportId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Hockey'),(2,'Flag Football'),(3,'Baseball'),(4,'Football'),(5,'Bowling'),(6,'Curling'),(7,'Tennis'),(8,'Indoor Basketball'),(9,'Outdoor Basketball'),(10,'Outdoor Soccer'),(11,'Indoor Soccer'),(12,'Outdoor Beach Volleyball'),(13,'Indoor Volleyball'),(14,'Golf'),(15,'Kickball'),(16,'Pickleball'),(17,'Bocce ball'),(18,'Spikeball'),(19,'Ultimate Frisbee'),(20,'Disc Golf'),(21,'Racquetball'),(22,'Dodgeball'),(23,'Futsol'),(24,'Cornhole'),(25,'Sport'),(26,'Sport'),(27,'Sport'),(28,'Sport'),(29,'Sport'),(30,'Sport'),(31,'Sport'),(32,'Sport'),(33,'Sport'),(34,'Sport'),(35,'Sport'),(36,'Sport'),(37,'Sport'),(38,'Sport'),(39,'Sport'),(40,'Sport'),(41,'Sport'),(42,'Sport'),(43,'Sport'),(44,'Sport'),(45,'Sport'),(46,'Sport'),(47,'Sport'),(48,'Sport'),(49,'Sport'),(50,'Sport'),(51,'Sport'),(52,'Sport'),(53,'Sport'),(54,'Sport'),(55,'Sport'),(56,'Sport'),(57,'Sport'),(58,'Sport'),(59,'Sport'),(60,'Sport'),(61,'Sport'),(62,'Sport'),(63,'Sport'),(64,'Sport'),(65,'Sport'),(66,'Sport'),(67,'Sport'),(68,'Sport'),(69,'Sport'),(70,'Sport'),(71,'Sport'),(72,'Sport'),(73,'Sport'),(74,'Sport'),(75,'Sport'),(76,'Sport'),(77,'Sport'),(78,'Sport'),(79,'Sport'),(80,'Sport'),(81,'Sport'),(82,'Sport'),(83,'Sport'),(84,'Sport'),(85,'Sport'),(86,'Sport'),(87,'Sport'),(88,'Sport'),(89,'Sport'),(90,'Sport'),(91,'Sport'),(92,'Sport'),(93,'Sport'),(94,'Sport'),(95,'Sport'),(96,'Sport'),(97,'Sport'),(98,'Sport'),(99,'Sport'),(100,'Sport');
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `location` varchar(50) NOT NULL,
  `lat` int(11) NOT NULL,
  `lon` int(11) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'firstAnastasia','Bishop','',30,'Ap #954-9308 Nec Road',8,-119),(2,'firstTalon','Sharpe','',70,'P.O. Box 177, 1701 Arcu. Road',87,86),(3,'firstMaia','Oneill','',54,'P.O. Box 512, 5258 Ut, Avenue',58,167),(4,'firstMargaret','Burch','',84,'P.O. Box 582, 8765 Nibh. Avenue',-66,-113),(5,'firstGrant','Ewing','',67,'Ap #810-5034 Non, Av.',-59,28);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-26 19:45:26
