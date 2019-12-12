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
  `time` varchar(10) NOT NULL,
  PRIMARY KEY (`event-id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,11,1,2,'Come play basketball with me, Jocelyne Tubbles this weekend!','Basketball for fun!','Monday','3:00 pm '),(4,13,6,2,'come play basketball with us!','random basketball shennannigans','Monday','4:00 pm'),(5,3,3,3,'Come play baseball at the park!','Park Baseball','Tuesday','12:30 pm'),(6,4,4,1,'Come play an intense soccer match with us!','Kicking the soccer ball ','Wednesday','8:00 am'),(7,5,5,3,'Come play baseball because you have nothing better to do ','Boring Baseball','Thursday','10:00 am'),(8,6,6,3,'come punch each other with bats at our baseball game!','buh buh buh baseball!','Friday','8:00 pm'),(9,7,7,2,'come throw a ball in a hoop for your Saturday night festivities! ','throw a ball in a hoop','Saturday','9:00 pm'),(10,8,8,1,'low key soccer for beginners','beginner soccer','Saturday','12:00 pm'),(11,9,9,2,'come shoot some baskethewps with us!','baskethewps ','Sunday','11:00 am'),(12,10,10,1,'kick some balls at the park!','Soccer time for cool kids ','Sunday','1:00 pm'),(13,12,11,3,'come smack some balls with a bat!','smacking balls with a bat at the park','Friday','11:30 am'),(14,14,12,1,'GTFO unless you\'re a pro','Pros Only Soccer','Monday','10:45 am'),(15,15,13,2,'Come only if you think youre the next Michael Jordan','Pros Only Basketball','Tuesday','3:45 pm'),(16,16,14,3,'We accept mediocrity','Pros Only Baseball','Wednesday ','3:00 pm'),(17,17,15,1,'Its some kids birthday and we\'re playing soccer. ','Birthday Party Soccer','Thursday','10:00 am'),(18,18,16,2,'come in your favorite Hawaiian shirt because you\'re an awesome human being and have a Hawaiian shirt.','Hawaiian Shirt Friday Basketball','Friday','8:00 pm'),(19,19,17,3,'Come ruin your Saturday by playing baseball in the morning','Saturday Baseball Sadness','Saturday','11:00 am'),(20,20,18,1,'Come play Soccer! On Saturday','Soccer On Saturday','Saturday','11:30 am');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liked-events`
--

DROP TABLE IF EXISTS `liked-events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liked-events` (
  `user-id` int(11) NOT NULL,
  `event-id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liked-events`
--

LOCK TABLES `liked-events` WRITE;
/*!40000 ALTER TABLE `liked-events` DISABLE KEYS */;
INSERT INTO `liked-events` VALUES (1,3),(6,8),(6,14),(7,4),(1,11),(1,9),(1,18),(1,8);
/*!40000 ALTER TABLE `liked-events` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (3,'William R Mason Regional Park','18712 University Dr, Irvine, CA 92612',33.657001,117.831596,1,4.50),(4,'Irvine Great Park','Great Park Blvd Irvine, CA 92618',33.796299,117.752602,2,3.50),(5,'Orange County Great Park','8000 Great Park Boulevard, Irvine, CA 92618',33.673401,117.745796,3,5.00),(6,'Parasol Park','375 Magnet, Irvine, CA 92618',33.680302,117.735199,4,3.50),(7,'Los Olivos Community Park','101 Alfonso Dr, Irvine, CA 92618',33.635899,117.745796,5,4.50),(8,'Quail Hill Community Park','35 Shady Canyon Dr, Irvine, CA 92603',33.652802,117.782204,6,3.50),(9,'Bill Barber Memorial Park','4 Civic Center Plaza, Irvine, CA 92606',33.688301,117.822800,7,4.00),(10,'Heritage Park Community Center','14301 Yale Ave &, Walnut Ave, Irvine, CA 92604',33.700802,117.777100,8,3.50),(11,'Beacon Park','501 Benchmark, Irvine, CA 92618',33.688900,117.733398,9,3.00),(12,'Oak Creek Park','15616 Valley Oak Dr, Irvine, CA 92618',33.667198,117.771301,10,4.50),(13,'Sweet Shade Park','15 Sweet Shade, Irvine, CA 92606',33.714058,117.768120,11,5.00),(14,'Turtle Rock Community Park','1 Sunnyhill, Irvine CA 92603',33.636978,117.804855,12,4.50),(15,'Knollcrest Park','2069 Knollcrest, Irvine, CA 92603',33.651409,117.772415,13,4.00),(16,'Stonegate Park','280 Honors, Irvine, CA 92620',33.708149,117.740974,14,3.50),(17,'Northwood Community Center','4531 Bryan Ave, Irvine, CA 92620',33.714130,117.768486,15,4.00),(18,'Mike Ward Community Park Woodbridge','20 Lake Rd, Irvine, CA 92604',33.678783,117.801727,16,4.50),(19,'Las Lomas Community Park and Community Center','10 Federation Way, Irvine CA 92603',33.634457,117.828148,17,5.00),(20,'Ridgeview Park','56 Ridge Valley, Irvine, CA 92618',33.710632,117.720413,18,4.00);
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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location-sports`
--

LOCK TABLES `location-sports` WRITE;
/*!40000 ALTER TABLE `location-sports` DISABLE KEYS */;
INSERT INTO `location-sports` VALUES (1,3,3),(5,1,4),(6,3,5),(9,3,6),(14,1,8),(19,1,10),(20,2,11),(28,2,7),(29,2,9),(30,3,12),(31,2,13),(32,1,14),(33,2,15),(34,3,16),(35,1,17),(36,2,18),(37,3,19),(38,1,20);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizer-info`
--

LOCK TABLES `organizer-info` WRITE;
/*!40000 ALTER TABLE `organizer-info` DISABLE KEYS */;
INSERT INTO `organizer-info` VALUES (1,'Jocelyne Tubbles','7423432800','jtubbles0@weibo.com'),(3,'Donavon Austins','5235300566','daustins1@imdb.com'),(4,'Adrienne Proger','1911770350','aproger2@hexun.com'),(5,'Matthieu Duckers','4528258739','mduckers3@about.me'),(6,'Elinor Bowick','8334609734','ebowick4@virginia.edu'),(7,'Janetta Koppeck','6039854256','jkoppeck5@parallels.com'),(8,'Berti McNish','7397148019','bmcnish6@phpbb.com'),(9,'Keri Czajkowski','8232500354','kczajkowski7@godaddy.com'),(10,'Caron Semper','1882096588','csemper8@jiathis.com'),(11,'Thomasin Lindholm','4078981257','tlindholm9@mayoclinic.com'),(12,'Gregg Kellie','123612462','gkellie0@yolasite.com'),(13,'Muriel Haffner','7668168176','mhaffner1@yahoo.com'),(14,'Eirena Clarkin','1893278822','eclarkin2@webnode.com'),(15,'Edwina Doe','4987436409','edoe3@jugem.jp'),(16,'Harwell Klauber','5514603193','hklauber4@webs.com'),(17,'Ignacius Winsborrow','9606830072','iwinsborrow5@hugedomains.com'),(18,'Hodge Iacopo','2486859754','hiacopo6@php.net'),(19,'Odella Southers','5942063916','osouthers7@dedecms.com'),(20,'Umberto Hlavecek ','3537417074','uhlavecek8@example.com');
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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,3,'This was awesome! Would definitely do it again!',4.00),(2,2,4,'Highly recommend - i know ill be back!',4.50),(3,3,5,'it was an okay event, ill go back but theres some improvements to be made ',3.50),(4,1,5,'Ill be back next week with more friends! ',4.00),(5,2,6,'This was a mediocre event - i dont know if ill be back :( ',3.50),(6,3,7,'This was the most fun ive had in such a long time! I cant wait to come back next week! ',5.00),(7,1,8,'My family and I had so much fun at this! Highly recommend',4.50),(8,2,9,'Great time! Will be back next week. ',4.00),(9,3,10,'WOW! what a great event :) ',4.50),(10,1,11,'This event sucked horribly and ill never go back ',3.00),(11,2,12,'Not the best, not the worst, but ill be back!',4.00),(12,3,13,'What an amazing experience! ',4.50),(13,2,3,'Yeah, this event was a joke. The leader had no idea what to do and i was just disappointed. Thanks for nothing',3.00),(14,3,3,'Super cool beans bro',4.50),(15,1,4,'Hell yes this was awesome!',4.00),(16,1,14,'This event was great!',5.00),(17,2,14,'Hell to the yes! ',4.50),(18,3,14,'WHAT A GREAT EVENT. I THINK MY CAPSLOCK IS BROKEN',5.00),(19,1,15,'bro, for real?',3.00),(20,2,15,'Never again',3.50),(21,3,15,'WHYYYY',3.00),(22,1,16,'POSITIVE REVIEW YEAH!',5.00),(23,2,16,'definitely coming back ',4.50),(24,3,16,'DEFINITELY YES ',5.00),(25,1,17,'broooooooooooooooooooo this was great ',4.50),(26,2,17,'hey yeah i might go back ',4.00),(27,1,18,'not bad!',4.00),(28,2,18,'Id come back ',4.00),(29,3,18,'YEEEEEEEEEEEEEESSSSSSSSSSSS',5.00),(30,1,19,'yeah ill probably come back ',4.00),(31,2,19,'it was pretty cool',4.50),(32,1,4,'This was a great time!',4.50),(33,2,5,'Such a great time!',4.00),(34,1,6,'WHAT AN EXCELLENT TIME TO BE ALIVE ',5.00),(35,1,7,'THIS WAS A TREMENDOUS AMOUNT OF FUN YEAH',5.00),(36,2,7,'you know ill be back to this one ',4.50),(37,2,8,'Ill be back! ',5.00),(38,1,9,'it was a decent event ',2.00),(39,1,10,'definitely an excellent time ',4.50),(40,2,11,'Hey this was a pretty cool event! ',4.00),(41,3,11,'I might come back, not sure ',4.00),(42,1,12,'THIS WAS GREAT ',4.50),(43,1,13,'This was amazing!',5.00),(44,2,13,'Cant wait to come back next week!',4.00),(45,1,20,'This was a great time and i cant wait to come back next week! ',4.00),(46,2,20,'This was great!',5.00);
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
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'StumpyArm','$2y$10$qblF9Z5zVFH4YBkJsyeM.eEV360I/MyKrDZXu1etic9YlmMoRUmd2'),(2,'OldManJenkins420','$2y$10$goOiqMFja2/r.rPV0oZvjOuzUPtB9DmbOv0sXqtFDbbS3zoImIVkq'),(3,'GeneHackman','$2y$10$k6EgEtmaO8q7.aCqRXPTd.hEfRU.yq/1uXo.dPU6OYS1CVWVHA8/S'),(7,'Tomas','$2y$10$eyPrltRTB7MuyJO0VHOgNOH97hOhg3Nn5o5kg5wefZJlg.CaDVO6e');
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

-- Dump completed on 2019-12-12 21:16:30
