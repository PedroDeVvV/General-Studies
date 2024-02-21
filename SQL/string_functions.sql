use sakila;

#FUNÇÕES PARA STRING
#char_length( ) -- tamanho da string
SELECT first_name, char_length(first_name) AS "QTD LETTERS", last_name, char_length(last_name) 
FROM actor WHERE char_length(first_name) > 5 AND char_length(last_name) > 5 ORDER BY char_length(first_name);

#EXERCICIO 26
SELECT address_id, address, postal_code,char_length(postal_code) AS "LENGTH POSTALCODE" 
FROM address ORDER BY address_id DESC;

#CONCAT
use empresa;
#select * from funcionarios;
SELECT CONCAT(nome, " tem ",idade, " anos de idade!") AS nome_idade FROM funcionarios;

#Exercicio 27
SELECT actor_id, CONCAT(first_name, " ", last_name) AS nome_completo FROM actor;

#CONCAT_WS   -  separador comum
SELECT CONCAT_WS("-", nome, idade) FROM funcionarios;

#FORMAT - Arredondamento conforme o numero de casas setado
SELECT customer_id, amount, FORMAT(amount, 1) FROM payment;

#INSTR - RETORNA A POSIÇÃO DO CARACTERE OU STRING
SELECT email, INSTR(email, "@") FROM customer; -- retorna a posição que está o @

#LCASE - transforma em lower case ou UCASE(uppercase)
SELECT first_name, last_name, LCASE(CONCAT(first_name, " ",last_name)) AS nome_completo_lowercase FROM customer;

#LEFT - extrai qtd de caracteres da esquerda pra direita, quantidade de caracteres é passada por paramêtro
SELECT title, LEFT(title, 8) FROM film WHERE film_id = 1;-- retorna só as 8 primeiras strings

#EXERCICIO 28
SELECT * FROM address;
SELECT address_id, LEFT(last_update, 11) AS "data" FROM address WHERE address_id > 50 ORDER BY address_id;

#REPLACE
select REPLACE(name, "Action", "Action & Adventure") AS "name" from category;

#EXERCICIO 29
SELECT REPLACE(first_name, "MARY", "Mary") AS nome, REPLACE(last_name, "SMITH", "Smith") AS sobrenome 
FROM customer WHERE first_name = "MARY" AND last_name = "SMITH"; 

#RIGHT - Extrai texto da direta pra esquerda, recebe número a ser extraido por paramêtro
SELECT RIGHT(last_update, 8) AS "hORÁRIO EXTRAIDO" FROM category;

#SUBSTR - extrai string a partir de dois indices
SELECT SUBSTR(last_update, 6, 2) FROM actor;-- RETORNA O MêS

#EXERCICIO 30
SELECT country_id, UCASE(country) AS "Países" FROM country;