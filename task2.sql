DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO `posts` VALUES ('1', 'Some post #1', '2018-08-02 12:06:22');
INSERT INTO `posts` VALUES ('2', 'Some post #2', '2018-08-03 17:16:51');
INSERT INTO `posts` VALUES ('3', 'Some post #3', '2019-01-10 09:02:12');
INSERT INTO `posts` VALUES ('4', 'Some post #4', '2019-02-23 20:46:32');
INSERT INTO `posts` VALUES ('5', 'Some post #5', '2019-03-02 12:06:22');
INSERT INTO `posts` VALUES ('6', 'Some post #6', '2019-03-03 17:16:51');
INSERT INTO `posts` VALUES ('7', 'Some post #7', '2019-03-10 09:02:12');
INSERT INTO `posts` VALUES ('8', 'Some post #8', '2019-04-23 20:46:32');

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO `news` VALUES ('1', 'Some news #1', '2018-07-03 15:06:22');
INSERT INTO `news` VALUES ('2', 'Some news #2', '2018-08-03 18:16:51');
INSERT INTO `news` VALUES ('3', 'Some news #3', '2019-02-10 09:02:12');
INSERT INTO `news` VALUES ('4', 'Some news #4', '2019-02-23 21:46:32');

SELECT * ,'post' AS type
FROM posts
UNION
SELECT * ,'news' AS type
FROM news
ORDER BY date
LIMIT 10;

