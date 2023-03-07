use sakila;

-- 1 Exclua do banco de dados o ator com o nome de “KARL”.

select * from actor;

delete from film_actor
where actor_id = 12;

select * from film_actor;

delete from actor
where first_name = 'KARL' or last_name = 'KARL';

select * from actor;

-- 2 Exclua do banco de dados os atores com o nome de “MATTHEW”.

select * from film_actor;

delete from film_actor
where actor_id in(8, 103, 181);

select * from film_actor;

delete from actor
where first_name = 'MATTHEW' or last_name = 'MATTHEW';

select * from actor;

-- 3 Exclua da tabela film_text todos os registros que possuem a palavra “saga” em suas descrições.

select * from film_text;

delete from film_text
where description like '% saga %';

select * from film_text;

-- 4 Apague da maneira mais performática possível todos os 
-- registros das tabelas film_actor e film_category.

truncate film_actor;
truncate film_category;

select * from film_actor;
select * from film_category;

-- 5 Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE
-- foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

-- 6 Exclua o banco de dados e o recrie (use as instruções no início desta aula).