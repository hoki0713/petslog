CREATE TABLE `account` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(200) UNIQUE,
	`hashed_password` TEXT,
	`salt` TEXT,
	`name` TEXT,
	`type` TEXT,
	PRIMARY KEY (`id`)
)DEFAULT CHARSET=UTF8;
