CREATE TABLE `dogbreed` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` TEXT NOT NULL,
	`min_life` INT,
	`max_life` INT,
	`imgurl` TEXT,
	`temperament` TEXT,
	`intelligence` TEXT,
	PRIMARY KEY (`id`)
)DEFAULT CHARSET=UTF8;