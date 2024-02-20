#UNION
SELECT dept_no FROM departments 
UNION SELECT dept_no FROM dept_emp; #UNE O RESULTADO DAS DUAS TABELAS, SEM DUPLICIDADE

# UNION ALL
# UNE OS RESULTADOS, RETORNA DUPLICADO, 
# CAMPOS DEVEM TER NOMES IGUAIS NAS DUAS TABELAS
SELECT dept_no AS departamento FROM departments 
UNION ALL SELECT dept_no FROM dept_emp ORDER BY departamento; 


#GROUP BY
SELECT gender, COUNT(gender) AS 'qtd por genero' FROM employees GROUP BY gender;

#EXERCICIO 23
SELECT hire_date AS "DATA DE CONTRATAÇÃO", COUNT(hire_date) AS "CONTRATADOS" FROM employees 
GROUP BY hire_date ORDER BY COUNT(hire_date) DESC;

#HAVING - QUANDO TEMOS FUNÇÕES DE AGREGAÇÃO NÃO PODEMOS USAR WHERE
#SUBSTITUIMOS POR HAVING
SELECT hire_date AS "DATA DE CONTRATAÇÃO", COUNT(hire_date) AS "CONTRATADOS" 
FROM employees 
GROUP BY hire_date 
HAVING COUNT(hire_date) > 130
ORDER BY COUNT(hire_date) DESC;

#EXERCICIO 24
SELECT hire_date, COUNT(hire_date) FROM employees 
GROUP BY hire_date
HAVING COUNT(hire_date) < 50
ORDER BY COUNT(hire_date) DESC;

#SUBQUERIES
SELECT emp_no, first_name ,(SELECT SUM(salary) FROM salaries 
WHERE employees.emp_no = salaries.emp_no) AS soma_salario FROM employees;

#EXISTS
SELECT emp_no, first_name, last_name, (
	SELECT SUM(salary) FROM salaries 
    WHERE employees.emp_no = salaries.emp_no
) AS soma_salario 
FROM employees WHERE EXISTS(
SELECT salary FROM salaries 
    WHERE employees.emp_no = salaries.emp_no
    HAVING SUM(salary) > 2000000
);

#ANY - SÓ RETORNA SE ALGUÉM ATENDER A CONDIÇÃO
SELECT first_name FROM employees
WHERE emp_no = ANY (
	SELECT emp_no
    FROM salaries 
    WHERE salary > 150000
);