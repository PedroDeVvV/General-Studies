create database bd_vendas;
-- drop database bd_vendas;
use bd_vendas;

-- =============================================
-- TABELAS
-- =============================================
create table tbl_endereco(
	id int(10) not null,
    cep int(9) not null,
    logradouro varchar(90) not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    estado char(2) not null,
    
    constraint pk_endereco primary key (cep)
);

create table tbl_produto (
    cod_produto int unsigned auto_increment,
    nome_produto varchar(100) not null,
    desc_produto varchar(100) not null,
    unid_medida varchar(2) not null,
    estoque_atual int default 0,
    estoque_min int default 0,
    estoque_max int default 0,
    valor decimal(10,2) not null,
    primary key (cod_produto)
);
    
create table tbl_cliente (
    cod_cliente 	int unsigned auto_increment,
    nome_cliente 	varchar(45) not null,
    cpf 			varchar(11) default '',
    data_nasc 		date,
    cep 			int(9) default 0,
    numero 			varchar(10) default '',
    complemento 	varchar(20) default '',

    primary key (cod_cliente),
    constraint foreign key fk_clientcep(cep) references tbl_endereco(cep)
);

create table tbl_pedido (
    cod_pedido 		int unsigned auto_increment,
    data_pedido 	date,
    data_entrega 	date,
    cod_cliente 	int unsigned not null,
    primary key (cod_pedido),
    constraint fk_cliente foreign key (cod_cliente)
    references tbl_cliente(cod_cliente)    
);
create table tbl_itempedido (
    qtde 			int unsigned not null,
    i_cod_pedido 	int unsigned not null,
    i_cod_produto 	int unsigned not null,
    i_valor 		decimal(10,2) not null,
    constraint fk_pedido1
        foreign key (i_cod_pedido)
        references tbl_pedido(cod_pedido),
    constraint fk_produto1
        foreign key (i_cod_produto)
        references tbl_produto(cod_produto)
);
-- =============================================
-- INSERTS
-- =============================================

insert into tbl_produto (nome_produto, desc_produto, unid_medida, estoque_atual, estoque_min, estoque_max, valor) values 
('Arroz', 	 'Arroz agulinha tipo 1', 			'SC', 10, 2, 20, 12.50),
('Feijão', 	 'Feijão carioquinha com casca', 	'SC', 25, 5, 60, 7.50),
('Macarrão', 'Macarrão Adria espaguete', 		'PC', 50, 10, 80, 5.50),
('Óleo', 	 'Óleo Lisa', 				 		'LT', 15, 10, 45, 6.50),
('Vinagre',  'Vinagre Castelo', 				'GR', 30, 10, 50, 7.89),
('Batata', 	 'Batata lavada', 					'KG', 100, 50, 200, 4.50),
('Tomate', 	 'Tomate vermelho', 				'KG', 80, 8, 160, 6.90),
('Cebola', 	 'Cebola com casca', 				'KG', 50, 5, 100, 6.99),
('Leite', 	 'Leite Leco', 						'CX', 25, 10, 90, 2.50),
('Café', 	 'Café do ponto', 					'SC', 500, 100, 200, 11.50);

insert into tbl_cliente (cod_cliente, nome_cliente, cpf, data_nasc, cep, numero, complemento) values 
(1 ,'Marcos Costa de Sousa', 	'12345678901', '1981-02-06', 6790000, '1525', 'apto 166C'),
(2, 'Marcos Costa de Sousa', 	'12345678901', '1981-02-06', 6790000, '1525', 'apto 166C'),
(3, 'Zoroastro Zoando', 		'01987654321', '1989-06-15', 6790000, '250', ''),
(4, 'Idelbrandolâncio Silva', 	'54698721364', '1974-09-27', 6790000, '120', ''),
(5, 'Cosmólio Ferreira', 		'41368529687', '1966-12-01', 6790000, '25', 'apto 255 F'),
(6, 'Conegunda Prado', 		'54781269501', '1950-10-06', 6790000, '50', 'apto 166C'),
(7 ,'Brogundes Asmônio', 		'41256398745', '1940-05-10', 6790000, '100', ''),
(8 ,'Iscruência da Silva', 	'12457965823', '1974-11-25', 6790000, '5', ''),
(9 ,'Zizafânio Zizundo', 		'12457965823', '1964-08-14', 6790000, '25', ''),
(10, 'Ricuerda Zunda', 			'12457965823', '1934-10-14', 6790000, '123', ''),
(11, 'Aninoado Zinzão', 		'12457965823', '1976-12-25', 6790000, '50', '');

select * from tbl_cliente;

insert into tbl_pedido(data_pedido, data_entrega, cod_cliente) values 
('2024-01-01', '2024-01-15', 1),
('2024-01-02', '2024-01-16', 2),
('2024-01-03', '2024-01-17', 3),
('2024-01-04', '2024-01-18', 4),
('2024-01-05', '2024-01-19', 5);

insert into tbl_pedido(data_pedido, data_entrega, cod_cliente) values 
('2013-01-01', '2024-01-15', 11);

select * from tbl_cliente;

insert into tbl_itempedido(qtde, i_cod_pedido, i_cod_produto, i_valor) values 
(2, 1, 1, (qtde*(select valor from tbl_produto where cod_produto = 1))),
(10, 2, 2, (qtde*(select valor from tbl_produto where cod_produto = 2))),
(5, 3, 3, (qtde*(select valor from tbl_produto where cod_produto = 3)));

insert into tbl_itempedido(qtde, i_cod_pedido, i_cod_produto, i_valor) values 
(28, 1, 1, (qtde*(select valor from tbl_produto where cod_produto = 1)));

select * from tbl_itempedido;

-- =============================================
-- SELECTS
-- =============================================

select cidade from tbl_endereco group by cidade;
select*from tbl_itempedido;
select*from tbl_produto;
select*from tbl_cliente;
select*from tbl_pedido;
select*from tbl_itempedido;

select i_cod_pedido, qtde, i_valor,  sum(qtde * i_valor) as valor_total_produto
from tbl_itempedido
-- where i_cod_pedido = 1
group by 1;
