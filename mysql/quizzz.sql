-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema quizzz
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `quizzz` ;

-- -----------------------------------------------------
-- Schema quizzz
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `quizzz` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `quizzz` ;

-- -----------------------------------------------------
-- Table `quizzz`.`gamequestion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`gamequestion` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`gamequestion` (
  `idGameQuestion` INT(11) NOT NULL,
  `gameQuestionName` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`idGameQuestion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quizzz`.`gamequestionchoices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`gamequestionchoices` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`gamequestionchoices` (
  `idGameChoice` INT(11) NOT NULL,
  `idGameQuestion` INT(11) NOT NULL,
  `gameChoice` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `isRightChoice` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idGameChoice`, `idGameQuestion`),
  CONSTRAINT `FK_GameQuestionChoices_GameQuestion_GameChoices`
    FOREIGN KEY (`idGameChoice`)
    REFERENCES `quizzz`.`gamequestion` (`idGameQuestion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quizzz`.`quizsubject`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`quizsubject` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`quizsubject` (
  `idSubject` INT(11) NOT NULL,
  `subjectName` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `subjectIcon` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`idSubject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quizzz`.`gametable`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`gametable` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`gametable` (
  `idGameTable` INT(11) NOT NULL,
  `gameCode` INT(6) NULL DEFAULT NULL,
  `gameTitle` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `gameGradeBegin` INT(11) NULL DEFAULT NULL,
  `gameGradeEnd` INT(11) NULL DEFAULT NULL,
  `gameLevel` INT(11) NULL DEFAULT NULL,
  `gamePlayed` INT(11) NULL DEFAULT NULL,
  `idSubject` INT(11) NULL DEFAULT NULL,
  `gameImage` LONGBLOB NULL DEFAULT NULL,
  `isPublic` TINYINT(1) NULL DEFAULT NULL,
  `gameTime` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`idGameTable`),
  CONSTRAINT `FK_GameTable_QuizzzSubject`
    FOREIGN KEY (`idSubject`)
    REFERENCES `quizzz`.`quizsubject` (`idSubject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_GameTable_QuizzzSubject` ON `quizzz`.`gametable` (`idSubject` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `quizzz`.`gametable_gamequestion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`gametable_gamequestion` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`gametable_gamequestion` (
  `idGameTable` INT(11) NOT NULL,
  `idGameQuestion` INT(11) NOT NULL,
  CONSTRAINT `idGameQuestion`
    FOREIGN KEY (`idGameQuestion`)
    REFERENCES `quizzz`.`gamequestion` (`idGameQuestion`),
  CONSTRAINT `idGameTable`
    FOREIGN KEY (`idGameTable`)
    REFERENCES `quizzz`.`gametable` (`idGameTable`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `_idx` ON `quizzz`.`gametable_gamequestion` (`idGameQuestion` ASC) VISIBLE;

CREATE INDEX `idGameTable_idx` ON `quizzz`.`gametable_gamequestion` (`idGameTable` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `quizzz`.`sysdiagrams`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`sysdiagrams` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`sysdiagrams` (
  `name` VARCHAR(160) NOT NULL,
  `principal_id` INT(11) NOT NULL,
  `diagram_id` INT(11) NOT NULL,
  `version` INT(11) NULL DEFAULT NULL,
  `definition` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`diagram_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX `UK_principal_name` ON `quizzz`.`sysdiagrams` (`principal_id` ASC, `name` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `quizzz`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`user` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`user` (
  `idUser` INT(11) NOT NULL,
  `userFirstName` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `userLastName` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `userGrades` CHAR(10) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `idSubject` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  CONSTRAINT `FK_User_QuizzzSubject`
    FOREIGN KEY (`idSubject`)
    REFERENCES `quizzz`.`quizsubject` (`idSubject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_User_QuizzzSubject` ON `quizzz`.`user` (`idSubject` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `quizzz`.`userquestionanswer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `quizzz`.`userquestionanswer` ;

CREATE TABLE IF NOT EXISTS `quizzz`.`userquestionanswer` (
  `idUser` INT(11) NOT NULL,
  `idGameQuestion` INT(11) NOT NULL,
  `idGameChoice` INT(11) NULL DEFAULT NULL,
  `isRight` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idUser`, `idGameQuestion`),
  CONSTRAINT `FK_UserQuestionAnswer_GameQuestion_GameChoices`
    FOREIGN KEY (`idGameQuestion`)
    REFERENCES `quizzz`.`gamequestion` (`idGameQuestion`),
  CONSTRAINT `FK_UserQuestionAnswer_User`
    FOREIGN KEY (`idUser`)
    REFERENCES `quizzz`.`user` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_UserQuestionAnswer_GameQuestion_GameChoices` ON `quizzz`.`userquestionanswer` (`idGameQuestion` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
