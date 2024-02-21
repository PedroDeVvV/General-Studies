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

#DAYOFWEEK - RETORNA O DIA DA SEMANA(Domingo 1 - Sábado - 7)
select last_update, DAYOFWEEK(last_update), DAYOFWEEK(ADDDATE(last_update, "3 DAYS")) AS "Sábado" FROM actor;

#DAYOFYEAR  - 1 A 365
SELECT last_update, DAYOFYEAR(last_update), DAYOFYEAR(ADDDATE(last_update, INTERVAL 5 MONTH)) FROM actor;
SELECT last_update, DAYOFYEAR("2024-07-19") FROM ACTOR;

#WEEKOFYEAR - 1 A 42
SELECT last_update, WEEKOFYEAR(last_update) AS semana, 
WEEKOFYEAR(ADDDATE(last_update, INTERVAL 4 MONTH)) AS
semana_manipulado
FROM actor;
SELECT WEEKOFYEAR("2024-02-21");

#MONTH - EXTRAI O MêS DE UMA DATA 1-12
SELECT last_update, MONTH(last_update), MONTH(ADDDATE(last_update, INTERVAL 5 MONTH)) 
AS mes_manipulado
FROM actor;

#YEAR - EXTRAI O ANO DE UMA DATA
SELECT last_update, YEAR(last_update) AS ano_correto, YEAR(ADDDATE(last_update, INTERVAL -2 YEAR)) 
AS ano_manipulado
FROM actor;