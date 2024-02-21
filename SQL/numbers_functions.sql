#CEIL - Arredonda números pra cima
SELECT amount, CEIL(amount) AS arredondado FROM payment;

#COUNT - número de ocorrências
SELECT COUNT(payment_id) FROM payment; -- 16049 registros

#EXERCICIO 31
SELECT COUNT(*) AS "QTD CLIENTES" FROM customer;

#FLOOR - Arredonda para baixo
SELECT amount, FLOOR(amount) FROM payment;

#MAX - maior valor da coluna
SELECT MAX(amount) AS "MAIOR VALOR" FROM payment;

#Min - menor valor da coluna
SELECT MIN(amount) AS "MENOR VALOR" FROM payment;

#EXERCICIO 32
-- use employees;
SELECT MIN(salary) AS "MENOR SALÁRIO", MAX(salary) AS "MAIOR SALÁRIO" FROM salaries;

#SUM - soma
USE sakila;
SELECT SUM(amount) FROM payment;
