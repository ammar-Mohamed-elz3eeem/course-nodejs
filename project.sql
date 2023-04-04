CREATE DATABASE IF NOT EXISTS sblog;

USE sblog;

CREATE TABLE IF NOT EXISTS author (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        age TINYINT UNSIGNED NOT NULL,
        email VARCHAR(160) NOT NULL UNIQUE,
        total_posts INT UNSIGNED,
        avatar VARCHAR(200),
        username VARCHAR(60) NOT NULL UNIQUE,
        password VARCHAR(20) NOT NULL,
        role ENUM('admin','editor','user') NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(60) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        author_id INT NOT NULL,
        image VARCHAR(120),
        created_at DATETIME DEFAULT NOW(),
        FOREIGN KEY (author_id) REFERENCES author(id)
);

CREATE TABLE IF NOT EXISTS author_profile (
        id INT AUTO_INCREMENT PRIMARY KEY,
        author_id INT NOT NULL,
        website VARCHAR(200),
        facebook VARCHAR(200),
        twitter VARCHAR(200)
);

ALTER TABLE author_profile ADD FOREIGN KEY (author_id) REFERENCES author(id) ON DELETE CASCADE

