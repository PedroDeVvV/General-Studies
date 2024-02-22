CREATE DATABASE relacoes;
USE relacoes;

# 1-1 one-to-one
CREATE TABLE estudante(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100),
    turma VARCHAR(5)
);

CREATE TABLE contatos(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    telefone VARCHAR(20),
    estudante_id INT NOT NULL,
    FOREIGN KEY(estudante_id) REFERENCES estudante(id)
);

INSERT INTO estudante(nome, turma)
VALUES  ("Pedro", "5A"),
		("Matheus", "3A"),
		("Ana Júlia", "7A");

INSERT INTO contatos(telefone, estudante_id)
VALUES	("(11)4781-6586", 1),
		("(11)4241-7933)", 3),
		("(23)3218-9823", 2);

SELECT * FROM estudante;
SELECT * FROM contatos;

SELECT nome, turma, telefone FROM estudante 
LEFT JOIN contatos ON estudante.id = contatos.estudante_id;

# 1-n one-to-many
CREATE TABLE clientes (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100),
    data_nascimento DATE
);

CREATE TABLE pedidos(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    qtd_itens INT(10),
    total FLOAT,
    cliente_id INT NOT NULL,
    FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes(nome, data_nascimento) 
VALUES  ("Rafael", "1978-03-12"),
		("Daniel", "2004-02-14"),
		("Everton", "1987-02-03");
        
INSERT INTO pedidos(qtd_itens, total, cliente_id)
VALUES 	(10, 318.38, 1),
		(5, 34.14, 2),
		(5, 245.32, 3),
        (1, 318.38, 1),
		(2, 314.14, 2),
		(3, 245.32, 3),
        (6, 3128.38, 1),
		(8, 342.14, 2),
		(90, 2125.32, 3);

SELECT * FROM pedidos;
SELECT * FROM clientes;

SELECT nome, qtd_itens, total, data_nascimento FROM clientes 
RIGHT JOIN pedidos ON clientes.id = pedidos.cliente_id WHERE clientes.id = 1;

# n-n many-to-man
CREATE TABLE materias (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100)
);

CREATE table estudante_materia (
	estudante_id INT NOT NULL,
    materia_id INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES estudante(id),
    FOREIGN KEY(materia_id) REFERENCES materias(id)
);

INSERT INTO materias(nome)
VALUES	("Matemática"),
		("Fisíca"),
		("Biologia"),
		("Geografia");

INSERT INTO estudante_materia(estudante_id, materia_id)
VALUES  (1,1),
		(1,2),
		(1,3),
		(2,1),
		(2,2),
		(2,3),
		(3,1),
		(3,2);
        
SELECT * FROM estudante_materia;
SELECT * FROM materias;
SELECT * FROM estudante;

SELECT estudante.nome, estudante.turma, materias.nome AS "Disciplinas" FROM estudante 
INNER JOIN estudante_materia ON estudante_materia.estudante_id = estudante.id
INNER JOIN materias ON materias.id = estudante_materia.materia_id;

SELECT * FROM estudante
JOIN estudante_materia ON estudante_materia.estudante_id = estudante.id;

       