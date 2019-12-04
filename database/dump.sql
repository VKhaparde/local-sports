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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `event-id` int(11) NOT NULL AUTO_INCREMENT,
  `location-id` int(11) NOT NULL,
  `organizer-id` int(11) NOT NULL,
  `sport-id` int(11) NOT NULL,
  `event-description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `event-name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `event-day` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`event-id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,11,1,2,'Come play basketball with me, Jocelyne Tubbles this weekend at 6 pm!','Basketball for fun!','Monday'),(4,13,6,2,'come play basketball with us!','random basketball shennannigans','Monday'),(5,3,3,3,'Come play baseball at the park! We\'ll be meeting at 630 pm','Park Baseball','Tuesday'),(6,4,4,1,'Come play an intense soccer match with us at 8 am!','Kicking the soccer ball ','Wednesday'),(7,5,5,3,'Come play baseball on christmas because you hate yourself and this sport sucks','Christmas time baseball','Thursday'),(8,6,6,3,'come punch each other with bats at our christmas themed baseball game!','buh buh buh baseball!','Friday'),(9,7,7,2,'come throw a ball in a hoop this year for new years! ','throw a ball in a hoop','Saturday'),(10,8,8,1,'low key soccer for beginners','beginner soccer','Saturday'),(11,9,9,2,'come shoot some baskethewps with us!','baskethewps at 8 pm ','Sunday'),(12,10,10,1,'kick some balls at the park!','Soccer time for cool kids ','Sunday'),(13,12,11,3,'come smack some balls with a bat!','smacking balls with a bat at the park','Friday');
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
  `review-id` int(11) NOT NULL,
  `review-average` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (3,'William R Mason Regional Park','18712 University Dr, Irvine, CA 92612',33.657001,117.831596,1,4.50),(4,'Irvine Great Park','Great Park Blvd Irvine, CA 92618',33.796299,117.752602,2,3.50),(5,'Orange County Great Park','8000 Great Park Boulevard, Irvine, CA 92618',33.673401,117.745796,3,5.00),(6,'Parasol Park','375 Magnet, Irvine, CA 92618',33.680302,117.735199,4,2.50),(7,'Los Olivos Community Park','101 Alfonso Dr, Irvine, CA 92618',33.635899,117.745796,5,4.50),(8,'Quail Hill Community Park','35 Shady Canyon Dr, Irvine, CA 92603',33.652802,117.782204,6,3.50),(9,'Bill Barber Memorial Park','4 Civic Center Plaza, Irvine, CA 92606',33.688301,117.822800,7,4.00),(10,'Heritage Park Community Center','14301 Yale Ave &, Walnut Ave, Irvine, CA 92604',33.700802,117.777100,8,3.50),(11,'Beacon Park','501 Benchmark, Irvine, CA 92618',33.688900,117.733398,9,3.00),(12,'Oak Creek Park','15616 Valley Oak Dr, Irvine, CA 92618',33.667198,117.771301,10,4.50),(13,'Sweet Shade Park','15 Sweet Shade, Irvine, CA 92606',33.714058,117.768120,11,5.00);
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
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user-id` int(11) NOT NULL,
  `location-id` int(11) NOT NULL,
  `review-description` varchar(300) NOT NULL,
  `review-rating` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,3,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Eget dolor morbi non arcu. Non arcu risus quis varius.',4.00),(2,2,4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.50),(3,3,5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor',3.50),(4,1,5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Nibh mauris cursus mattis molestie a.',4.00),(5,2,6,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.',3.50),(6,3,7,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.',5.00),(7,1,8,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.50),(8,2,9,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.00),(9,3,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.50),(10,1,11,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.',3.00),(11,2,12,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis viverra nibh cras pulvinar mattis nunc. Id volutpat lacus laoreet non curabitur gravida.',4.00),(12,3,13,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.50),(13,2,3,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae.',3.00),(14,3,3,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4.50),(15,1,4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit amet.',4.00);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Soccer',90),(2,'Basketball',60),(3,'Baseball',90);
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'James Franco','714-714-7147','jamesfrancofranco@gmail.com','male','StumpyArm','12345'),(2,'Gene Hackman','949-949-9949','genehackmanmail@mail.com','male','SuperMansOutHereSomewhere','clarkkent'),(3,'Jenkins Jenkins','540-540-5540','oldmanjenkins420@gmail.cmo','male','OldManJenkins420','420blazeit');
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

-- Dump completed on 2019-12-04 21:31:42
