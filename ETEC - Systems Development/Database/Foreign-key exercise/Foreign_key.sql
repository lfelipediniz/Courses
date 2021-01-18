create database salao;
use salao;

create table cliente (
	Chave_Cliente int primary key auto_increment,
	Nome_Cliente varchar(40),
    Endereco_Cliente varchar(70),
    Telefone_Cliente int(11),
    Email_CLiente varchar(40)
);

alter table cliente add column Chave_servico int;

create table produto (
	Chave_Servico int primary key auto_increment,
    Nome_Servico varchar(40),
    Valor_Servico float(10)
);

alter table cliente add foreign key (Chave_Servico) references produto(Chave_servico);

describe cliente;