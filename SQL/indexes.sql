use employees;

#ADICIONANDO INDEXES EM COLUNAS MUITO UTILIZADAS
#MELHORA A PERFORMANCE DA QUERY

SELECT * FROM employees WHERE first_name = 'Georgi'; #0.79S SEM INDEX


CREATE INDEX index_nome
ON employees(first_name);

SELECT * FROM employees WHERE first_name = 'Georgi'; #0.31S COM INDEX

#DROP INDEX index_nome ON employees;