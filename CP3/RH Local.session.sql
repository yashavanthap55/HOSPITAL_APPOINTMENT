-- CREATE DATABASE hospital_db;
USE hospital_db;

CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    gender ENUM('M', 'F', 'Other'),
    address VARCHAR(255)
);
CREATE TABLE LOGIN(
    username VARCHAR(20),
    password VARCHAR(20)
);

SELECT * FROM patients;
SELECT * FROM LOGIN;
ALTER TABLE patients ADD COLUMN doctor VARCHAR(255);
DROP DATABASE login;
ALTER TABLE patients MODIFY gender VARCHAR(10);

ALTER TABLE patients
ADD COLUMN date DATE NOT NULL,
ADD COLUMN time TIME NOT NULL;

DELETE FROM patients WHERE name = 'Yashavantha P';
SET sql_mode = 'STRICT_ALL_TABLES';
