use ANALISIS2;

select * from 

create table cakeIngredient(
	id int not null primary key identity(1,1),

);

create table cake(
	id int not null primary key identity(1,1),
	type varchar(max) not null,
	ingredients varchar(max) not null,
	price decimal(10,2) default 0.00
);

select * from cake;