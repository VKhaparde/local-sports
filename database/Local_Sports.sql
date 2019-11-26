-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2019 at 11:17 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Local Sports`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventId` smallint(255) UNSIGNED NOT NULL,
  `sportId` smallint(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `locationId` smallint(11) UNSIGNED NOT NULL,
  `leagueId` smallint(255) UNSIGNED NOT NULL,
  `organizerId` smallint(255) UNSIGNED NOT NULL,
  `reviewId` smallint(255) UNSIGNED NOT NULL,
  `price` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventId`, `sportId`, `date`, `locationId`, `leagueId`, `organizerId`, `reviewId`, `price`) VALUES
(1, 1, '2019-11-12', 1, 1, 1, 1, '3'),
(2, 1, '2019-11-12', 1, 2, 1, 2, '3');

-- --------------------------------------------------------

--
-- Table structure for table `favoriteSports`
--

CREATE TABLE `favoriteSports` (
  `favoriteSportId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `sportId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `leagues`
--

CREATE TABLE `leagues` (
  `leagueId` mediumint(8) UNSIGNED NOT NULL,
  `leagueName` varchar(100) DEFAULT NULL,
  `leagueType` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leagues`
--

INSERT INTO `leagues` (`leagueId`, `leagueName`, `leagueType`) VALUES
(1, 'Bronze Intermediate', 'Vivian O. Hoffman'),
(2, 'Et Libero Proin LLP', 'Cruz U. Atkinson'),
(3, 'Dolor Nulla Semper Associates', 'Melissa P. Buck'),
(4, 'Lobortis Inc.', 'Sopoline R. Bryan'),
(5, 'Feugiat Placerat Velit Associates', 'Zeph J. Gilliam');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `locationID` int(11) NOT NULL,
  `locationName` varchar(100) NOT NULL,
  `address` varchar(30) NOT NULL,
  `lat` int(15) NOT NULL,
  `lon` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`locationID`, `locationName`, `address`, `lat`, `lon`) VALUES
(1, 'Rutrum LLC', 'Ap #594-8335 Mi, Rd.', -77, 136),
(2, 'Duis Sit Amet Foundation', 'Ap #997-2391 Libero Rd.', -24, -39),
(3, 'Cubilia Curae; LLC', '384-6366 Sodales Road', -24, -150),
(4, 'Ultricies Ornare Limited', 'Ap #167-9499 Euismod Rd.', 63, 23),
(5, 'Mauris Ut Quam Incorporated', 'Ap #337-687 Sapien, Ave', -36, 174),
(6, 'Vivamus Nibh Dolor Ltd', 'Ap #955-4290 Ultricies Street', 36, -153),
(7, 'Vitae Inc.', '305-748 Dictum Rd.', 82, -47),
(8, 'A Scelerisque Sed Consulting', 'Ap #186-5186 Nunc Av.', 28, -142),
(9, 'Varius Ultrices Consulting', '3972 Ante Rd.', -34, -150),
(10, 'Parturient Montes Industries', '6769 Sagittis Road', 49, -28);

-- --------------------------------------------------------

--
-- Table structure for table `organizer`
--

CREATE TABLE `organizer` (
  `organizerId` mediumint(8) UNSIGNED NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `organizer`
--

INSERT INTO `organizer` (`organizerId`, `firstName`, `lastName`, `email`, `phone`) VALUES
(1, 'TaShya', 'Morse', 'malesuada.malesuada@Crasconvallisconvallis.net', '(401) 661-0553'),
(2, 'Dillon', 'Ward', 'Aliquam@arcuMorbisit.net', '(557) 297-3072'),
(3, 'Martena', 'Baldwin', 'et.magna.Praesent@elementum.com', '(969) 613-2930'),
(4, 'Shellie', 'Miller', 'Morbi.metus.Vivamus@Sednullaante.edu', '(615) 500-8859'),
(5, 'Hedy', 'England', 'sed.hendrerit@ultricesVivamus.edu', '(875) 287-8481'),
(6, 'Cyrus', 'Fulton', 'mi@Quisqueporttitor.com', '(168) 895-4644'),
(7, 'Kalia', 'Buchanan', 'aliquet@nequevenenatis.co.uk', '(777) 418-8113'),
(8, 'Imani', 'Carpenter', 'at.lacus@fringillaeuismod.edu', '(983) 772-3724'),
(9, 'Acton', 'Owen', 'sagittis@dictumultricies.com', '(395) 366-1535'),
(10, 'Fallon', 'Middleton', 'est.ac@Integeraliquamadipiscing.edu', '(989) 855-5893');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewId` int(11) NOT NULL,
  `eventId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `review` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rating` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `sportId` int(11) NOT NULL,
  `sportType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`sportId`, `sportType`) VALUES
(1, 'Hockey'),
(2, 'Flag Football'),
(3, 'Baseball'),
(4, 'Football'),
(5, 'Bowling'),
(6, 'Curling'),
(7, 'Tennis'),
(8, 'Indoor Basketball'),
(9, 'Outdoor Basketball'),
(10, 'Outdoor Soccer'),
(11, 'Indoor Soccer'),
(12, 'Outdoor Beach Volleyball'),
(13, 'Indoor Volleyball'),
(14, 'Golf'),
(15, 'Kickball'),
(16, 'Pickleball'),
(17, 'Bocce ball'),
(18, 'Spikeball'),
(19, 'Ultimate Frisbee'),
(20, 'Disc Golf'),
(21, 'Racquetball'),
(22, 'Dodgeball'),
(23, 'Futsol'),
(24, 'Cornhole'),
(25, 'Sport'),
(26, 'Sport'),
(27, 'Sport'),
(28, 'Sport'),
(29, 'Sport'),
(30, 'Sport'),
(31, 'Sport'),
(32, 'Sport'),
(33, 'Sport'),
(34, 'Sport'),
(35, 'Sport'),
(36, 'Sport'),
(37, 'Sport'),
(38, 'Sport'),
(39, 'Sport'),
(40, 'Sport'),
(41, 'Sport'),
(42, 'Sport'),
(43, 'Sport'),
(44, 'Sport'),
(45, 'Sport'),
(46, 'Sport'),
(47, 'Sport'),
(48, 'Sport'),
(49, 'Sport'),
(50, 'Sport'),
(51, 'Sport'),
(52, 'Sport'),
(53, 'Sport'),
(54, 'Sport'),
(55, 'Sport'),
(56, 'Sport'),
(57, 'Sport'),
(58, 'Sport'),
(59, 'Sport'),
(60, 'Sport'),
(61, 'Sport'),
(62, 'Sport'),
(63, 'Sport'),
(64, 'Sport'),
(65, 'Sport'),
(66, 'Sport'),
(67, 'Sport'),
(68, 'Sport'),
(69, 'Sport'),
(70, 'Sport'),
(71, 'Sport'),
(72, 'Sport'),
(73, 'Sport'),
(74, 'Sport'),
(75, 'Sport'),
(76, 'Sport'),
(77, 'Sport'),
(78, 'Sport'),
(79, 'Sport'),
(80, 'Sport'),
(81, 'Sport'),
(82, 'Sport'),
(83, 'Sport'),
(84, 'Sport'),
(85, 'Sport'),
(86, 'Sport'),
(87, 'Sport'),
(88, 'Sport'),
(89, 'Sport'),
(90, 'Sport'),
(91, 'Sport'),
(92, 'Sport'),
(93, 'Sport'),
(94, 'Sport'),
(95, 'Sport'),
(96, 'Sport'),
(97, 'Sport'),
(98, 'Sport'),
(99, 'Sport'),
(100, 'Sport');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `location` varchar(50) NOT NULL,
  `lat` int(11) NOT NULL,
  `lon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `profileImage`, `age`, `location`, `lat`, `lon`) VALUES
(1, 'firstAnastasia', 'Bishop', '', 30, 'Ap #954-9308 Nec Road', 8, -119),
(2, 'firstTalon', 'Sharpe', '', 70, 'P.O. Box 177, 1701 Arcu. Road', 87, 86),
(3, 'firstMaia', 'Oneill', '', 54, 'P.O. Box 512, 5258 Ut, Avenue', 58, 167),
(4, 'firstMargaret', 'Burch', '', 84, 'P.O. Box 582, 8765 Nibh. Avenue', -66, -113),
(5, 'firstGrant', 'Ewing', '', 67, 'Ap #810-5034 Non, Av.', -59, 28);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventId`);

--
-- Indexes for table `favoriteSports`
--
ALTER TABLE `favoriteSports`
  ADD PRIMARY KEY (`favoriteSportId`);

--
-- Indexes for table `leagues`
--
ALTER TABLE `leagues`
  ADD PRIMARY KEY (`leagueId`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`locationID`);

--
-- Indexes for table `organizer`
--
ALTER TABLE `organizer`
  ADD PRIMARY KEY (`organizerId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewId`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`sportId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favoriteSports`
--
ALTER TABLE `favoriteSports`
  MODIFY `favoriteSportId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `leagues`
--
ALTER TABLE `leagues`
  MODIFY `leagueId` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `locationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `organizer`
--
ALTER TABLE `organizer`
  MODIFY `organizerId` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `sportId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
