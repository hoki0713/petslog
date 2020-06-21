CREATE TABLE `catbreed`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` TEXT NOT NULL,
`min_life` INT,
`max_life` INT,
`origin` TEXT,
`imgurl` TEXT,
`temperament` TEXT,
PRIMARY KEY(id)
)DEFAULT CHARSET=UTF8;