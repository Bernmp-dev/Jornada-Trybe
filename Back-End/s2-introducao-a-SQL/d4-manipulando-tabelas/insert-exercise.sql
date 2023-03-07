use sakila;

-- 1 Insira um novo funcionário na tabela sakila.staff.

select * from staff;

insert into staff (first_name, last_name, address_id, email, store_id, active, username, password)
values('Bernardo', 'Marques', 2, 'bernmp@saikastaf.com', 1, 1, 'bernmp', 12345);

-- 2 Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.

insert into staff (first_name, last_name, address_id, email, store_id, active, username, password)
values
('juan', 'Marques', 2, 'juanmm@saikastaf.com', 1, 1, 'juanmm', 010101),
('Arnaldo', 'Jesus', 2, 'arn@saikastaf.com', 1, 1, 'arnJ', 67890);

-- 3 Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.

insert into actor (first_name, last_name)
select first_name, last_name from customer
limit 5;

select * from actor;

-- 4 Cadastre três categorias de uma vez só na tabela sakila.category.

insert into category (name)
values('cat1'),('cat2'),('cat3');

select * from category;

-- 5 Cadastre uma nova loja na tabela sakila.store.

insert into store (manager_staff_id, address_id)
values(3, 3);

select * from store;