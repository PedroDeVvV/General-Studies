# ADDDATE - ADICIONA QTD DE DIA, MES OU ANOS A UMA DATA
USE sakila;
SELECT last_update, ADDDATE(last_update, "5 DAYS"),
ADDDATE(last_update, INTERVAL -2 MONTH),
ADDDATE(last_update, INTERVAL 18 YEAR)
FROM actor;

#DATEDIFF - CALCULA A DIFERENÇA ENTRE DATAS(RETORNA EM DIAS)
SELECT DATEDIFF(ADDDATE(last_update, INTERVAL 2 MONTH),last_update) FROM actor;

#ADDTIME - ADICIONA OU REMOVE TEMPODE UMA DATA
SELECT *, ADDTIME(last_update, "5 03:00:00") AS "ADDTIME" FROM actor; -- 5 DIAS E 3 HORAS DE DIFERENÇA

#DATE_FORMAT - formata a data e possui diferença entre caracteres maiusculos e minusculos
SELECT DATE_FORMAT(last_update, "%Y") AS ano, 
DATE_FORMAT(last_update, "%d/%m/%Y") AS brazillian_format,
last_update
FROM actor;

#DAY - RETORNA O DIA DE UMA DATA
SELECT last_update, DAY(last_update) AS "DIA", DAY(ADDTIME(last_update, "5 00:00:00")) AS "DIA COM ADD 5" FROM actor;


