-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: local-sports
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
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user-id` int(11) NOT NULL,
  `location-id` int(11) NOT NULL,
  `review-description` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location-id` int(11) NOT NULL,
  `organizer-id` int(11) NOT NULL,
  `sport-id` int(11) NOT NULL,
  `date` date NOT NULL,
  `event-description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `event-name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,11,1,2,'2019-11-30','Come play basketball with me, Jocelyne Tubbles this weekend at 6 pm!','Basketball for fun!'),(4,13,6,2,'2019-12-11','come play basketball with us!','random basketball shennannigans'),(5,3,3,3,'2020-02-12','Come play baseball at the park! We\'ll be meeting at 630 pm','Park Baseball'),(6,4,4,1,'2020-01-09','Come play an intense soccer match with us at 8 am!','Kicking the soccer ball '),(7,5,5,3,'2019-12-25','Come play baseball on christmas because you hate yourself and this sport sucks','Christmas time baseball'),(8,6,6,3,'2019-12-20','come punch each other with bats at our christmas themed baseball game!','buh buh buh baseball!'),(9,7,7,2,'2019-12-31','come throw a ball in a hoop this year for new years! ','throw a ball in a hoop'),(10,8,8,1,'2019-12-17','low key soccer for beginners','beginner soccer'),(11,9,9,2,'2020-01-16','come shoot some baskethewps with us!','baskethewps at 8 pm '),(12,10,10,1,'2020-01-13','kick some balls at the park!','Soccer time for cool kids '),(13,12,11,3,'2020-01-16','come smack some balls with a bat!','smacking balls with a bat at the park');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (3,'William R Mason Regional Park','18712 University Dr, Irvine, CA 92612',33.657001,117.831596),(4,'Irvine Great Park','Great Park Blvd Irvine, CA 92618',33.796299,117.752602),(5,'Orange County Great Park','8000 Great Park Boulevard, Irvine, CA 92618',33.673401,117.745796),(6,'Parasol Park','375 Magnet, Irvine, CA 92618',33.680302,117.735199),(7,'Los Olivos Community Park','101 Alfonso Dr, Irvine, CA 92618',33.635899,117.745796),(8,'Quail Hill Community Park','35 Shady Canyon Dr, Irvine, CA 92603',33.652802,117.782204),(9,'Bill Barber Memorial Park','4 Civic Center Plaza, Irvine, CA 92606',33.688301,117.822800),(10,'Heritage Park Community Center','14301 Yale Ave &, Walnut Ave, Irvine, CA 92604',33.700802,117.777100),(11,'Beacon Park','501 Benchmark, Irvine, CA 92618',33.688900,117.733398),(12,'Oak Creek Park','15616 Valley Oak Dr, Irvine, CA 92618',33.667198,117.771301),(13,'Sweet Shade Park','15 Sweet Shade, Irvine, CA 92606',33.714058,117.768120);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location-sports`
--

DROP TABLE IF EXISTS `location-sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location-sports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sports-id` int(11) NOT NULL,
  `location-id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location-sports`
--

LOCK TABLES `location-sports` WRITE;
/*!40000 ALTER TABLE `location-sports` DISABLE KEYS */;
INSERT INTO `location-sports` VALUES (1,3,3),(5,1,4),(6,3,5),(9,3,6),(14,1,8),(19,1,10),(20,2,11),(28,2,7),(29,2,9),(30,3,12),(31,2,13);
/*!40000 ALTER TABLE `location-sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizer-info`
--

DROP TABLE IF EXISTS `organizer-info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organizer-info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `organizer-name` varchar(60) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizer-info`
--

LOCK TABLES `organizer-info` WRITE;
/*!40000 ALTER TABLE `organizer-info` DISABLE KEYS */;
INSERT INTO `organizer-info` VALUES (1,'Jocelyne Tubbles','7423432800','jtubbles0@weibo.com'),(3,'Donavon Austins','5235300566','daustins1@imdb.com'),(4,'Adrienne Proger','1911770350','aproger2@hexun.com'),(5,'Matthieu Duckers','4528258739','mduckers3@about.me'),(6,'Elinor Bowick','8334609734','ebowick4@virginia.edu'),(7,'Janetta Koppeck','6039854256','jkoppeck5@parallels.com'),(8,'Berti McNish','7397148019','bmcnish6@phpbb.com'),(9,'Keri Czajkowski','8232500354','kczajkowski7@godaddy.com'),(10,'Caron Semper','1882096588','csemper8@jiathis.com'),(11,'Thomasin Lindholm','4078981257','tlindholm9@mayoclinic.com');
/*!40000 ALTER TABLE `organizer-info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sport-type` varchar(60) NOT NULL,
  `event-length` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Soccer',90),(2,'Basketball',60),(3,'Baseball',90);
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 17:56:07
