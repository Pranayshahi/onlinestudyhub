-- OnlineStudyHub — MySQL Setup
-- Run this once to initialize the database

CREATE DATABASE IF NOT EXISTS onlinestudyhub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE onlinestudyhub;

CREATE TABLE IF NOT EXISTS students (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name          VARCHAR(255) NOT NULL,
  created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teachers (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name          VARCHAR(255) NOT NULL,
  avatar        VARCHAR(40)  DEFAULT NULL,
  subject       VARCHAR(255) NOT NULL,
  class_ids     VARCHAR(255) NOT NULL COMMENT 'comma-separated: class-6,class-7,jee,neet',
  experience    INT          DEFAULT 1,
  qualification VARCHAR(255) NOT NULL,
  rating        DECIMAL(3,2) DEFAULT 4.5,
  students      INT          DEFAULT 0,
  fee           INT          DEFAULT 500 COMMENT 'per session in INR',
  bio           TEXT,
  topics        TEXT         COMMENT 'comma-separated topic list',
  contact       VARCHAR(255),
  profile_pic   MEDIUMTEXT   COMMENT 'base64 data URL of profile photo',
  available     TINYINT(1)   DEFAULT 1,
  created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  student_email VARCHAR(255) NOT NULL,
  teacher_id    VARCHAR(50)  NOT NULL,
  class_id      VARCHAR(50)  NOT NULL,
  subject_id    VARCHAR(50)  NOT NULL,
  topic_id      VARCHAR(50),
  status        ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  booking_date  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Run this if the table already exists to add the column:
-- ALTER TABLE teachers ADD COLUMN profile_pic MEDIUMTEXT AFTER available;
