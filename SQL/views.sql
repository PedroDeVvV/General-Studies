-- ===============================================
-- VIEW
-- ===============================================
create view nome_vw as 
	select c.cod_cliente as codigo, c.nome_cliente as nome, p.cod_pedido as pedido, 
    p.data_pedido as data_requisicao from tbl_cliente c, tbl_pedido p where c.cod_cliente = p.cod_cliente;

select * from nome_vw;

create view vw_clipedprod as 
	select c.cod_cliente as codigo, c.nome_cliente as nome, p.cod_pedido as pedido,
    p.data_pedido as data_requisicao,
    i.i_cod_produto as produto, i.qtde from tbl_cliente c, tbl_pedido p, tbl_itempedido i where c.cod_cliente
    = p.cod_cliente and
	i.i_cod_pedido = p.cod_pedido;
    
select * from vw_clipedprod;

-- select distinct i_cod_produto from tbl_itempedido;
-- select i_cod_produto from tbl_itempedido group by i_cod_produto;

-- truncate tbl_itempedido;
-- drop constraint fk_cliente;=
-- alter table tbl_itempedido drop foreign key fk_pedido1;

-- ================================
-- EX 01
-- ================================

create view vw_pedidos2014 as
	select c.cod_cliente as codigo, c.nome_cliente as nome, p.data_pedido as pedido, p.data_entrega as dt_entrega from
    tbl_cliente c, tbl_pedido p where c.cod_cliente = p.cod_cliente and p.data_pedido > "2014-01-30";
    
select * from vw_pedidos2014;

-- ================================
-- EX 02
-- ================================

create view vw_qtdProduto as
	select 	c.cod_cliente as codigo, c.nome_cliente as 
			nome, p.data_pedido as pedido, p.data_entrega as dt_entrega, 
			i.qtde as quantidade, i.i_cod_produto as codigo_produto
    from tbl_cliente c, tbl_pedido p, tbl_itempedido i
    where c.cod_cliente = p.cod_cliente and p.cod_pedido = i.i_cod_pedido
		and i.qtde > 25;

select * from vw_qtdProduto;

-- EX 03
-- drop view vw_qtdProduto;

create view vw_qtdProduto as
	select 	p.cod_pedido as codigo_pedido, p.cod_cliente as codigo_cliente,
			i.qtde as quantidade, i.i_cod_produto as codigo_produto,
            prod.desc_produto as descricao_produto
    from tbl_produto prod, tbl_pedido p, tbl_itempedido i
    where p.cod_pedido = i.i_cod_pedido;

select * from vw_qtdProduto;