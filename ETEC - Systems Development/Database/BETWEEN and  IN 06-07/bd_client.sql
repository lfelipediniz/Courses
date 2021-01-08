 create table cliente(
 
 id int(5) not null primary key auto_increment,
 nome char(60) not null,
 idade  int(3) not null,
 cidade char(60) not null,
 estado char(5) not null

 );
 
  create table produto(
 
 id_produto int(5) not null primary key auto_increment,
 nome_prod char(60) not null,
 qta_prod  int(9) not null,
 preco_prod float(9) not null

 );
 
 
insert into cliente(nome, idade, cidade, estado) values ('Vanderley Santana', 25 , 'São Paulo','SP');
insert into cliente(nome, idade, cidade, estado) values ('Jaziscreuda de Bonácio', 30 , 'São Paulo','SP');
insert into cliente(nome, idade, cidade, estado) values ('Alberto Aisteimildo', 25 , 'Rio de Janeiro','RJ');
insert into cliente(nome, idade, cidade, estado) values ('Duarda Berivalda', 50 , 'Rio de JAneiro','RJ');
insert into cliente(nome, idade, cidade, estado) values ('Cuca Bertollo', 50 , 'São Luís','MA');
select * from cliente;

insert into produto(nome_prod, qta_prod, preco_prod) values ('Sabonete PUP', 30 , 40.00);
insert into produto(nome_prod, qta_prod, preco_prod) values ('Candida Bodivar', 22 , 60.00);
insert into produto(nome_prod, qta_prod, preco_prod) values ('Ilustrador de Sapato', 40 , 21.00);
insert into produto(nome_prod, qta_prod, preco_prod) values ('hastes flexíveis com pontas de algodão', 70 , 60.00);
insert into produto(nome_prod, qta_prod, preco_prod) values ('álcool', 2 , 30.00);
select * from produto;



select nome from cliente
where estado in ('SP', 'RJ');


select nome from cliente
where estado not in ('SP');

select nome_prod
from produto
where preco_prod between 20.00 and 50.00;

select nome
from cliente
where idade between 20 and 30;

select nome
from cliente
where idade not between 20 and 30;

