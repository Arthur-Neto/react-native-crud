CREATE DATABASE clientsdb

USE clientsdb

CREATE TABLE `person` (
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;