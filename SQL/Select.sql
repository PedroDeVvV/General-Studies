use employees;

#EXERCICÍO 14
SELECT * FROM titles WHERE emp_no >= 11500;

#DISTINCT
SELECT DISTINCT gender FROM employees;
SELECT DISTINCT title FROM titles ORDER BY title;

#OPERADORES LÓGICOS
#NOT
SELECT title FROM titles WHERE NOT title = 'Staff' AND NOT title = "Senior Staff" GROUP BY title ORDER BY title;

#EXERCICIO 15
SELECT * FROM titles ORDER BY title DESC;

#LIMIT
SELECT * FROM salaries ORDER BY salary DESC LIMIT 5;
SELECT * FROM employees WHERE gender = "F" ORDER BY hire_date DESC LIMIT 5;

#EXECICIO 16
SELECT * FROM titles ORDER BY title ASC LIMIT 5; 

#FUNCTION
#MIN
SELECT MIN(salary) menor_salario FROM salaries;

#MAX
SELECT MAX(salary) AS maior_salario FROM salaries;

#COUNT
SELECT COUNT(*) AS QTD_SALARY FROM salaries WHERE salary > 100000;
SELECT COUNT(*) AS MEN_QTD FROM employees WHERE gender = "M";
SELECT COUNT(*) AS WOMEN_QTD FROM employees WHERE gender = "F";
SELECT COUNT(emp_no) AS TOTAL_EMPLOYEES FROM employees;

#EXERCICIO 17
SELECT COUNT(*) AS QTD_DEPARTMENTS FROM departments;

#AVG
SELECT AVG(salary) AS AVERAGE_SALARY FROM salaries;

#SUM
SELECT SUM(salary) AS SUM_ALL_SALARIES FROM salaries;

#LIKE
SELECT * FROM employees WHERE first_name LIKE "%ber%";
SELECT * FROM employees WHERE first_name LIKE "ber%";
SELECT * FROM employees WHERE first_name LIKE "%ber";
SELECT * FROM employees WHERE last_name LIKE "%Mc%";

#EXERCICIO 18
SELECT * FROM titles WHERE title LIKE "%Engineer%";

#IN
SELECT * FROM dept_emp WHERE dept_no IN ('d004', 'd005', 'd006') ORDER BY dept_no;

#EXERCICIO 19
SELECT * FROM employees WHERE last_name IN ('Facello', 'Peac') AND gender = "F" ORDER BY first_name;

#BETWEEN
SELECT * FROM salaries WHERE salary BETWEEN 100000 AND 110000 ORDER BY salary;

#ALIAS
SELECT dept_no AS "Número do departamento", dept_name AS department_name FROM departments ORDER BY department_name;
