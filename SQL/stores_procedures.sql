USE employees;

SELECT * FROM employees;
SELECT * FROM salaries;

SELECT CONCAT(first_name, " ",last_name) AS "EMPREGADO", gender AS "GÊNERO", salary
AS "SALÁRIO", birth_date AS "NASCIMENTO" FROM employees
JOIN salaries ON employees.emp_no = salaries.emp_no;

DELIMITER $$

CREATE PROCEDURE fullName()
BEGIN
		SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
END $$

DELIMITER ;

CALL fullName;

DROP PROCEDURE fullName;


#LISTANDO TODAS AS PROCEDURES
SHOW PROCEDURE STATUS;

#EXTRAINDO MAIS DETALHES DA PROCEDURE
SHOW CREATE PROCEDURE fullName;

#PROCEDURE SALÁRIO

DELIMITER $$
CREATE PROCEDURE showSalary()
BEGIN
	SELECT CONCAT(first_name, " ",last_name) AS "EMPREGADO", gender AS "GÊNERO", salary
	AS "SALÁRIO", birth_date AS "NASCIMENTO" FROM employees
	JOIN salaries ON employees.emp_no = salaries.emp_no;
END $$
DELIMITER ;

CALL showSalary;

#PROCEDURE COM PARAMÊTROS
DELIMITER $$
CREATE PROCEDURE showMaxSalary(IN numero INT)
BEGIN
	SELECT CONCAT(first_name, " ",last_name) AS "EMPREGADO", gender AS "GÊNERO", salary
	AS "SALÁRIO", birth_date AS "NASCIMENTO" FROM employees
	JOIN salaries ON employees.emp_no = salaries.emp_no WHERE salaries.salary >= numero ORDER BY salaries.salary;
END $$
DELIMITER ;

CALL showMaxSalary(100000);

delimiter $
create procedure prc_ins_prod (in vnomeprod char(100),
							in vvalor decimal(10, 2),
							out msg varchar(100))

	begin 
		declare valor decimal(10,2);
        declare erro bool;
        
        set erro = true;
        
        if(vvalor > 0) then
			set valor = vvalor;
		else
			set erro = false;
            set msg = "Valor zerado, verifiquei";
		end if;
		if(erro) then
			insert into tbl_produto(nome_produto, valor)
            values (vnomeprod, vvalor);
            set msg = "Incluido com sucesso!";
		end if;
	end$
delimiter ;

#EX - 1

delimiter $
CREATE PROCEDURE prc_acrescimo(IN codigoProduto INT, IN percentualAcrescimo DECIMAL(10,2))
BEGIN
    DECLARE mensagem VARCHAR(255);

    IF EXISTS (SELECT * FROM tbl_produto WHERE cod_produto = codigoProduto) THEN
        UPDATE tbl_produto
        SET valor = valor * (1 + percentualAcrescimo / 100)
        WHERE cod_produto = codigoProduto;
        
        SET mensagem = CONCAT('Acréscimo de ', percentualAcrescimo, '% aplicado ao produto de código ', codigoProduto);
    ELSE
        SET mensagem = 'Produto com o código informado não encontrado.';
    END IF;

    SELECT mensagem AS Resultado;
END;

delimiter $

CALL prc_ins_prod(1, 10.0);
SHOW PROCEDURE STATUS WHERE Db = 'bd_vendas';


