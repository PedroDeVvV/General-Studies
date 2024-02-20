create database constraints;
use constraints;

#UNIQUE
# ALTER TABLE pessoas ADD COLUMN email VARCHAR(45) UNIQUE;

#PRIMARY KEY
CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255),
    sku VARCHAR(10),
    primary key(id)
);

INSERT INTO produtos(nome, sku)
VALUES("CADEIRA", "123A");

SELECT * FROM produtos;

#FOREIGN KEY
CREATE TABLE pessoas(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
    idade INT
);

CREATE TABLE enderecos(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    rua VARCHAR(100),
    numero VARCHAR(10),
    pessoa_id INT NOT NULL,
    FOREIGN KEY(pessoa_id) REFERENCES pessoas(id)
);

INSERT INTO pessoas(nome, idade)
VALUES("Pedro", 19);

INSERT INTO enderecos(rua, numero, pessoa_id)
VALUES("RUA CAMINHO DO INDIO", "386", 1);

SELECT * FROM pessoas;
SELECT * FROM enderecos;

#INDEX

CREATE INDEX index_nome
ON pessoas(nome);

#EXERCICIO 21
CREATE DATABASE banco;
USE banco;

CREATE TABLE contas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    sobrenome VARCHAR(255),
    saldo FLOAT,
    dt_nascimento DATE NOT NULL
);

CREATE INDEX saldo_conta ON contas(saldo);

INSERT INTO contas(nome, sobrenome, saldo, dt_nascimento)
VALUES	("Flávio", "Henrique", 315, "2004-07-19"),
		("Rafael", "Ártico", 928, "1978-03-12"),
		("Jarbas", "André", 1.234, "1998-02-03");

SELECT * FROM contas;