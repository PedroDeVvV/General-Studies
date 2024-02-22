#TRIGGERS
create table tbl_log (
	id_log int not null auto_increment primary key,
	usuario varchar(50) not null,
    dt_log date not null,
    hora time not null
);

delimiter $
create trigger trg_log before delete
on tbl_cliente
for each row
begin 
	insert tbl_log
		(usuario, dt_log, hora)
        values(user(), curdate(), curtime());
end $