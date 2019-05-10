DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO `users` VALUES ('1', 'John', 'Smith');
INSERT INTO `users` VALUES ('2', 'Adam', 'Miller');
INSERT INTO `users` VALUES ('3', 'Ron', 'Walker');
INSERT INTO `users` VALUES ('4', 'Anna', 'Roman');

DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `value` Double(20,2) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`)
) ENGINE=InnoDb AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


INSERT INTO `payments` VALUES ('1', '50', '1');
INSERT INTO `payments` VALUES ('2', '52', '1');
INSERT INTO `payments` VALUES ('3', '680', '2');
INSERT INTO `payments` VALUES ('4', '13', '3');
INSERT INTO `payments` VALUES ('5', '23', '3');
INSERT INTO `payments` VALUES ('6', '2000', '2');

SELECT u.user_id, u.name, SUM(p.value) AS paymant
FROM users u
INNER JOIN payments p ON u.user_id = p.user_id
GROUP BY u.user_id
HAVING SUM(p.value)<500;

SELECT u.user_id, u.name
FROM users u
WHERE u.user_id IN(SELECT p.user_id
FROM payments p
GROUP BY p.user_id
HAVING SUM(p.value)<500);
