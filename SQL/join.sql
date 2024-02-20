USE employees;

SELECT * FROM employees;
SELECT * FROM salaries;
SELECT * FROM titles;

#INNER JOIN
SELECT first_name AS "Primeiro Nome", last_name AS "Sobrenome", salary AS "Salário" FROM employees 
INNER JOIN salaries ON employees.emp_no = salaries.emp_no WHERE salary > 120000 ORDER BY salary ASC;

SELECT first_name, gender, title AS cargo FROM employees 
INNER JOIN titles ON employees.emp_no = titles.emp_no ORDER BY first_name;

#LEFT JOIN
#USE constraints;
select * from enderecos;
SELECT * FROM pessoas;

SELECT nome, enderecos.* FROM pessoas
LEFT JOIN enderecos ON pessoas.id = enderecos.pessoa_id;

#RIGHT JOIN
SELECT nome, enderecos.rua FROM pessoas 
RIGHT JOIN enderecos ON pessoas.id = enderecos.pessoa_id;

# MAIS DE DUAS TABELAS
SELECT employees.first_name, salaries.salary, titles.title FROM employees
INNER JOIN salaries ON employees.emp_no = salaries.emp_no
INNER JOIN titles ON employees.emp_no = titles.emp_no;

SELECT a.first_name, b.salary, c.title 
FROM employees a
INNER JOIN salaries b ON a.emp_no = b.emp_no
INNER JOIN titles c ON a.emp_no = c.emp_no;

